// store/index.js
import { createStore } from 'vuex'
import { authStore } from './authStore'
import { tooltipStore } from './tooltipStore'
import { ordersStore } from './ordersStore'
import { dataStore } from './dataStore'

const store = createStore({
  modules: {
    authStore,
    tooltipStore,
    ordersStore,
    dataStore
  }
})

export default store
