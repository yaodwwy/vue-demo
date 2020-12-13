<template>
  <div class="swiper-container myswiper">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import 'swiper/swiper.scss'
import Swiper from "swiper";

export default {
  props:["preview","id"],
  name: "Swiper",
  mounted() {
    new Swiper('.'+this.id, {
      slidesPerView: this.preview,
      spaceBetween: this.preview==3?10:20,
      freeMode: true
    })
  }
}
</script>

<style lang="scss" scoped>
.swiper-wrapper{
  img{
    width: 100%;
  }
}
</style>

