import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import ErrorPageView from '@/views/ErrorPageView.vue'
import OrdersListView from '@/views/OrdersListView.vue'
import OrderInfoView from '@/views/OrderInfoView.vue'
import LoginView from '@/views/LoginView.vue'
import AddOrderView from '@/views/AddOrderView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'orders',
      components: { default: OrdersListView },
      // component: () => import('../views/OrdersListView.vue'),
      meta: {
        requiresAuth: true,
        keepAlive: true
      }
    },
    {
      path: '/login',
      name: 'login',
      components: { default: LoginView },
      // component: () => import('../views/LoginView.vue'),
      meta: {
        guest: true
      }
    },
    {
      path: '/orderinfo/:id',
      name: 'orderinfo',
      meta: {
        requiresAuth: true,
        keepAlive: true
      },
      // component: () => import('../views/OrderInfoView.vue'),
      components: { default: OrdersListView, popup: OrderInfoView }
    },
    {
      path: '/neworder',
      name: 'neworder',
      meta: {
        requiresAuth: true,
        keepAlive: true
      },
      components: { default: OrdersListView, popup: AddOrderView }
      // component: () => import('../views/AddOrderView.vue')
    },
    {
      path: '/:pathMatch(.*)',
      name: 'error',
      component: ErrorPageView
    }
  ]
})

router.beforeEach(async (to, from) => {
  const isAuthenticated = store.getters['authStore/isAuthenticated']
  if (!isAuthenticated && to.name !== 'login') {
    return { name: 'login' }
  }
  if (isAuthenticated && to.name === 'login') {
    return { name: 'orders' }
  }
})

export default router
