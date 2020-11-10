import Vue from 'vue'
import App from './App.vue'

// 引入路由
import router from '@/router/index'
// 引入路由守卫
import './premission'

// 引入ui组件
import '@/plugin/ui/install'

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
