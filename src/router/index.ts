import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/tab-view",
    name: "TabView",
    component: () =>
      import(/* webpackChunkName: "tab-view" */ "../views/TabView.vue")
  },
  {
    path: "/transfer-view",
    name: "TransferView",
    component: () =>
      import(/* webpackChunkName: "tab-view" */ "../views/TransferView.vue")
  },
  {
    path: "/treenav-view",
    name: "TreeNavView",
    component: () =>
      import(/* webpackChunkName: "tab-view" */ "../views/TreeNavView.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
