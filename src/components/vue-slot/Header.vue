<template>
  <div class="header">
    <!-- <h3>我是Header呀！</h3> -->
    <!-- 默认插槽 -->
     <!-- <slot></slot> -->

     <!-- 具名插槽 -->
    
      
      
     
      <slot  name="left"/>
      <slot></slot>
      <slot  name="right"/>
      
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="less" scoped>
  .header {
    height: 40px;
    line-height: 40px;
    background-color: #ccc;
  }
</style>