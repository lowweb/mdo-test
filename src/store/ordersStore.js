import axios from 'axios'
import { getAppeals } from '../services/api'

export const ordersStore = {
  namespaced: true,
  state: () => ({
    orders: []
  }),
  mutations: {
    setOrders(state, data) {
      state.orders = data
    },
    setSearchQuery(state, query) {
      state.searchQuery = query
    },
    setAddressFilter(state, address) {
      state.addressFilter = address
    },
    setSortKey(state, key) {
      state.sortKey = key
    },
    setSortOrder(state, order) {
      state.sortOrder = order
    }
  },
  actions: {
    async fetchOrders({ commit }) {
      try {
        const data = await getAppeals()
        commit('setOrders', data)
      } catch (error) {
        console.error('Error fetching items:', error)
      }
    }
  },
  getters: {
    filteredData(state) {
      let data = state.orders.filter(
        (item) =>
          item.number.toString().includes(state.searchQuery) &&
          (state.addressFilter === '' || item.address === state.addressFilter)
      )
      if (state.sortKey) {
        data.sort((a, b) => {
          const aKey = a[state.sortKey]
          const bKey = b[state.sortKey]
          if (aKey < bKey) return -1 * state.sortOrder
          if (aKey > bKey) return 1 * state.sortOrder
          return 0
        })
      }
      return data
    }
  }
}
