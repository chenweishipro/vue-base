import Vue from 'vue/dist/vue'

import App from './App.vue'

Vue.config.productionTip = false

// 注册全局组件
Vue.component('component-a', {
  template: `<div><h2>compA组件{{msg}}</h2></div>`,
  data() {
    return {
      msg: 123
    }
  },
  computed: {

  },
  methods: {

  },
})


new Vue({
  data: {
    user: 'admin',
    age: 17,
  },
  methods: {
    test() {
      console.log('测试全局方法！');
    }
  },
  render: h => h(App),
}).$mount('#app')
