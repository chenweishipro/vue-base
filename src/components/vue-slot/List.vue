<template>
  <div>
    <h2>List组件</h2>
    
    <Header class="MyHeader">
     <template v-slot:left>
        <span>列表左侧</span>
     </template>
      <span>列表标题</span>
     <template v-slot:right>
      <span>列表右侧</span>
     </template>
    </Header>
    
  </div>
</template>

<script>
  import Header from './Header.vue';

  export default {
    components: {
      Header,

    }
    
    
  }
</script>

<style lang="less" scoped>
  .MyHeader {
    display: flex;
    span {
      flex:1;
    } 
  }
</style>