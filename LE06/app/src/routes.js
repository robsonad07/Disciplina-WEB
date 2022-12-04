import { createRouter, createWebHistory } from "vue-router";

import Home from "./view/Home.vue";
import Profile from "./view/Profile.vue";
import Login from "./View/Login.vue";
import Registrar from "./View/Registrar.vue";


const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/registrar",
    name: "registrar",
    component: Registrar
  }
];

export const router = createRouter({ history: createWebHistory(), routes });

export default router;
