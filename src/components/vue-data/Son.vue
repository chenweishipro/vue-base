<template>
  <div>
    <h3>Son子组件</h3>
    <p><button @click="getParent">获取父组件</button></p>
    <p>我正在访问父组件的数据： {{ this.$parent.msg }}</p>
    
  </div>
</template>

<script>
  export default {
    methods: {
      getParent() {
        console.log(this.$parent);
        this.$parent.run();
      },

      
      
    }
    
  }
</script>

<style lang="less" scoped>

</style>