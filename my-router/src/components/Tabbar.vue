<template>
<div>
  tabbar
  <ul>
    <router-link to="/center" tag="li" active-class="myactive">center</router-link>
    <router-link to="/cinema" tag="li" active-class="myactive">cinema</router-link>
    <router-link to="/film" tag="li" active-class="myactive">Film</router-link>
  </ul>
</div>
</template>

<script>
export default {
  name: 'tabbar'
}
</script>

<style>
.myactive {
  color: red;
}
</style>
