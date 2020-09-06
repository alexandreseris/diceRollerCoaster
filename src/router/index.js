import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
    label: "Page principale",
    icon: "home"
},
{
    path: "/newCharacter",
    name: "newCharacter",
    component: () => // lazy-loading trick
        import( /* webpackChunkName: "NewCharacter" */ "../views/NewCharacter.vue"),
    label: "Nouveau personnage",
    icon: "add"
},
{
    path: "/profilList",
    name: "profilList",
    component: () =>
        import( /* webpackChunkName: "ProfilList" */ "../views/ProfilList.vue"),
    label: "Profils",
    icon: "format_list_numbered"
}
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;