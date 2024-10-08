<template>
  <q-page class="flex flex-center q-px-md">
    <div class="full-width text-center">
      <q-btn color="primary" label="Regresar" icon="arrow_back" to="/" flat no-caps />
    </div>

    <LoginForm class="login-form" />
  </q-page>
</template>

<script>
import LoginForm from 'components/login/LoginForm.vue'

export default {
  components: {
    LoginForm
  }
}
</script>

<style lang="scss" scoped>
  .login-form {
    max-width: 335px;
  }
</style>
