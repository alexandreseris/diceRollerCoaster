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
    path: "/NewProfil",
    name: "NewProfil",
    component: () => import("../views/NewProfil.vue"),
    label: "Nouveau profile",
    icon: "mdi-plus"
  },
  {
    path: "/SelectProfil",
    name: "SelectProfil",
    component: () => import("../views/SelectProfil.vue"),
    label: "Selectionner un profile",
    icon: "mdi-format-list-bulleted"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
