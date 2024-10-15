import Vue from 'vue/dist/vue'

import App from './App.vue'

import 'animate.css'

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

Vue.prototype.$title = '我是原型对象上的属性';
Vue.config.errorHandler = (err, vm, info) => {

  // handle error
  console.log(err)
}

// 全局指令
Vue.directive("focus", {
  inserted: function (el) {
    el.focus();
  }
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
