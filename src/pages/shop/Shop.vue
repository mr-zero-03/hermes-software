<template>
  <q-page class="q-px-md text-center">
    <h2 class="text-h3 q-py-lg">Tienda</h2>

    <ProductsContainer class="q-mx-auto products-container" />
  </q-page>
</template>

<script>
import ProductsContainer from 'components/products/shop/ProductsContainer.vue';

export default {
  components: {
    ProductsContainer
  }
}
</script>

<style lang="scss" scoped>
  .products-container {
    max-width: 1000px;
    padding-bottom: 160px;
  }
</style>
