<template>
  <div>
    <h2>动态组件</h2>
    <div class="tabs">
      <div class="tabItem" @click="changeTab('Home')">
        Home
      </div>
      <div class="tabItem" @click="changeTab('Person')">
        Personal
      </div>
    </div>
    <keep-alive>
      <component :is="comName"></component>
    </keep-alive>
  </div>
</template>

<script>
  import Home from './Home.vue';
  import Person from './Person.vue';
  export default {
    data () {
      return {
        comName: 'Person'
      }
    },
    // 组件注册
    components: {
      Home,
      Person,
    },
    methods: {
      changeTab(table) {
        this.comName = table
      }
    },
    
  }
</script>

<style lang="less" scoped>
  .tabs {
    display: flex;
   
  }
  .tabItem {
    flex:1;
    height: 40px;
    width: 40px;
    line-height: 40px;
    border: 1px solid #ccc;
  }
</style>