import axios from 'axios'
import { getAppeals } from '../services/api'
import { getNestedValue } from '@/utils/getNestedValue'

export const ordersStore = {
  namespaced: true,
  state: () => ({
    orders: [],
    sortKey: '',
    sortOrder: 1
  }),
  mutations: {
    setOrders(state, data) {
      state.orders = data.results
    },
    setSortKey(state, key) {
      state.sortKey = key
    },
    setSortOrder(state, order) {
      state.sortOrder = order
    }
  },
  actions: {
    async fetchOrders({ commit, rootState }) {
      try {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        commit('stateStore/setLoading', true, { root: true })
        const data = await getAppeals(
          rootState.stateStore.searchQuery,
          rootState.addressesStore.activeAddressId,
          rootState.paginationStore.rowsPerPage,
          rootState.paginationStore.currentPage
        )
        commit('setOrders', data)
        commit('paginationStore/setCountRecords', data.count, { root: true })
        commit('paginationStore/setPagesCount', data.pages, { root: true })
        commit('stateStore/setLoading', false, { root: true })
      } catch (error) {
        commit('stateStore/setLoading', false, { root: true })
        throw error
      }
    }
  },
  getters: {
    filteredData(state) {
      let data = state.orders
      if (state.sortKey) {
        data.sort((a, b) => {
          const aKey = getNestedValue(a, state.sortKey)
          const bKey = getNestedValue(b, state.sortKey)
          if (aKey < bKey) return -1 * state.sortOrder
          if (aKey > bKey) return 1 * state.sortOrder
          return 0
        })
      }
      return data
    }
  }
}
