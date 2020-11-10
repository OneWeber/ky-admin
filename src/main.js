import Vue from 'vue'
import App from './App.vue'

// 引入ui组件
import '@/plugin/ui/install'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
