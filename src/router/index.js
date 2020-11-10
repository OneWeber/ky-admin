import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/components/layouts/default'
Vue.use(VueRouter)

// 修改路由push方法,阻止重复点击报错
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch((err) => err)
}
const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '主页',
      icon: 'home',
    },
    redirect: '/home1',
    component: Layout,
    children: [
      {
        path: '/home1',
        name: 'Home1',
        meta: {
          title: '主页',
          icon: 'home',
        },
        component: () => import('@/view/home'),
      },
    ],
  },
]
export default routes
