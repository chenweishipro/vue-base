<template>
  <div id="app">
    <Directive/>
    
  </div>
</template>

<script>
  //  引入局部组件
import comB from './components/cmp/comB'
import comC from './components/cmp/comC.vue'
import Dycom from './components/DyCom/Dycom.vue';
import DataParent from './components/vue-data/DataParent.vue';
import EmitFather from './components/vue-emit/EmitFather.vue';
import ErrorParent from './components/vue-errorCaptured/errorParent.vue';
import PropsFather from './components/vue-props/PropsFather.vue'
import List from './components/vue-slot/List.vue';
import News from './components/vue-slot/News.vue';
import Transition from './components/vue-transition/Transition.vue';

import second from './components/vue-transition/animationend.vue'
import Animationend from './components/vue-transition/animationend.vue';
import GrandFather from './components/vue-provide-inject/GrandFather.vue';
import Directive from './components/vue-directive/Directive.vue';
export default {
  name: 'App',
  components: {
    Animationend,
    GrandFather,
    Directive,

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
