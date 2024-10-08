<template>
  <div class="flex justify-around">
    <ProductCard
      class="q-ma-md"
      v-for="( product, index ) in products"
      :key="index"
      :product="product"
    />
  </div>
</template>

<script>
import ProductCard from 'components/products/shop/ProductCard.vue'
import { useProductsStore } from 'src/stores/products';

const productsStore = useProductsStore()

export default {
  components: {
    ProductCard
  },
  data () {
    return {
      products: []
    }
  },
  mounted () {
    this.getProducts()
  },
  methods: {
    getProducts () { this.products = productsStore.getData() }
  }
}
</script>
