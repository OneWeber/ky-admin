import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './default'
Vue.use(VueRouter)

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
