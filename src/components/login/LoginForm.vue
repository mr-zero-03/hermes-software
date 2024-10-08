<template>
  <div class="full-width">
    <q-card
      tag="form"
      @submit="onSubmit"
      class="q-pa-sm q-py-md shadow-6 contact-form"
    >
      <q-card-section class="text-center">
        <img src="~assets/hermes-software-logo-slogan.svg" alt="Hermes Software" width="auto" height="50" />
        <div class="text-h5 text-weight-regular">Iniciar Sesion</div>
      </q-card-section>

      <q-card-section>
        <div class="form-input q-pb-sm">
          <span>Email</span>
          <q-input type="email" label="email@example.com" class="q-pt-sm" standout outlined v-model="dataForm.name" dense />
        </div>

        <div class="form-input q-pb-sm">
          <span>Password</span>
          <q-input type="password" label="Your password" class="q-pt-sm" standout outlined v-model="dataForm.email" dense />
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn color="primary" no-caps class="full-width">Login</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>

export default {
  data () {
    return {
      dataFormBase: {
        name: '',
        email: ''
      },
      dataForm: { ...this.dataFormBase }
    }
  },
  methods: {
    onSubmit () {
      if (accept.value !== true) {
        $q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      }
      else {
        $q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
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
