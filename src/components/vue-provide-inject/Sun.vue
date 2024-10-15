<template>
  <div>
    <p>孙子从Son继承的{{ money }}</p>
    
    <p>{{ assets }}</p>
  </div>
</template>

<script>

  export default {
    props:['money'],
    inject: ['assets'],
  }
</script>

<style lang="less" scoped>

</style>