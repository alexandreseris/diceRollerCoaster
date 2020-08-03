import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);
/* eslint-disable */
// impossible d'enregistrer le fichier avec le bon formattage, du coup on désactive ce linter de mairde
const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/newCharacter",
        name: "newCharacter",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.

        component: () =>
            import ( /* webpackChunkName: "NewCharacter" */ "../views/NewCharacter.vue")
    },
    {
        path: "/profilList",
        name: "profilList",
        component: () =>
            import ( /* webpackChunkName: "ProfilList" */ "../views/ProfilList.vue")
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;