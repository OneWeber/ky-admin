import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import router from '@/router/index'
import Util from '@/utils'

const whiteList = ['login'] // no redirect whitelist
const loginRoutePath = '/login'
const defaultRoutePath = '/'

/**
 * @name 路由守卫
 */

router.beforeEach((to, from, next) => {
  NProgress.start()
  const token = localStorage.getItem('token')
  if (token) {
    if (to.path === loginRoutePath) {
      next({
        path: defaultRoutePath,
      })
      NProgress.done()
    }
  } else {
    // not login
    if (whiteList.includes(to.name)) {
      // 在免登录名单，直接进入
      next()
    } else {
      next({
        path: loginRoutePath,
        query: {
          redirect: to.fullPath,
        },
      })
      NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
    }
  }
  next()
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})

router.afterEach((to) => {
  if (to.path.indexOf('/redirect') === -1 && to.meta.title) {
    Util.openNewPage(router.app, to.meta.title, to.path, to.query)
  }
  // 设置标题
  if (to.meta.title) {
    document.title = to.meta.title + ' - 后台管理系统'
  } else {
    document.title = '后台管理系统'
  }
})

export default router
