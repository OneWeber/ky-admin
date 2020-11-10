import Vue from 'vue'
import VueRouter from 'vue-router'
import defaultRoute from './default'
Vue.use(VueRouter)
let routes = [...defaultRoute]
// 修改路由push方法,阻止重复点击报错
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch((err) => err)
}

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
