<template>
  <div>
    Detail
    {{ myid }}
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
      myid: ''
    }
  },
  mounted () {
    this.myid = this.$route.params.id
  }
}
</script>

<style scoped>

</style>
