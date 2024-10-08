<template>
  <q-card class="member-card q-pa-md">
    <q-img style="max-width: 200px;" src="~assets/team-member.jpg" />

    <q-card-section>
      <div class="text-h6 q-pb-md">Daniel Santiago Perez</div>
      <div class="text-subtitle2 text-grey-7">Desarrollador backend y frontend</div>
    </q-card-section>

    <q-card-section class="q-pt-md flex justify-evenly">
      <q-btn
        v-for="( socialNetwork, index ) in member.socialNetworks"
        :disable="socialNetwork.url ? false : true"
        :href="socialNetwork.url"
        target="_blank"
        :key="index"
        color="primary"
        size="30px"
        dense
        flat
        round
      >
        <i :class="`bi bi-${socialNetwork.name}`"></i>
      </q-btn>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    member: {}
  }
}
</script>

<style lang="scss" scoped>
  .member-card {
    max-width: 300px;
    border: 1px solid $primary;
  }
</style>
