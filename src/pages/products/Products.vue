<template>
  <q-page class="flex flex-center q-px-md q-py-lg">
    <div class="text-h3 full-width text-center">Lista de Productos</div>

    <div class="products-list full-width">
      <ProductsList />
    </div>
  </q-page>
</template>

<script>
import ProductsList from 'components/products/List.vue'

export default {
  components: {
    ProductsList
  }
}
</script>

<style lang="scss" scoped>
  .products-list {
    max-width: 1000px;
    padding-bottom: 90px;
  }
</style>
