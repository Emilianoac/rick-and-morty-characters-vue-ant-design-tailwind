import { createRouter, createWebHashHistory } from "vue-router"
import Home from "../views/Home.vue"

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/characters/:id",
      name: "character",
      component: () => import("../views/CharacterProfile.vue")
    }
  ]
})

export default router
