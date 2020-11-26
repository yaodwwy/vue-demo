<template>
  <div>
    Nowplaying
    <ul>
      <li v-for="data in dataList" :key="data" @click="handlePageChange(data)">{{ data }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Nowplaying',
  data () {
    return {
      dataList: ['1111', '22222', '333333']
    }
  },
  methods: {
    handlePageChange (id) {
      this.$router.push(`/detail/${id}`)
    }
  }
}
</script>

<style scoped>

</style>
