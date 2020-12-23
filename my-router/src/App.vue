<template>
  <div id="app">
    <tabbar v-show="showMe"></tabbar>
    <router-view></router-view>
  </div>
</template>
<script>
import tabbar from '@/components/Tabbar'
import bus from '@/bus'
import {mapState} from "vuex";

export default {
  data() {
    return {
      //myShowState: true
    }
  },
  components: {tabbar},
  beforeMount() {
    bus.$on('showBar', (data) => {
      //this.myShowState = data;
    })
  },
  // computed: {
  //   isShow() {
  //     return this.$store.state.showMe;
  //   }
  // }

  // computed:mapState['isShow']

  computed: {
    ...mapState(['showMe']),
    others() {
      return "otherComputed";
    }
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
