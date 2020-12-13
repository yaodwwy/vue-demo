<template>

  <div class="cinema" :style="cinemaStyle">
    <ul>
      <li v-for="data in cinema">{{ data.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import BetterScroll from 'better-scroll'
export default {
  name: 'Cinema',
  data() {
    return {
      cinema: [],
      cinemaStyle: {height: "0px"}
    }
  },
  mounted() {
    this.cinemaStyle.height = document.documentElement.clientHeight - 50 + 'px'
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=320300&ticketFlag=1&k=3650949',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16072624521316527735308289"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then((res) => {
      this.cinema = res.data.data.cinemas
      this.$nextTick(()=>{
        new BetterScroll(".cinema",{
        scrollbar:true
        });
      })
    })
  }
}
</script>

<style scoped>
li {
  line-height: 40px;
}

.cinema {
  overflow: hidden;
  position: relative;
}
</style>
