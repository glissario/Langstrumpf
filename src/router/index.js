import { createRouter, createWebHistory } from "vue-router";

const FlipCard = () => import("../components/FlipCard.vue");
const Home = () => import("../views/Home.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/flip",
      name: "FlipCard",
      component: FlipCard,
    },
    {
      path: "/home",
      name: "Home",
      component: Home,
    },
  ],
});

export default router;
