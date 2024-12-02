import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import ErrorPageView from '@/views/ErrorPageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'orders',
      component: () => import('../views/OrdersListView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: {
        guest: true
      }
    },
    {
      path: '/orderinfo/:id',
      name: 'orderinfo',
      meta: {
        requiresAuth: true
      },
      component: () => import('../views/OrderInfoView.vue')
    },
    {
      path: '/addorder',
      name: 'addorder',
      meta: {
        requiresAuth: true
      },
      component: () => import('../views/AddOrderView.vue')
    },
    {
      path: '/:pathMatch(.*)',
      name: 'error',
      component: ErrorPageView
    }
  ]
})

// router.beforeEach(async (to, from) => {
//   const isAuthenticated = store.getters['authStore/isAuthenticated']
//   if (!isAuthenticated && to.name !== 'login') {
//     return { name: 'login' }
//   }
// })

export default router
