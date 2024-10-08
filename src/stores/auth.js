import { defineStore } from 'pinia'
import { LocalStorage } from 'quasar'
import { useUsersStore } from 'stores/users'

const usersStore = useUsersStore()

const STORAGE_NAME = 'current_user'

export const useAuthStore = defineStore( 'auth', {
  state: () => ( {
    user: LocalStorage.getItem( STORAGE_NAME ) || null,
  } ),
  getters: {
    isAuthenticated: (state) => !!state.user,
    userRole: (state) => state.user ? state.user.role : null,
  },
  actions: {
    setCurrentUser ( user ) {
      this.user = user
      LocalStorage.set( STORAGE_NAME, this.user )
    },
    foundUser ( email, password ) {
      const allUsers = usersStore.getAllUsers()
      const foundUser = allUsers.find( user => user.email === email && user.password === password )

      return( foundUser )
    },
    login ( userData ) {
      const email = userData.email || '';
      const pass = userData.password || '';
      const user = this.foundUser( email, pass )
      this.setCurrentUser( user )

      return( user ? true : false )
    },
    logout () {
      this.user = null
      LocalStorage.remove( STORAGE_NAME )
    },
  }
} )


