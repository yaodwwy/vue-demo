<template>
  <div>
    hi
  </div>
  <navibar></navibar>
  <sidebar></sidebar>
</template>

<script>
import navibar from '.components/Navibar'
import sidebar from '.components/Sidebar'

export default {name: 'App',
  data(){
    return {
      dataList:[]
    }
  },
  methods:{
    handleAdd(){
      this.dataList.push('$refs.')
    }
  },
  components:{
    navibar:navibar,
    sidebar:sidebar
  }
}
</script>