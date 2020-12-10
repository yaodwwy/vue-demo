<template>
  <div>
    <swiper :key="looplist.length" ref="myswiper">
      <li class="swiper-slide" v-for="img in looplist" :key="img.filmId">
        <img :src="img.poster"/>
      </li>
    </swiper>
    <filmHeader :class="isFixed?'fixed':''"></filmHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import swiper from "./film/Swiper";
import filmHeader from "./film/FilmHeader";

import axios from 'axios'

export default {
  name: 'Film',
  components: {swiper, filmHeader},
  data() {
    return {
      looplist: [],
      isFixed: false
    }
  },
  mounted() {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=5124553',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16072624521316527735308289"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then((res) => {
      this.looplist = res.data.data.films
    })
    window.onscroll = this.handleScroll;
  },
  beforeDestroy() {
    window.onscroll = null;
  },
  methods: {
    handleScroll() {
      this.isFixed = document.documentElement.scrollTop >
        this.$refs.myswiper.$el.offsetHeight;
    }
  }
}
</script>

<style lang="scss" scoped>
.fixed {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 40px;
  background-color: white;
}
</style>
