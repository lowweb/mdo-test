// store/index.js
import { createStore } from 'vuex'
import { authStore } from './authStore'
import { tooltipStore } from './tooltipStore'
import { ordersStore } from './ordersStore'
import { paginationStore } from './paginationStore'
import { addressesStore } from './addressesStore'
import { stateStore } from './stateStore'
import { itemStore } from './itemStore'

const store = createStore({
  modules: {
    authStore,
    tooltipStore,
    ordersStore,
    paginationStore,
    addressesStore,
    stateStore,
    itemStore
  }
})

export default store
