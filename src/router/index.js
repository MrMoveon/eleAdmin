import Vue from 'vue'
import Router from 'vue-router'
import { routers } from '@/router/routers'
import util from '@/lib/util'
Vue.use(Router)

const router = new Router({
  routes: routers
})

router.beforeEach((to, from, next) => {
  // 页面跳转 设置网页title
  util.title(to.meta.title)
  next()
})

export default router
