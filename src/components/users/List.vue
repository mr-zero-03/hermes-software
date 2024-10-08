<template>
  <!-- Crear Button -->
  <div class="full-width text-right">
    <q-btn class="q-my-md" color="primary" label="Crear Usuario" @click="openCreateModal" />
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
            Editar Usuario
          </q-tooltip>
        </q-icon>
      </q-td>
    </template>
  </q-table>

  <q-dialog ref="formDialog" v-model="showForm">
    <q-card class="full-width q-pa-md" style="max-width: 500px">
      <UsersForm
        :userData="data"
        :createAction="createAction"
        @save="onSave"
        @delete="onDelete"
      />
    </q-card>
  </q-dialog>
</template>

<script>
import UsersForm from 'components/users/Form.vue'
import { v4 as uuidv4 } from 'uuid'
import { useUsersStore } from 'stores/users.js'

const usersStore = useUsersStore()

export default {
  components: {
    UsersForm
  },
  setup () {
    return {
      columns: [
        { name: 'name', label: 'Username', align: 'center', field: 'name' },
        { name: 'email', label: 'Email', align: 'center', field: 'email' },
        { name: 'role', label: 'Role', align: 'center', field: 'role' },
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
    }
  },
  mounted () {
    console.log( 'Getting data...' )
    this.refreshData()
  },
  methods: {
    refreshData () {
      this.tableData = usersStore.getData()
    },
    getDefaultData () {
      return( {
        id: uuidv4(),
        name: '',
        email: '',
        password: '',
        role: ''
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
    saveData () { usersStore.addData( this.data ) },
    updateData () { usersStore.updateData( this.data ) },
    deleteData ( id ) { usersStore.deleteData( id ) }
  }
}
</script>

<style lang="scss" scoped>
  .users-table {
    border: 1px solid $primary;
  }
</style>
