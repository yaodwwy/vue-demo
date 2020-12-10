<template>
  <div class="swiper-container myswiper">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import 'swiper/swiper.scss'
import Swiper from "swiper";

export default {
  name: "Swiper",
  mounted() {
    new Swiper('.myswiper', {
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.myswiper{
  height: 240px;
  text-align: center;
}
</style>

