import { createRouter, createWebHistory } from "vue-router";

import SignInPage from "@/views/SignInPage";
import SignUpPage from "@/views/SignUpPage";
import MainPage from "@/views/MainPage";

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
    meta: { requireAuth: true },
  },
  {
    path: "/signIn",
    name: "signIn",
    component: SignInPage,
  },
  {
    path: "/signUp",
    name: "signUp",
    component: SignUpPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((routeInfo) => routeInfo.meta.requireAuth)) {
    if (
      !JSON.parse(localStorage.getItem("vuex")) ||
      !JSON.parse(localStorage.getItem("vuex")).auth.isAuthenticated
    ) {
      next({
        path: "/signIn",
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
