<template>
  <div>
    <button @click="changeShow">显示隐藏切换</button>
    <transition name="slide">
      <div v-show='isShow' class="box"></div>
    </transition>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isShow:true,
      }
    },
    methods: {
      changeShow() {
        this.isShow = ! this.isShow
      }
    }
  }
</script>

<style lang="less" scoped>
  .box {
    width: 500px;
    height: 300px;
    background-color: yellow;
   
    
  }
  .slide-enter {
    width: 0;
    opacity: 0;
    height: 0;
    background-color: green;

  }
  .slide-enter-to {
    width: 500px;
    opacity: 1;
    background-color: pink;
   
   
  }
  .slide-enter-active {
    transition: all 2s;
  }

</style>