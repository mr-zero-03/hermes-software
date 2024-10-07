<template>
  <nav class="navbar bg-body-tertiary" style="min-height: 120px;">
    <q-btn to="/" dense flat style="padding-left: 52px;">
      <img src="~assets/hermes-software-logo-slogan.svg" alt="Hermes Software" width="auto" height="84">
    </q-btn>

    <q-list class="row q-pa-md">
      <EssentialLink
        v-for="link in linksList"
        :key="link.title"
        v-bind="link"
      />
    </q-list>
  </nav>
</template>

<script>
import EssentialLink from 'components/header/EssentialLink.vue'

export default {
  components: {
    EssentialLink
  },
  props: {
    linksList: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
</style>
