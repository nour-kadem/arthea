import { createRouter, createWebHistory } from "vue-router"
import Home from "@/Home.vue"
import AboutMe from "@/AboutMe.vue"
import ArtTherapy from "@/ArtTherapy.vue"

const routes = [
  {
    path: "/",
    component: Home,
    name: "home"
  },
  {
    path: "/qui-je-suis",
    component: AboutMe,
    name: "about-me"
  },
  {
    path: "/art-therapie",
    component: ArtTherapy,
    name: "art-therapy"
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router