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
    <div>{{ endLine }}</div>
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
      dataList: [],
      loading: false,
      pageNum: 1,
      total: 0,
      endLine: ''
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
      this.total = res.data.data.total;
      console.log(this.dataList.length)
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
      if (this.total === this.dataList.length) {
        this.endLine = '--- 我是有底线的 ---'
        return;
      }
      this.endLine = '正在加载中...'
      this.pageNum++
      axios({
        url: `https://m.maizuo.com/gateway?cityId=440300&pageNum=${this.pageNum}&pageSize=10&type=1&k=5124553`,
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16072624521316527735308289"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then((res) => {
        this.dataList = [...this.dataList, ...res.data.data.films];
        console.log(this.dataList)
        Indicator.close();
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

div {
  padding-bottom: 40px;
}
</style>
