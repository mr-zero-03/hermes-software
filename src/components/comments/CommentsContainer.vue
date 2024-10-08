<template>
  <div id="comments-swiper" class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="( comment, index ) in comments" :key="index">
        <CardComment :comment="comment" />
      </div>
    </div>

    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import CardComment from 'components/comments/CardComment.vue'

export default {
  components: {
    CardComment
  },
  props: {
    comments: {
      type: Array
    }
  },
  data () {
    return {
      comments_siwper: null
    }
  },
  mounted () {
    this.comments_siwper = new Swiper( '#comments-swiper', {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: '#comments-swiper .swiper-button-next',
        prevEl: '#comments-swiper .swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        880: {
          slidesPerView: 2
        },
        1100: {
          slidesPerView: 3
        }
      },
      autoplay: {
        delay: 5000,
      }
    } )
  }
}
</script>


