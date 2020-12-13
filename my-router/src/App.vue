<template>
  <div id="app">
    <tabbar v-show="isShow"></tabbar>
    <router-view></router-view>
  </div>
</template>
<script>
import tabbar from '@/components/Tabbar'
import bus from '@/bus'

export default {
  data() {
    return {
      isShow: true
    }
  },
  components: {tabbar},
  beforeMount() {
    bus.$on('showBar', (data) => {
      this.isShow = data;
    })
  }
}
</script>

<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
}

html {
  height: 100%;
}

li {
  list-style: none;
}
</style>
