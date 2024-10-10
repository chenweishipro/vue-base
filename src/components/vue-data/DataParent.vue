<template>
  <div>
    <h2>访问根实例</h2>
    <p>根实例的数据：{{ $root.user }}|{{ $root.age }}</p>
    <p><button @click="getRoot">获取根实例</button></p>
    <Son ref="mySon"/>

    <hr>
    <p>
      <button @dblclick="getChildren">获取子组件</button>
    </p>
    <hr>
    <h2>访问子组件实例或子元素</h2>
    <div ref="myDiv">
      DOM元素div

    </div>
    <button @click="getByRef">获取子组件和DOM元素</button>

    <hr>
    <h2>访问原型上的属性或方法</h2>
    <button @click="getPrototype">访问原型上的属性或方法</button>
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
        console.log(this.$children[0].info);
      },
      getByRef() {
        console.log(this.$refs)
        this.$refs.myDiv.style.color='pink';
        console.log(this.$refs.mySon.info);
      
        
      },

      getPrototype() {
        console.log(this.$title);

      },
    },
    
   
   }
</script>

<style lang="less" scoped>

</style>