<template>
  <div id="app">
   <!-- 使用全局组件 -->
    <!-- <component-a></component-a>
    <comB></comB>
    <comC /> -->
    <EmitFather />
  </div>
</template>

<script>
  //  引入局部组件
  import comB from './components/cmp/comB'
  import comC from './components/cmp/comC.vue'
import EmitFather from './components/vue-emit/EmitFather.vue';
  import PropsFather from './components/vue-props/PropsFather.vue'
export default {
  name: 'App',
  components: {
    EmitFather,

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
