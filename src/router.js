import { createRouter, createWebHistory } from 'vue-router'
import MainView from "./views/main.vue"
import InputsView from "@/views/inputs.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainView
    },
    {
      path: '/inputs',
      component: InputsView
    }
  ]
})

export default router