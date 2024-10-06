<template>
  <div>
    <h3>Son2</h3>
    {{num}}
    <hr>
    {{ propC }}
    <hr>
    propD: {{ propD }}
    <hr>
    propF: {{ propF }}
  </div>
</template>

<script>
  export default {
    props:{
      num: [String, Number],
      propC: {
        required:true,
        
      },
      propD: {
        type: Number,
        default: 100,
      },
      propF: {
        validator: val=>val >10
        
      }
    }
  }
</script>

<style lang="less" scoped>

</style>