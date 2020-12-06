<template>
  <div>
    Nowplaying
    <ul>
      <li v-for="data in dataList" :key="data.filmId" @click="handlePageChange(data)">{{ data.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Nowplaying',
  data () {
    return {
      dataList: ['1111', '22222', '333333']
    }
  },
  mounted () {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=5124553',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16072624521316527735308289"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then((res) => {
      this.dataList = res.data.data.films
    })
  },
  methods: {
    handlePageChange (id) {
      // this.$router.push(`/detail/${id}`);
      // 使用命名路由
      this.$router.push({ name: 'mydetail', params: { id: id } })
    }
  }
}
</script>

<style scoped>

</style>
