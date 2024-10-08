<template>
  <div class="full-width">
    <q-card
      tag="form"
      @submit="onSubmit"
      class="q-pa-sm q-py-md shadow-6 contact-form"
    >
      <q-card-section>
        <div class="form-input q-pb-sm">
          <span>Nombre</span>
          <q-input class="q-pt-sm" standout outlined v-model="dataForm.name" dense />
        </div>

        <div class="form-input q-pb-sm">
          <span>Email</span>
          <q-input class="q-pt-sm" standout outlined v-model="dataForm.email" dense />
        </div>

        <div class="form-input q-pb-sm">
          <span>Mensaje</span>
          <q-input type="textarea" class="q-py-sm" standout outlined v-model="dataForm.message" :input-style="{height: '80px'}" />
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn color="primary" no-caps class="full-width">Enviar</q-btn>
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
        email: '',
        message: '',
        date: null
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
