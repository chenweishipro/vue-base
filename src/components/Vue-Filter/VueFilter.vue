<template>
  <div>
    <p>{{ num|add }}</p>
    <p>{{ new Date(2024,1,15)|formatDate('yyyy-MM-dd') }}</p>
    <hr>
    <h3>moment.js</h3>
    <p>{{ new Date(2024,7,7)|formatDate2 }}</p>
  </div>
</template>

<script>
  import moment from 'moment'
  export default {
    
    data () {
      return {
        num:1000,
      }
    },

    filters: {
      add(val) {
        if(!val) return '';

        return '￥' + val.toString();


      },
      formatDate(val, arg) {
        let str = '';
        if(!val) return '';
        if(arg=='yyyy-MM-dd'){
          str = val.getFullYear()+'-'+val.getMonth()+'-'+val.getDate();
        }

        return str;
      },

      formatDate2(val, arg='MMMM Do YYYY, h:mm:ss a') {
        if(!val) return '';

        return moment(val).locale('zh-cn').format(arg)

      },
    },

  }
</script>

<style lang="less" scoped>

</style>