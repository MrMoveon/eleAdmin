import layout from '@/views/layout/layout'

export const page404 = {
  path: '/*',
  name: 'error-404',
  meta: {
    title: '404-页面不存在'
  },
  component: () => import('@/views/template/tips/404')
}
// appRouter
export const appRouter = [
  {
    path: '/',
    name: 'layout',
    component: layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home/console'),
        meta: {
          title: '主页-控制台'
        }
      }
    ]
  }
]
// 设置
export const set = {
  path: '/set',
  name: 'set',
  component: layout,
  redirect: '/set/user/password',
  children: [
    {
      path: 'system/system',
      name: 'system',
      component: () => import('@/views/set/system/system'),
      meta: {
        title: '系统设置'
      }
    },
    {
      path: 'user/info',
      name: 'info',
      component: () => import('@/views//set/user/info'),
      meta: {
        title: '基本资料'
      }
    },
    {
      path: 'user/password',
      name: 'password',
      component: () => import('@/views//set/user/password'),
      meta: {
        title: '我的密码'
      }
    }
  ]
}
// 提示界面
export const tips = {
  path: '/tips',
  name: 'tips',
  redirect: '/tips/404',
  component: layout,
  children: [
    {
      path: '403',
      name: '403',
      meta: {
        title: '403-无权限查看页面'
      },
      component: () => import('@/views/template/tips/403')
    },
    {
      path: '404',
      name: '404',
      meta: {
        title: '404-页面不存在'
      },
      component: () => import('@/views/template/tips/404')
    },
    {
      path: '500',
      name: '500',
      meta: {
        title: '500-服务器出错了'
      },
      component: () => import('@/views/template/tips/500')
    }
  ]
}
export const routers = [...appRouter, set, tips, page404]
