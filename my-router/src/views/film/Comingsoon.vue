<template>
  <div>
    <ul>
      <li v-for="data in $store.getters.comingListGetter" :key="data.filmId">
        <img :src="data.poster"/>
        <h3>{{ data.name }}</h3>
        <p>观众评分：{{ data.grade }}</p>
        <p>主演：{{ data.actors | actorFilter }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Comingsoon',
  mounted() {
    if(this.$store.state.comingList.length === 0){
      //ajax
      this.$store.dispatch("getComingListAction");
    }else {
      console.log("缓存");
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
