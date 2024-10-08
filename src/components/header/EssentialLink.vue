<template>
  <q-item
    active-class="active-option"
    class="option"
    :to="props.link"
  >
    <q-item-section
      v-if="props.icon"
      avatar
    >
      <q-icon :name="props.icon" />
    </q-item-section>

    <q-item-section>
      <q-btn
      :label="props.title"
      no-caps
      :class="getClassBtn()"
      :flat="props.btn_type !== 'btn'"
      size="16px"
      dense
    />
      <q-item-label caption>{{ props.caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
function getClassBtn () {
  const classes = [
    'text-weight-regular',
    props.btn_type === 'btn' ? 'option-btn' : ''
  ]

  return( classes.join( ' ' ) )
}

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
  }
})
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
</style>
