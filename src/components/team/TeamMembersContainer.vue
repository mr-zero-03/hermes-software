<template>
  <div class="flex justify-around">
    <TeamMemberCard
      class="q-ma-md"
      v-for="( member, index ) in teamMembers"
      :key="index"
      :member="member"
    />
  </div>
</template>

<script>
import TeamMemberCard from 'components/team/TeamMemberCard.vue'

export default {
  components: {
    TeamMemberCard
  },
  data () {
    return {
      teamMembers: [
        { name: 'Daniel Santiago Perez', description: 'Desarrollador backend y frontend', socialNetworks: [
          { name: 'facebook', url: '' },
          { name: 'instagram', url: '' },
          { name: 'linkedin', url: '' }
        ] },
        { name: 'Daniel Santiago Perez', description: 'Desarrollador backend y frontend', socialNetworks: [
          { name: 'facebook', url: '' },
          { name: 'instagram', url: '' },
          { name: 'linkedin', url: '' }
        ] },
        { name: 'Daniel Santiago Perez', description: 'Desarrollador backend y frontend', socialNetworks: [
          { name: 'facebook', url: '' },
          { name: 'instagram', url: '' },
          { name: 'linkedin', url: '' }
        ] }
      ]
    }
  }
}
</script>
