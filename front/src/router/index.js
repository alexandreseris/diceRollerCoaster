import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    label: "Page principale",
    icon: "mdi-home"
  },
  {
    path: "/Campaign",
    name: "Campaign",
    component: () => import("../views/Campaign.vue"),
    label: "Campagne",
    icon: "mdi-dice-6"
  },
  {
    path: "/Settings",
    name: "Settings",
    component: () => import("../views/Settings.vue"),
    label: "Paramètres utilisateur",
    icon: "mdi-cogs"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
