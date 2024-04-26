import { createRouter, createWebHistory } from 'vue-router'
import MainView from "./views/main.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainView
    }
  ]
})

export default router