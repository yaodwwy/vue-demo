<template>
  <div id="app">
    App:
    <tabbar></tabbar>
    <router-view></router-view>
  </div>
</template>
<script>
import tabbar from '@/components/Tabbar'

export default {
  components: { tabbar }
}
</script>
