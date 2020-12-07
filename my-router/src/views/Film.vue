<template>
  <div>
    <swiper>
      <li class="swiper-slide" v-for="n in 10" :key="n"> {{n}}</li>
    </swiper>
    <ul>
      <router-link to="/film/comingsoon" tag="li">comingsoon</router-link>
      <router-link to="/film/nowplaying" tag="li">nowplaying</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import swiper from "./film/Swiper";
export default {
  name: 'Film',
  components: {swiper}
}
</script>

<style scoped>

</style>
