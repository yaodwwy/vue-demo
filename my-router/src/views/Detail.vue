<template>
  <div v-if="film">
    <img :src="film.poster" class="poster">
    <h3>{{ film.name }}</h3>
    <h3>演员</h3>
    <swiper preview="4" id="actors" class="actors">
      <div class="swiper-slide" v-for="data in film.actors" :key="data.name">
        <img :src="data.avatarAddress"/>
        <p>{{data.name}}</p>
      </div>
    </swiper>
    <h3>剧照</h3>
    <swiper preview="3" id="photos" class="photos">
      <div class="swiper-slide" v-for="(data,index) in film.photos" :key="index">
        <img :src="data"/>
      </div>
    </swiper>
  </div>
</template>

<script>
import axios from 'axios'
import swiper from "./detail/Swiper";
import bus from '@/bus'
export default {
  name: 'Detail',
  components: {swiper},
  data () {
    return {
      film: null
    }
  },
  beforeMount() {
    this.$store.commit('showMe',false);
    //bus.$emit('showBar',false)
  },
  mounted () {
    this.data = this.$route.params.id

    axios({
      url: `https://m.maizuo.com/gateway?filmId=${this.data}&k=772780`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16072624521316527735308289","bc":"440300"}',
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then((res) => {
      this.film = res.data.data.film
    })
  },
  beforeDestroy() {
    this.$store.commit('showMe',false);
    //bus.$emit('showBar',true)
  }
}
</script>

<style scoped>
.poster{
  width: 100%;
}
</style>
