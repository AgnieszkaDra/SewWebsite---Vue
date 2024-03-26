import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChildView from '@/views/ChildView.vue'
import WomanView from '@/views/WomanView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/dziecko',
      name: 'dziecko',
      component: ChildView
    },
    {
      path: '/kobieta',
      name: 'kobieta',
      component: WomanView
    },
  ]
})

export default router
