import { createRouter, createWebHistory } from "vue-router";

import SignInTemplates from "@/components/templates/SignInTemplates";

const routes = [
  {
    path: "/",
    name: "home",
    component: SignInTemplates,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
