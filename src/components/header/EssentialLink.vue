<template>
  <q-item
    v-if="getVisibility()"
    active-class="active-option"
    class="option"
    :to="!showLogout() ? props.link : '#'"
  >
    <q-item-section
      v-if="props.icon"
      avatar
    >
      <q-icon :name="props.icon" />
    </q-item-section>

    <q-item-section>
      <q-btn
      v-if="!showLogout()"
      :label="props.title"
      no-caps
      :class="getClassBtn()"
      :flat="props.btn_type !== 'btn'"
      size="16px"
      dense
    />
      <q-btn
      v-if="showLogout()"
      @click="authStore.logout()"
      to="/login"
      label="Logout"
      no-caps
      class="option-btn-danger"
      size="16px"
      dense
    />
      <q-item-label caption>{{ props.caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
import { onMounted } from 'vue';
import { useAuthStore } from 'stores/auth'

const authStore = useAuthStore()

defineOptions({
  name: 'EssentialLink'
})

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  caption: {
    type: String,
    default: ''
  },
  link: {
    type: String,
    default: '#'
  },
  icon: {
    type: String,
    default: ''
  },
  btn_type: {
    type: String,
    default: ''
  },
  category: {
  }
})

function getClassBtn () {
  const classes = [
    'text-weight-regular',
    props.btn_type === 'btn' ? 'option-btn' : '',
    props.btn_type === 'btn-danger' ? 'option-btn-danger' : ''
  ]

  return( classes.join( ' ' ) )
}

function showLogout () {
  return (props.title.toLocaleLowerCase() === 'login') && authStore.isAuthenticated
}

function getVisibility () {
  const category = authStore.userRole || 'general'

  return( props.category.includes( category ) )
}

onMounted( () => {
  // console.log( getVisibility() )
  // console.log( 'login and loged', showLogout() )
} )
</script>

<style lang="scss" scoped>
  .option {
    color: $grey-6;
    min-width: max-content !important;
  }
  .active-option {
    color: $primary;
  }
  .option-btn {
    padding: 2px 10px;
    color: white;
    background-color: $primary;
  }
  .option-btn-danger {
    padding: 2px 10px;
    color: white;
    background-color: $negative;
  }
</style>
