<template>
  <div>
    <h2>errorCaptured</h2>
    <Son />
  </div>
</template>

<script>
import Son from './Son.vue'
  export default {
    components: {
      Son,
    },
    // errorCaptured: (err, vm, info) => {
    //   console.log(err, vm, info)
    //   return false
    // },
  }
</script>

<style lang="less" scoped>

</style>