<template>
  <div>
    <h3>Hey, This is Son Component</h3>
    <p>{{msg}}</p>
    <!-- <button @click="msg+='加了点东西|'">改变msg</button> -->
     <button @click="changeMsg">改变msg</button>
  </div>
</template>

<script>
  export default {
    props:['msg',],
    methods: {
      changeMsg() {
        this.$emit('change', '我是大头儿子！');
      }
    },
  }
</script>

<style lang="less" scoped>

</style>