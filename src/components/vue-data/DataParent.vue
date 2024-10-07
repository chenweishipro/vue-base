<template>
  <div>
    <h2>访问根实例</h2>
    <p>根实例的数据：{{ $root.user }}|{{ $root.age }}</p>
    <p><button @click="getRoot">获取根实例</button></p>
    <Son />

    <hr>
    <p>
      <button @dblclick="getChildren">获取子组件</button>
    </p>
  </div>
</template>

<script>
  import Son from './Son.vue'
  export default {
    components: {
      Son,  
    },
    data () {
      return {
        msg: '小头爸爸',

      }
    },
    methods: {
      getRoot() {
        this.$root.test();
      },

      run() {
        console.log("我是父组件方法log...");
      },

      getChildren() {
        console.log(this.$children);
      },
    },
    
   
   }
</script>

<style lang="less" scoped>

</style>