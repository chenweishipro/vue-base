<template>
  <div>
    <button @click="isShow=!isShow">点击切换！</button>
    <transition name="slide">
      <div v-show="isShow" class="box">点击切换！点击切换！点击切换！</div>
    </transition>

    <hr>

    <div class="box1 animated bounceOut">
      测试Animated.CSS!
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isShow: false,
      }
    }
  }
</script>

<style lang="less" scoped>

  @keyframes bounce-in {
    0% {
      transform: scale(2);
    }
    
    50% {
      transform: scale(1.5);
    }

    100% {
      transform: scale(1);
    }
  } 

  .slide-enter-active {
    animation: bounce-in 1s;
  }

  .slice-leave-active {
    animation: bounce-in 1s reverse;
  }

  .box1 {
    width: 200px;
    height: 200px;
    background-color: yellowgreen;
  }

</style>