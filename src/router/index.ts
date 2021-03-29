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
    path: "/tab-view",
    name: "TabView",
    component: () =>
      import(/* webpackChunkName: "tab-view" */ "../views/TabView.vue")
  },
  {
    path: "/transfer-view",
    name: "TransferView",
    component: () =>
      import(/* webpackChunkName: "transfer-view" */ "../views/TransferView.vue")
  },
  {
    path: "/treenav-view",
    name: "TreeNavView",
    component: () =>
      import(/* webpackChunkName: "treenav-view" */ "../views/TreeNavView.vue")
  },
  {
    path: "/gauge-view",
    name: "GaugeView",
    component: () =>
      import(/* webpackChunkName: "gauge-view" */ "../views/GaugeView.vue")
  },
  {
    path: "/my-upload",
    name: "MyUpload",
    component: () =>
      import(/* webpackChunkName: "my-upload" */ "../views/MyUpload.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
