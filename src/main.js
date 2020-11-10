import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// 引入路由
import routes from '@/router/index'
const router = new VueRouter({
  mode: 'history',
  routes: routes,
})

// 引入ui组件
import '@/plugin/ui/install'

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
