<template>
  <div>
    <h3>Son1子组件</h3>

    {{msg}}
    <hr>
    {{msg1}}

    <button @click="run('我是大头儿子')">调用父组件的run方法</button>
  </div>
</template>

<script>
  export default {
    props:['msg','msg1','run']
  }
</script>

<style lang="less" scoped>

</style>