<template>
  <div>
    film page
    <ul>
      <router-link to="/film/comingsoon" tag="li">comingsoon</router-link>
      <router-link to="/film/nowplaying" tag="li">nowplaying</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Film'
}
</script>

<style scoped>

</style>
