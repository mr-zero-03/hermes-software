<template>
  <q-card
    class="q-pa-sm q-py-md"
    flat
  >
    <q-card-section class="">
      <div class="text-h5 text-center">
        {{ ( createAction ) ? 'Crear Nuevo' : 'Editar' }} Usuario
        <q-icon v-if="false" name="person" size="30px" />
      </div>
    </q-card-section>

    <q-card-section>
      <div class="form-input q-pb-sm">
        <span>Nombre</span>
        <q-input standout outlined v-model="dataForm.name" dense />
      </div>

      <div class="form-input q-pb-sm">
        <span>Email</span>
        <q-input standout outlined v-model="dataForm.email" dense />
      </div>

      <div class="form-input q-pb-sm">
        <span>Password</span>
        <q-input standout outlined v-model="dataForm.password" dense />
      </div>

      <div class="form-input q-pb-sm">
        <span>Role del Usuario</span>
        <q-select label="Rol" v-model="dataForm.role" :options="roles" emit-value color="primary" />
      </div>
    </q-card-section>

    <q-card-actions class="flex justify-between">
      <q-btn :label="createAction ? 'Crear' : 'Actualizar'" color="primary" no-caps class="" @click="onSave" />
      <q-btn label="Cancelar" v-if="createAction" color="negative" no-caps class="" v-close-popup />
      <q-btn v-if="!createAction" label="Eliminar" icon="delete" color="negative" flat @click="showDeleteteModal()" />
    </q-card-actions>
  </q-card>

  <q-dialog v-model="deleteModal" persistent>
    <q-card flat bordered>
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <div class="text-overline">¡Piensalo bien!</div>
          <div class="text-caption text-grey">Recuerda que esta accion no se podra reversar</div>
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions align="right">
        <q-btn flat color="negative" label="Cancelar" v-close-popup />
        <q-btn flat color="primary" label="Aceptar" @click="onDelete" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>

export default {
  emits: [ 'save', 'delete' ],
  props: {
    createAction: {
      type: Boolean,
      default: true
    },
    userData: {
      type: Object
    }
  },
  data () {
    return {
      roles: [
        { label: 'Admin', value: 'admin' },
        { label: 'Comerciante', value: 'comerciante' }
      ],
      deleteModal: false,
      dataForm: this.userData
    }
  },
  methods: {
    onSave () {
      this.$emit( 'save' );
    },
    onDelete () {
      const id = this.userData.id;
      this.$emit( 'delete', id );
    },
    showDeleteteModal () {
      this.deleteModal = !this.deleteModal;
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
