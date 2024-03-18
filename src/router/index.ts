import { createRouter, createWebHashHistory } from "vue-router"
import Home from "../views/Home.vue"

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "Home",
      },
    },
    {
      path: "/characters/:id",
      name: "character",
      component: () => import("../views/CharacterProfile.vue"),
      meta: {
        title: "",
      },
    }
  ]
})

router.afterEach((to: any, from: any, next: any) => {
  document.title = to.meta.title !== "" ? `${to.meta.title} | Rick and Morty Characters ` : "Rick and Morty Characters";
  next();
});

export default router
