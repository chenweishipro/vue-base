<template>
  <div>
    <h2>爷爷组件</h2>
    <p>爷爷自己的钱： {{money}}💰</p>
    <button @click="change">传递的数据不是响应式的</button>
    <Father :money="money"/>
  </div>
</template>

<script>
  import Father from './Father.vue'
  export default {
    components: {
      Father,
    },
    data () {
      return {
        money: 1000000,

      }

    },
    // provide: {
    //   house:"四合院10000套",
    // },

    provide() {
      return {
        assets: '凯迪拉克100000000辆' + this.money,
      }
    },

    methods: {
      change() {
        this.money=0
      },
    },
  }
</script>

<style lang="less" scoped>

</style>