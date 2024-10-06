<template>
  <div>
    <h2>自定义事件</h2>
    这是在父组件里展示自己的msg:{{ msg }}
    <Son  :msg="msg" @change="fatherChange"/>
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
        msg:'This is msg!',
      }
    },
    methods: {
      fatherChange(val) {
        this.msg +=val
      } 
    },
  }
</script>

<style lang="less" scoped>

</style>