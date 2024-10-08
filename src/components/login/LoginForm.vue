<template>
  <div class="full-width">
    <q-card
      tag="form"
      class="q-pa-sm q-py-md shadow-6 contact-form"
    >
      <q-card-section class="text-center">
        <img src="~assets/hermes-software-logo-slogan.svg" alt="Hermes Software" width="auto" height="50" />
        <div class="text-h5 text-weight-regular">Iniciar Sesion</div>
      </q-card-section>

      <q-card-section>
        <div class="form-input q-pb-sm">
          <span>Email</span>
          <q-input type="email" label="email@example.com" class="q-pt-sm" standout outlined v-model="dataForm.email" dense />
        </div>

        <div class="form-input q-pb-sm">
          <span>Password</span>
          <q-input type="password" label="Your password" class="q-pt-sm" standout outlined v-model="dataForm.password" dense />
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn @click="onSubmit" color="primary" no-caps class="full-width">Login</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { Notify } from 'quasar'
import { useAuthStore } from 'src/stores/auth';

const autoStore = useAuthStore()

export default {
  data () {
    return {
      dataForm: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit () {
      if ( autoStore.login( this.dataForm ) ) {
        Notify.create( {
          color: 'green',
          textColor: 'white',
          icon: 'verified',
          message: '¡Bienvenido!',
          position: 'top-right'
        } )

        this.$router.push( '/dashboard' )
      } else {
        Notify.create( {
          color: 'negative',
          textColor: 'white',
          icon: 'dangerous',
          message: '¡Incorrect password or email!',
          position: 'top-right'
        } )
      }
    },
    onReset () {
      this.dataForm = { ...this.dataFormBase }
    }
  }
}
</script>

<style lang="scss" scoped>
  .contact-form {
    border: 1px solid $primary;
  }
</style>
