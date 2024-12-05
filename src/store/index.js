// store/index.js
import { createStore } from 'vuex'
import { authStore } from './authStore'
import { tooltipStore } from './tooltipStore'
import { ordersStore } from './ordersStore'
import { dataStore } from './dataStore'
import { paginationStore } from './paginationStore'
import { addressesStore } from './addressesStore'

const store = createStore({
  modules: {
    authStore,
    tooltipStore,
    ordersStore,
    dataStore,
    paginationStore,
    addressesStore
  }
})

export default store
