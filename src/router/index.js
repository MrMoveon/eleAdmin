import Vue from 'vue'
import Router from 'vue-router'

import layout from '@/views/layout/layout'
import console from '@/views/home/console'
//  set
import system from '@/views/set/system/system'
import password from '@/views/set/user/password'
import info from '@/views/set/user/info'
//  template
import page404 from '@/views/template/tips/404'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout,
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'home',
          component: console
        }
      ]
    },
    {
      path: '/set',
      name: 'set',
      component: layout,
      redirect: '/set/user/password',
      children: [
        {
          path: 'system/system',
          name: 'system',
          component: system
        },
        {
          path: 'user/info',
          name: 'info',
          component: info
        },
        {
          path: 'user/password',
          name: 'password',
          component: password
        }
      ]
    },
    {
      path: '/tips',
      name: 'tips',
      redirect: '/tips/404',
      component: layout,
      children: [
        {
          path: '404',
          name: '404',
          component: page404
        }
      ]
    },
    {
      path: '*',
      redirect: '/tips/404'
    }
  ]
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
