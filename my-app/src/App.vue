<template>
  <div>
    <input ref="myText">
    <navibar>
      <button @click="handleAdd()">增加</button>
    </navibar>
    <sidebar></sidebar>
    <ul>
      <li class="a" v-for="data in dataList" :key="data">{{data}}</li>
    </ul>
  </div>
</template>

<script>
import navibar from "@/components/Navibar";
import sidebar from "@/components/Sidebar";

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
  }
}
</script>
<style>
.a{
  background-color: lightgoldenrodyellow;
}
</style>