<template>
  <div>
    <ul>
      <li v-for="data in $store.getters.comingListGetter" :key="data.filmId"
          @click="handleClick(data.isPresale,data.filmId)">
        <img :src="data.poster"/>
        <h3>{{ data.name }}</h3>
        <p>观众评分：{{ data.grade }}</p>
        <p>主演：{{ data.actors | actorFilter }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import {MessageBox} from 'mint-ui';

export default {
  name: 'Comingsoon',
  mounted() {
    if (this.$store.state.comingList.length === 0) {
      //ajax
      this.$store.dispatch("getComingListAction");
    } else {
      console.log("缓存");
    }
  }, methods: {
    handleClick(data, id) {
      if (!data) {
        MessageBox({
          title: '提示',
          message: '没有排片，回到首页?',
          showCancelButton: true
        }).then(action=>{
          if(action === 'confirm'){
            this.$router.push('/film/comingsoon')
          }
        });
      }
      this.$router.push({name: 'mydetail', params: {id: id}})
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
