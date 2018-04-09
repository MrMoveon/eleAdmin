import Vue from "vue";
import Router from "vue-router";

import layout from "@/views/layout/layout"
import console from "@/views/home/console"
//user
import password from "@/views/user/password"
import info from "@/views/user/info"
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "layout",
      component: layout,
      redirect:'/home',
      children:[
        {
          path:"home",
          name:'home',
          component:console
        }
      ]
    },
    {
      path:'/user',
      name:'user',
      component: layout,
      redirect:'/user/password',
      children:[
        {
          path:'info',
          name:'info',
          component:info
        },
        {
          path:'password',
          name:'password',
          component:password
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
