<template>
<div>
  <ul>
    <router-link to="/film/comingsoon" tag="li" active-class="active">即将上映</router-link>
    <router-link to="/film/nowplaying" tag="li" active-class="active">正在热映</router-link>
  </ul>
</div>
</template>

<script>
export default {
  name: "FilmHeader"
}
</script>

<style lang="scss" scoped>
ul{
  display: flex;
  li{
    flex: 1;
    line-height: 40px;
    height: 40px ;
    text-align: center;
    background-color: white;
  }
}
.active{
  color: red;
  border-bottom: red 2px solid;
}
</style>
