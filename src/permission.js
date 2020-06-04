import Vue from 'vue'
import router, { BASIC_ROUTES, ASYNC_ROUTES } from './router'
import { getToken, hasToken, toggleLoginStatus, getFilteredRoutes, getGroup } from '@/utils/auth'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const routeInstance = new Vue({
  data () {
    return {
      currentRoute: []
    }
  }
})

Vue.prototype.$matchedRoutes = routeInstance

const WHITE_LIST = ['/login', '/home']

NProgress.configure({
  showSpinner: false
})

router.beforeEach(async (to, from, next) => {
  NProgress.start()

  if (getToken()) {
    if (to.path === '/login') {
      next({
        path: '/home'
      })
    } else {
      if (hasToken) {
        next()
      } else {
        toggleLoginStatus(true)
        const roles = getGroup()
        const filteredRoutes = getFilteredRoutes(ASYNC_ROUTES, roles)
        router.addRoutes(filteredRoutes)
        routeInstance.currentRoute = BASIC_ROUTES.concat(filteredRoutes)
        next({
          ...to,
          replace: true
        })
      }
    }
  } else {
    if (WHITE_LIST.includes(to.path)) {
      next()
    } else {
      next({
        path: `/login?redirect=${to.path}`
      })
    }
  }
})

router.afterEach(res => {
  NProgress.done()
})
