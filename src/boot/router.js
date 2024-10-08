import { boot } from 'quasar/wrappers'
import { Notify } from 'quasar'
import { useAuthStore } from 'stores/auth'

const authStore = useAuthStore()

export default boot( ( { router, store } ) => {
  router.beforeEach( async ( to, from ) => {
    const requiresAuth = to.meta.requiresAuth
    const allowedRoles = to.meta.roles

    // Validate if page requires auth
    if ( requiresAuth && !authStore.isAuthenticated ) {
      router.push( '/login' ) // Redirect to login
    }

    // Validate Role
    if ( allowedRoles && !allowedRoles.includes( authStore.userRole ) ) {
      router.push( '/dashboard' ) // Redirect to dashboard
    }

    // Validate Login
    if ( authStore.isAuthenticated && to.path === '/login' ) {
      router.push( '/dashboard' ) // Redirect to dashboard
    }
  } )
} )
