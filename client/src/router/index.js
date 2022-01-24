import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home Page",
    },
  },
  {
    path: "/press",
    name: "Press",
    component: () => import("../views/Press.vue"),
    meta: {
      title: "Press Page",
    },
  },
  {
    path: "/support",
    name: "Support",
    component: () => import("../views/Support.vue"),
    meta: {
      title: "Support Page",
    },
  },
  {
    path: "/backoffice",
    name: "Backoffice",
    component: () => import("../views/Backoffice.vue"),
    meta: {
      title: "Backoffice Page",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
