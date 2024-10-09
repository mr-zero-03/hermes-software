<template>
  <div id="footer" class="shadow-up-4 flex justify-evenly wrap q-pa-md">
    <div class="text-center">
      <img src="~assets/hermes-software-logo-slogan.svg" width="265" height="auto" alt="">
    </div>

    <div class="footer-section">
      <q-list class="no-border">
        <q-item-label header class="text-h6 text-black text-weight-medium">Redes</q-item-label>

        <q-item 
          v-for="( socialNetwork, index ) in socialNetworks"
          :key="index"
          clickable
          target="_blank"
        >
          <q-item-section avatar>
            <q-avatar color="primary" text-color="white" size="40px" >
              <i :class="`bi bi-${socialNetwork.name}`"></i>
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-weight-medium">{{socialNetwork.name}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>

    <div class="footer-section">
      <q-list class="no-border">
        <q-item-label header class="text-h6 text-black text-weight-medium">Contacto</q-item-label>

        <q-item 
          v-for="( item, index ) in contact"
          :key="index"
          clickable
          target="_blank"
        >
          <q-item-section avatar>
            <q-avatar color="primary" text-color="white" :icon="item.icon" size="40px" >
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-weight-medium">{{item.name}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      socialNetworks: [
        { name: 'facebook', url: '' },
        { name: 'instagram', url: '' },
        { name: 'linkedin', url: '' }
      ],
      contact: [
        { name: 'hermes.software@gmail.com', icon: 'mail', link: '' },
        { name: '+57 123 456 78 91', icon: 'call', link: '' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  #footer {
    min-height: 260px;
  }
  .footer-section {
    min-width: 280px;
  }
</style>
