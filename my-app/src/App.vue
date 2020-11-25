<template>
  <div>
    <input ref="myText">
    <navibar>
      <button @click="handleAdd()">增加</button>
    </navibar>
    <sidebar></sidebar>
    <ul>
      <li class="a" v-for="data in dataList" :key="data">{{ data }}</li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
import navibar from "@/components/Navibar";
import sidebar from "@/components/Sidebar";
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      dataList: []
    }
  },
  methods: {
    handleAdd() {
      this.dataList.push(this.$refs.myText.value)
    }
  },
  components: {
    navibar: navibar,
    sidebar: sidebar
  },
  mounted() {
    axios.get("/asgard/asgardapi/sns/common/feed/channel/list.json?uuid=3C8102302B3911EBA9934F676D9CDF7B0C0AD3B115DF419DB1C1EBC23E3CDF0E&channelId=4&feedChannelId=1067226&timestamp=1606313394337&offset=15").then(res => {
      console.log(res.data);
    })
  }
}
</script>
<style>
.a {
  background-color: lightgoldenrodyellow;
}
</style>