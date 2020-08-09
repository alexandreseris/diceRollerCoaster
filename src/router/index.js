import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);
/* eslint-disable */
// impossible d'enregistrer le fichier avec le bon formattage, du coup on désactive ce linter de mairde


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
            import ( /* webpackChunkName: "NewCharacter" */ "../views/NewCharacter.vue"),
        label: "Nouveau personnage",
        icon: "add"
    },
    {
        path: "/profilList",
        name: "profilList",
        component: () =>
            import ( /* webpackChunkName: "ProfilList" */ "../views/ProfilList.vue"),
        label: "Profils",
        icon: "format_list_numbered"
    }
];

// config vue router pour material
// const linkActiveClass = 'activeRouterLink'
// Vue.material.router.linkActiveClass = linkActiveClass // pass custom class to Vue Material
// lève une erreur Uncaught TypeError: vue__WEBPACK_IMPORTED_MODULE_1__.default.material is undefinedà creuser

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
    // linkActiveClass
});

export default router;