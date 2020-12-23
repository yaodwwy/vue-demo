<template>
  <div>
    <mt-index-list>
      <mt-index-section :index="data.index" :key="data.index" v-for="data in dataList">
        <div @click="handleClick(city.cityId)" v-for="city in data.list" :key="city.cityId">
          <mt-cell :title="city.name"></mt-cell>
        </div>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "City",
  data() {
    return {
      dataList: []
    }
  }
  ,
  mounted() {
    axios({
      url: 'https://m.maizuo.com/gateway?k=8664797',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16072624521316527735308289"}',
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then(res => {
      this.dataList = this.handleCity(res.data.data.cities);
    })
  }, methods: {
    handleClick(cityId) {
      localStorage.setItem('cityId', cityId);
      this.$router.push('/cinema')
    },
    handleCity(data) {
      let letterArr = [];
      let newList = [];
      for (let i = 65; i < 91; i++) {
        letterArr.push(String.fromCharCode(i))
      }
      for (let i = 0; i < letterArr.length; i++) {
        let arr = data.filter(item =>
          item.pinyin.substring(0, 1) === letterArr[i].toLowerCase()
        )
        if (arr.length > 0) {
          newList.push({
            index: letterArr[i],
            list: arr
          })
        }
      }
      return newList;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
