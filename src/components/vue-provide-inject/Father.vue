<template>
  <div>
    <h2>父亲组件</h2>
    <p>Fahter从GrandFather里继承了{{ money }}</p>
    <hr>
    <Son :money="money"/>
  </div>
</template>

<script>
  import Son from './Son.vue'
  export default {
    props: ['money',],
    components: {
      Son, 
    }
  }
</script>

<style lang="less" scoped>

</style>