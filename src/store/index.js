// store/index.js
import { createStore } from 'vuex'
import { authStore } from './authStore'
import { tooltipStore } from './tooltipStore'
import { ordersStore } from './ordersStore'

const store = createStore({
  modules: {
    authStore,
    tooltipStore,
    ordersStore
  }
})

export default store
