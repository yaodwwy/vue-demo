<template>
  <div>
    <h3>{{ data.name }}</h3>
    <img :src="data.poster" width="100%">
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Detail',
  data () {
    return {
      data: ''
    }
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
      this.data = res.data.data.film
    })
  }
}
</script>

<style scoped>

</style>
