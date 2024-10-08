<template>
  <q-page class="q-px-md text-center">
    <h2 class="text-h3 q-py-lg">Conoce nuestro equipo</h2>

    <TeamMembersContainer class="q-mx-auto team-members-container" />
  </q-page>
</template>

<script>
import TeamMembersContainer from 'components/team/TeamMembersContainer.vue';

export default {
  components: {
    TeamMembersContainer
  }
}
</script>

<style lang="scss" scoped>
  .team-members-container {
    max-width: 1000px;
    padding-bottom: 160px;
  }
</style>
