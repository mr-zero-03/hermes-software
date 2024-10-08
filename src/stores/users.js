import { defineStore } from 'pinia'
import { LocalStorage } from 'quasar'

export const useUsersStore = defineStore( 'users', {
  state: () => ( {
    storage_name: 'users_database',
    defaultAdmin: { id: 'a2-d3-m4-i5-n7', username: 'Admin', email: 'admin@test.com', password: 'seguro123', rol: 'admin' },
    data: [],
  } ),
  getters: {
  },
  actions: {
    getLocalData () {
      return JSON.parse( LocalStorage.getItem( this.storage_name ) )
    },
    getData () {
      const data = this.getLocalData()

      if ( data ) { // Exists
        this.data = data
        return( data )
      } else { // NO exists
        this.saveData()
        return( this.data )
      }
    },
    getAllUsers () {
      const localUsers = this.getData()
      const toReturn = [...localUsers]
      toReturn.push( {...this.defaultAdmin} )

      return( toReturn )
    },
    saveData () {
      localStorage.setItem( this.storage_name, JSON.stringify( this.data ) );
    },
    addData ( data ) {
      this.data.push( data )
      this.saveData()
    },
    updateData ( updatedData ) {
      const index = this.data.findIndex( obj => obj.id === updatedData.id );

      if ( index !== -1 ) {
        this.data[ index ] = { ...this.data[ index ], ...updatedData }
        this.saveData()
      } else {
        console.error( 'User not found!' )
      }
    },
    deleteData ( id ) {
      const index = this.data.findIndex( obj => obj.id === id );
      if ( index !== -1 ) {
        this.data.splice( index, 1 )
        this.saveData()
      } else {
        console.error( 'User not found!' );
      }
    }
  },
} )

