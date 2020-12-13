<template>
<nav>
  <ul>
    <router-link to="/center" tag="li" active-class="myactive">
      <i class="iconfont icon-3column"></i>
      center</router-link>
    <router-link to="/cinema" tag="li" active-class="myactive">
      <i class="iconfont icon-3column"></i>
      cinema</router-link>
    <router-link to="/film" tag="li" active-class="myactive">
      <i class="iconfont icon-3column"></i>
      Film</router-link>
  </ul>
</nav>
</template>

<script>
export default {
  name: 'tabbar'
}
</script>

<style lang="scss" scoped>
.myactive {
  color: #ffb45e;
}
nav{
  z-index: 999;
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 50px;
  background-color: azure;
  ul{
    display: flex;
    li{
      flex: 1;
      line-height: 50px;
      text-align: center;
    }
  }
}
</style>
