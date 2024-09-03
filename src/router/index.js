import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/HomePage.vue"),
  },
  {
    path: "/alldbc",
    name: "Alldbc",
    component: () => import("@/pages/Alldbc.vue"),
  },
  {
    path: "/profile/:userMobile",
    name: "DigitalCard",
    component: () => import("@/pages/DigitalCard.vue")
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

export default router;
