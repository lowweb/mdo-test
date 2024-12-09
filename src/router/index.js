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
      meta: {
        requiresAuth: true,
        keepAlive: true
      }
    },
    {
      path: '/login',
      name: 'login',
      components: { default: LoginView },
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
