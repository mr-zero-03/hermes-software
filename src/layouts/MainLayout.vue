<template>
  <q-layout view="lHh Lpr lFf">
    <q-header fixed elevated>
      <Navbar :linksList="linksList" />

      <q-toolbar v-if="false">
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-if="false"
      :v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label header >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
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

export default {
  components: {
    EssentialLink,
    Navbar,
    CustomFooter
  },
  setup () {
    return {
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

<style scoped>
  .arrow_up {
    position: fixed;
    right: 40px;
    bottom: 40px;
    z-index: 99;
  }
</style>
