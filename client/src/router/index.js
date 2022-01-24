import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/Home.vue"),
    meta: {
      title: "Home Page - Example App",
    },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      title: "About Page - Example App",
    },
  },
  {
    path: "/press",
    name: "Press",
    component: () => import("../views/Press.vue"),
    meta: {
      title: "Press Page - Example App",
    },
  },
  {
    path: "/support",
    name: "Support",
    component: () => import("../views/Support.vue"),
    meta: {
      title: "Press Page - Example App",
    },
  },
  {
    path: "/backoffice",
    name: "Backoffice",
    component: () => import("../views/Backoffice.vue"),
    meta: {
      title: "Backoffice Page - Example App",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
