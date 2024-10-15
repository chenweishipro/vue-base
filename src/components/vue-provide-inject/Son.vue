<template>
  <div>
    <h3>这是孙子了</h3>
    <p>Son从Father继承的{{ money }}</p>
    <Sun :money ='money'/>
  </div>
</template>

<script>
  import Sun from './Sun.vue'
  export default {
    props:['money'],
    components: {
      Sun,
    },
  }
</script>

<style lang="less" scoped>

</style>