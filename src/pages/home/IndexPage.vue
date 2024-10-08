<template>
  <q-page class="q-px-md">
    <div id="title" class="text-center">
      <h2 class="text-h3 text-weight-regular q-ma-none">Bienvenido a</h2>
      <h2 class="text-h3 text-weight-bold q-ma-none text-primary">Hermes Software</h2>

      <div class="description q-mx-auto">
        Facilitamos la gestión eficiente de usuarios en tu sistema. Con una interfaz simple e intuitiva, permite a tus usuarios registrarse, acceder, y gestionar su propia información de manera rápida y segura. Ya sea que necesites crear nuevos usuarios, editar perfiles o facilitar el acceso a tu plataforma, nuestro sistema es la solución ideal para ti. Simplifica la administración sin complicaciones.
      </div>

      <q-btn class="custom-btn" to="contact" label="Saber más" no-caps />
    </div>

    <div id="features" class="text-center">
      <h2 class="text-h4 text-weight-bold">Principales Características</h2>
      <div class="description q-mx-auto q-py-ms">Estos son algunos de nuestros servicios y beneficios que encontrarás</div>

      <div class="flex q-mx-auto q-pa-md" style="max-width: 1000px;justify-content: space-between;">
        <q-card v-for="(service, index) in services" :key="index" flat bordered class="my-card q-mx-auto">
          <q-card-section class="flex flex-left" style="align-items: center;">
            <q-icon :name="service.icon" size="35px" color="primary" />
            <div class="text-h6 text-subtitle1 q-pl-sm">{{service.title}}</div>
          </q-card-section>

          <q-card-section class="q-pt-none text-left text-grey-7">
            {{service.description}}
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div id="comments">
      <h2 class="text-h4 text-weight-bold text-center">Comentarios de Clientes</h2>

      <CommentsContainer class="comments-container q-px-md" :comments="comments" />

      <div class="text-center">
        <q-btn class="custom-btn" label="¡Empieza ahora!" to="/contact" no-caps />
      </div>
    </div>
  </q-page>
</template>

<script>
import CommentsContainer from 'components/comments/CommentsContainer.vue'

export default {
  components: {
    CommentsContainer
  },
  setup () {
    return {
      services: [
        { title: 'Registro de usuarios', description: 'Brinda a tus usuarios la posibilidad de registrarse fácilmente en tu sistema y gestionar su propio acceso.', icon: 'person' },
        { title: 'Gestión de perfiles', description: 'Actualiza y edita la información de usuario en cualquier momento, de forma rápida y sencilla.', icon: 'manage_accounts' },
        { title: 'Acceso seguro', description: 'Proporciona a los usuarios un inicio de sesión seguro para acceder a la plataforma y visualizar su información.', icon: 'admin_panel_settings' },
        { title: 'Gestión de productos', description: 'Añade, edita y organiza productos de manera eficiente en tu plataforma, mantén el inventario actualizado con unos pocos clics.', icon: 'category' }
      ],
      comments: [
        { username: 'Daniel', message: 'Hermes Software ha sido una buena solución a mi problema para gestionar usuarios y productos.', date: '2024/10/07', stars: 5 },
        { username: 'Julian', message: 'Hermes Software ha sido una buena solución a mi problema para gestionar usuarios y productos.', date: '2024/10/07', stars: 5 },
        { username: 'Santiago', message: 'Hermes Software ha sido una buena solución a mi problema para gestionar usuarios y productos.', date: '2024/10/07', stars: 5 },
        { username: 'David', message: 'Hermes Software ha sido una buena solución a mi problema para gestionar usuarios y productos.', date: '2024/10/07', stars: 5 }
      ]
    }
  },
  data () {
    return {
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
  // All sections
  #title, #features, #comments {
    padding-top: 70px;
    padding-bottom: 140px;
  }

  // Title
  #title h2 {
    line-height: 45px;
  }
  #title .description {
    max-width: 890px;
    padding: 55px 0px 35px 0px;
  }
  .custom-btn {
    margin-top: 35px;
    color: white;
    background-color: $primary;
  }

  // Features
  #features .description {
    max-width: 400px;
  }
  #features .my-card {
    width: 418px;
    border: 1px solid $primary;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  // Comments
  #comments .comments-container {
    max-width: 1340px;
    margin-top: 60px;
    margin-bottom: 100px;
  }
</style>
