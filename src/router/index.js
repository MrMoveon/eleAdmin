import Vue from "vue";
import Router from "vue-router";

import layout from "@/views/layout/layout";
import console from "@/views/home/console"
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
    }
  ]
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
