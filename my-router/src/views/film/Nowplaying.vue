<template>
  <div>
    <ul v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
      <li v-for="data in dataList" :key="data.filmId" @click="handlePageChange(data.filmId)">
        <img :src="data.poster"/>
        <h3>{{ data.name }}</h3>
        <p>观众评分：{{ data.grade }}</p>
        <p>主演：{{ data.actors | actorFilter }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import {Indicator} from 'mint-ui';
Vue.use(Indicator)

Vue.filter('actorFilter', function (data) {
  if (data)
    return data.map(item => item.name).join(' ')
})

export default {
  name: 'Nowplaying',
  data() {
    return {
      dataList: ['1111', '22222', '333333'],
      loading: false
    }
  },
  mounted() {

    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    });

    axios({
      url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=5124553',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16072624521316527735308289"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then((res) => {
      this.dataList = res.data.data.films;
      Indicator.close();
    })
  },
  methods: {
    handlePageChange(id) {
      // this.$router.push(`/detail/${id}`);
      // 使用命名路由
      this.$router.push({name: 'mydetail', params: {id: id}})
    },
    loadMore() {
      console.log('loadMore')
      setTimeout(2000, function () {
        this.loading = true;
      })
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  li {
    overflow: hidden;
    padding: 5px;

    img {
      width: 80px;
      float: left;
    }

    h3 {
      padding: 1px;
    }
  }
}
</style>
