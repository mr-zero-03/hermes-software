<template>
  <q-page class="q-px-md content-center">
    <div class="text-center q-py-md">
      <q-btn color="primary" label="Regresar" icon="arrow_back" to="/" flat no-caps />
    </div>

    <div class="login-form q-mx-auto q-py-md">
      <LoginForm />
    </div>
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
