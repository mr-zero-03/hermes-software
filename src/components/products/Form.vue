<template>
  <q-card
    class="q-pa-sm q-py-md"
    flat
  >
    <q-card-section class="">
      <div class="text-h5 text-center">
        {{ ( createAction ) ? 'Crear Nuevo' : 'Editar' }} Producto
        <q-icon v-if="false" name="person" size="30px" />
      </div>
    </q-card-section>

    <q-card-section class="row">
      <div class="form-input q-pb-md q-px-sm col-12">
        <span>Nombre</span>
        <q-input standout outlined v-model="dataForm.name" dense />
      </div>

      <div class="form-input q-pb-md q-px-sm col-6">
        <span>Precio</span>
        <q-input type="number" standout outlined v-model="dataForm.price" dense />
      </div>

      <div class="form-input q-pb-md q-px-sm col-6">
        <span>Inventario</span>
        <q-input label="Cantidad de productos" type="number" standout outlined v-model="dataForm.inventory" dense />
      </div>

      <div class="form-input q-pb-md q-px-sm col-12">
        <span>Descripcion</span>
        <q-input type="textarea" standout outlined v-model="dataForm.description" dense :input-style="{height: '80px'}" />
      </div>

      <div class="form-input q-pb-md q-px-sm col-12">
        <span>Categorias de Producto</span>

        <div class="q-gutter-sm">
          <q-checkbox
            v-for="( category, index ) in categories"
            :key="index"
            v-model="dataForm.categories"
            :val="category.value"
            :label="category.label"
          />
        </div>
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
      categories: [
        { label: 'Deportes', value: 'deportes' },
        { label: 'Calzado', value: 'calzado' },
        { label: 'Masculino', value: 'masculino' },
        { label: 'Femenino', value: 'femenino' },
        { label: 'Ropa', value: 'ropa' },
        { label: 'Comida', value: 'comida' },
        { label: 'Cosmeticos', value: 'cosmeticos' },
        { label: 'Electrodomesticos', value: 'electrodomesticos' },
        { label: 'Tecnologia', value: 'tecnologia' },
        { label: 'Vehiculos', value: 'vehiculos' },
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
