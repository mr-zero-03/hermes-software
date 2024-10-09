<template>
  <q-layout view="lHh Lpr lFf">
    <q-header fixed elevated>
      <Navbar class="navbar-desktop" :linksList="linksList" />

      <div class="navbar-mobile">
        <q-toolbar class="bg-white text-primary" style="min-height: 80px">
          <q-toolbar-title>
            <q-btn to="/" dense flat>
              <img src="~assets/hermes-software-logo-slogan.svg" alt="Hermes Software" width="80px" height="auto">
            </q-btn>
          </q-toolbar-title>

          <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        </q-toolbar>
      </div>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" bordered>
      <q-img v-if="authStore.isAuthenticated" class="" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
        <div class="absolute-bottom full-height">
          <q-avatar text-color="white" size="80px" class="q-pa-none" icon="account_circle">
            <!-- <img src="https://cdn.quasar.dev/img/boy-avatar.png"> -->
          </q-avatar>
          <div class="text-weight-bold">{{authStore.user.name}}</div>
          <div>{{authStore.user.email}}</div>
        </div>
      </q-img>

      <q-list>
        <q-item-label header >
          Hermes Software
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>

      <div class="absolute-bottom q-pa-md">
        Hermes Software
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />

      <transition name="up">
        <q-btn
          class="arrow_up"
          round
          color="primary"
          icon="keyboard_arrow_up"
          @click="upPage"
          v-if="show"
        />
      </transition>

      <CustomFooter />
    </q-page-container>

  </q-layout>
</template>

<script>
import EssentialLink from 'components/header/EssentialLink.vue'
import Navbar from 'components/header/Navbar.vue'
import CustomFooter from 'components/footer/Footer.vue'
import { useAuthStore } from 'stores/auth'

const authStore = useAuthStore()

export default {
  components: {
    EssentialLink,
    Navbar,
    CustomFooter
  },
  setup () {
    return {
      authStore,
      linksList: [
        { title: 'Dashboard', link: '/dashboard', category: [ 'admin', 'comerciante' ], btn_type: 'link' },
        { title: 'Home', link: '/', category: [ 'general' ], btn_type: 'link' },
        { title: 'Contacto', link: '/contact', category: [ 'general' ], btn_type: 'link' },
        { title: 'About Us', link: '/about-us', category: [ 'general' ], btn_type: 'link' },
        { title: 'Tienda', link: '/shop', category: [ 'general', 'admin', 'comerciante' ], btn_type: 'link' },
        { title: 'Usuarios', link: '/users', category: [ 'admin' ], btn_type: 'btn' },
        { title: 'Productos', link: '/products', category: [ 'admin', 'comerciante' ], btn_type: 'btn' },
        { title: 'Login', link: '/login', category: [ 'admin', 'comerciante', 'general' ], btn_type: 'btn' }
      ]
    }
  },
  data () {
    return {
      leftDrawerOpen: false,
      show: false
    }
  },
  methods: {
    toggleLeftDrawer () {
      this.leftDrawerOpen = !this.leftDrawerOpen
    },
    upPage () {
      window.scrollTo( {
        top: 0,
        behavior: 'smooth'
      } )
    },
    scrollPage () { this.show = ( document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ) ? true : false }
  },
  mounted () {
    window.addEventListener( 'scroll', this.scrollPage )
  },
  beforeUnmount () {
    window.removeEventListener( 'scroll', this.scrollPage )
  }
}
</script>

<style lang="scss" scoped>
  .arrow_up {
    position: fixed;
    right: 40px;
    bottom: 40px;
    z-index: 99;
  }
  .navbar-desktop {
    @media ( max-width: $breakpoint-sm-max ) {
      display: none;
    }
  }
  .navbar-mobile {
    display: none;

    @media ( max-width: $breakpoint-sm-max ) {
      display: revert;
    }
  }
</style>
