<template>
  <q-card class="comment-card q-mx-auto" flat bordered>
    <q-card-section horizontal>
      <q-card-section class="col-5 flex flex-center q-px-sm q-py-md">
        <q-img class="rounded-borders" src="~assets/client.jpg" />
      </q-card-section>

      <q-card-section class="q-pt-xs flex content-between">
        <div class="text-h5 q-mt-sm q-mb-xs">{{comment.username}}</div>
        <div class="text-caption text-grey-7">{{comment.message}}</div>
        <div class="text-overline text-grey-5">{{comment.date}}</div>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    comment: {
    }
  }
}
</script>

<style lang="scss" scoped>
  .comment-card {
    width: 100%;
    max-width: 400px;
    border: 1px solid $primary;
  }
</style>
