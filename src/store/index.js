// store/index.js
import { createStore } from 'vuex'
import { authStore } from './authStore'
import { tooltipStore } from './tooltipStore'

const store = createStore({
  modules: {
    authStore,
    tooltipStore
  }
})

export default store
