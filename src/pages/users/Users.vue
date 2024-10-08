<template>
  <q-page class="flex flex-center q-px-md">
    <div class="text-h3 full-width text-center">Lista de Usuarios</div>

    <div class="users-list full-width">
      <UsersList />
    </div>
  </q-page>
</template>

<script>
import UsersList from 'components/users/List.vue'

export default {
  components: {
    UsersList
  }
}
</script>

<style lang="scss" scoped>
  .users-list {
    max-width: 1000px;
    padding-bottom: 90px;
  }
</style>
