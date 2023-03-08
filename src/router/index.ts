import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView/HomeView.vue'
import TrainingView from '@/views/TrainingView/TrainingView.vue'
import CalendarView from '@/views/CalendarView/CalendarView.vue'
import GalleryView from '@/views/GalleryView/GalleryView.vue'
import ShopView from '@/views/ShopView/ShopView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/training',
      name: 'training',
      component: TrainingView
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: CalendarView
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryView
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopView
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: () => import('../views/AboutView/AboutView.vue')
    }
  ]
})

export default router
