<template>
  <div id="app">
   <!-- 使用全局组件 -->
    <!-- <component-a></component-a>
    <comB></comB>
    <comC /> -->
    <!-- <EmitFather /> -->
    <DataParent />
    <hr>
    <h1>匿名插槽</h1>
    <List />
    <hr>
    <News />
  </div>
</template>

<script>
  //  引入局部组件
  import comB from './components/cmp/comB'
  import comC from './components/cmp/comC.vue'
  import DataParent from './components/vue-data/DataParent.vue';
  import EmitFather from './components/vue-emit/EmitFather.vue';
  import PropsFather from './components/vue-props/PropsFather.vue'
  import List from './components/vue-slot/List.vue';
  import News from './components/vue-slot/News.vue';
export default {
  name: 'App',
  components: {
    EmitFather,
    DataParent,
    List,
    News,

  },
  data () {
    return {
      
    }
  },
  methods: {

  },

  computed: {

  },




}
</script>

<style lang="less">
#app {
  // 写样式的地方

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}



</style>
