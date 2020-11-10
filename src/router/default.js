// 配置不需要验证登录的默认路由
import Layout from '@/components/template/default'
import Full from '@/components/template/full'
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
  {
    path: '/setting',
    name: 'Setting',
    meta: {
      title: '设置',
      icon: 'home',
    },
    redirect: '/setting/view',
    component: Full,
    children: [
      {
        path: '/setting/view',
        name: 'setting',
        meta: {
          title: '设置',
          icon: 'home',
        },
        component: () => import('@/view/setting'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
    },
    component: () => import('@/view/login'),
  },
]
export default routes
