<template>
  <div>
    Personal 组件
  </div>
</template>

<script>
  export default {
    mounted() {
      console.log('====================================');
      console.log('Personal mounted');
      console.log('====================================');
    },
    beforeDestroy() {
      console.log('====================================');
      console.log("Personal Destroy");
      console.log('====================================');
    }
  }
</script>

<style lang="less" scoped>

</style>