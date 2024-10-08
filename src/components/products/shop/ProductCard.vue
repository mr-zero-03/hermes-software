<template>
  <q-card class="product-card q-pa-sm" flat bordered>
    <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />

    <q-card-section>
      <div class="row no-wrap items-center">
        <div class="col text-h6">
          {{product.name}}
        </div>
      </div>
    </q-card-section>

    <q-card-section class="q-pt-none text-left">
      <div class="text-subtitle1">
        $・{{product.price}}
      </div>
      <div class="text-caption text-grey-8">
        {{product.description}}
      </div>
    </q-card-section>

    <q-separator />

    <q-card-section class="q-pa-sm">
      <div class="text-subtitle2 text-left">Categorías</div>
      <div class="flex justify-evenly">
        <q-badge class="q-ma-sm" v-for="( category, index ) in product.categories" :key="index" >{{category}}</q-badge>
      </div>
    </q-card-section>

    <q-separator />

    <q-card-section class="q-pa-sm">
      <div class="text-overline text-orange-9">Unidades Disponibles</div>
      <q-badge class="text-subtitle1" outline color="secondary" :label="product.inventory" />
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    product: {}
  }
}
</script>

<style lang="scss" scoped>
  .product-card {
    min-width: 250px;
    max-width: 300px;
    border: 1px solid $primary;
  }
</style>
