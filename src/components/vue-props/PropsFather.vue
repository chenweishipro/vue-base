<template>
  <div>
    <h2>父组件</h2>
    <hr>
    <Son1 msg="静态字符串" :msg1="msg1" :run="run1"/>
    <hr>
    <Son2 :num="num" :propC="propC" :propD="propD" :propF="propF"/>
  </div>
</template>

<script>
import Son1 from './Son1.vue'
import Son2 from './Son2.vue'



  export default {
    components: {
      Son1,
      Son2,

    },
    data () {
      return {
        msg1: '我是来自父组件的动态数据',
        num: 16,
        propC:'propC',
        propD: 10086,
        propF: 1,
      }
    },
    methods: {
      run1(who){
        alert(who);
      }
    }
  }
</script>

<style lang="less" scoped>

</style>