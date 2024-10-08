<template>
  <!-- Crear Button -->
  <div class="full-width text-right">
    <q-btn class="q-my-md" color="primary" label="Crear Producto" @click="openCreateModal" />
  </div>

  <q-table
    :rows="tableData"
    :columns="columns"
    row-key="name"
    class="full-width users-table shadow-6"
    table-header-class="bg-primary text-white text-weight-bold"
  >
    <!-- Custom column for clickable PC icon with tooltip -->
    <template v-slot:body-cell-pc-icon="props">
      <q-td :props="props">
        <q-icon
          size="20px"
          name="edit"
          class="cursor-pointer text-primary"
          @click="onEdit(props.row)"
        >
          <!-- Tooltip for the PC icon -->
          <q-tooltip class="bg-primary text-white">
            Editar Producto
          </q-tooltip>
        </q-icon>
      </q-td>
    </template>

    <!-- Description -->
    <template v-slot:body-cell-description="props">
      <q-td :props="props">
        <div class="ellipsis" style="max-width: 140px">
          <span>
              {{props.row.description}}
            <q-tooltip anchor="top left" self="bottom left">{{props.row.description}}</q-tooltip>
          </span>
        </div>
      </q-td>
    </template>

    <!-- Categories -->
    <template v-slot:body-cell-categories="props">
      <q-td :props="props">
        <div class="flex wrap justify-evenly" style="max-width: 200px">
          <q-badge class="q-mb-sm" v-for="( category, index ) in props.row.categories" :key="index" >{{category}}</q-badge>
        </div>
      </q-td>
    </template>
  </q-table>

  <q-dialog ref="formDialog" v-model="showForm">
    <q-card class="full-width q-pa-md" style="max-width: 500px">
      <ProductsForm
        :userData="data"
        :createAction="createAction"
        @save="onSave"
        @delete="onDelete"
      />
    </q-card>
  </q-dialog>
</template>

<script>
import ProductsForm from 'components/products/Form.vue'
import { v4 as uuidv4 } from 'uuid'
import { useProductsStore } from 'stores/products.js'

const productsStore = useProductsStore()

export default {
  components: {
    ProductsForm
  },
  setup () {
    return {
      columns: [
        { name: 'name', label: 'Nombre', align: 'center', field: 'name' },
        { name: 'description', label: 'Descripcion', align: 'center', field: 'description' },
        { name: 'price', label: 'Precio', align: 'center', field: 'price' },
        { name: 'inventory', label: 'Inventario', align: 'center', field: 'inventory' },
        { name: 'categories', label: 'Categoria', align: 'center', field: 'categories' },
        { name: 'pc-icon', label: 'Editar', align: 'center', field: 'pc-icon' }
      ],
    }
  },
  data () {
    return {
      data: this.getDefaultData(),
      showForm: false,
      createAction: true,
      confirm: false,
      tableData: []
      // tableData: [
      // { name: 'Tenis', description: 'Este es un producto fabuloso y fantastico, ¡Compralo!', price: 1200, inventory: 12, categories: [ 'deportes', 'calzado', 'maculino' ] },
      // { name: 'Chaqueta', description: 'Este es un producto fabuloso y fantastico, ¡Compralo!', price: 1200, inventory: 12, categories: [ 'ropa', 'femenino' ] },
      // { name: 'Tenis', description: 'Este es un producto fabuloso y fantastico, ¡Compralo!', price: 1200, inventory: 12, categories: [ 'deportes', 'calzado', 'maculino' ] },
      // { name: 'Tenis', description: 'Este es un producto fabuloso y fantastico, ¡Compralo!', price: 1200, inventory: 12, categories: [ 'deportes', 'calzado', 'maculino' ] },
      // { name: 'Tenis', description: 'Este es un producto fabuloso y fantastico, ¡Compralo!', price: 1200, inventory: 12, categories: [ 'deportes', 'calzado', 'maculino' ] },
      // ]
    }
  },
  mounted () {
    console.log( 'Getting data...' )
    this.refreshData()
  },
  methods: {
    refreshData () {
      this.tableData = productsStore.getData()
    },
    getDefaultData () {
      return( {
        id: uuidv4(),
        name: '',
        description: '',
        price: 0,
        inventory: 0,
        categories: []
      } );
    },
    cleanFields () {
      this.data = this.getDefaultData()
    },
    openCreateModal () {
      this.cleanFields();
      this.showForm = true
      this.createAction = true;
    },
    onEdit ( data ) {
      this.showForm = true
      this.createAction = false;
      this.data = { ...data }
    },
    onSave () {
      // Create or update
      if ( this.createAction ) {
        this.saveData()
      } else {
        this.updateData()
      }

      // Close form dialog
      this.refreshData()
      this.$refs.formDialog.hide();
    },
    onDelete ( id ) {
      this.deleteData( id )

      if ( false ) {
        Notify.create( {
          type: 'positive',
          message: 'Usuario eliminado correctamente',
          position: 'top-right',
          timeout: 5000,
          progress: true
        } );

        // Refresh table data
        this.refreshData();
      }

      // Refresh table data
      this.refreshData();

      // Close form dialog
      this.$refs.formDialog.hide();
    },
    saveData () { productsStore.addData( this.data ) },
    updateData () { productsStore.updateData( this.data ) },
    deleteData ( id ) { productsStore.deleteData( id ) }
  }
}
</script>

<style lang="scss" scoped>
  .users-table {
    border: 1px solid $primary;
  }
</style>
