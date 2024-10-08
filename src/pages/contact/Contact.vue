<template>
  <q-page class="flex flex-center q-px-lg">
    <h2 class="text-h3 full-width text-center q-py-lg">Ponte en contacto con nosotros</h2>

    <ContactForm style="max-width: 570px; padding-bottom: 120px;" />
  </q-page>
</template>

<script>
import ContactForm from 'components/contact/Form.vue'

export default {
  components: {
    ContactForm
  }
}
</script>
