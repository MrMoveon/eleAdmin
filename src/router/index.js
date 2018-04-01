import Vue from "vue";
import Router from "vue-router";

import layout from "@/views/layout/layout";
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "layout",
      component: layout
    }
  ]
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
