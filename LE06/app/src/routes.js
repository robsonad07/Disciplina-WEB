import { createRouter, createWebHistory } from "vue-router";

import Home from "./view/Home.vue";
import Profile from "./view/Profile.vue";


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
];

export const router = createRouter({ history: createWebHistory(), routes });

export default router;
