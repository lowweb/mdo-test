import axios from 'axios'
import { getAppeals } from '../services/api'

export const ordersStore = {
  namespaced: true,
  state: () => ({
    data: [],
    orders: [],
    searchQuery: '',
    addressFilter: '',
    sortKey: '',
    sortOrder: 1,
    columns: [
      { keyName: 'number', columnName: '№', isSortable: true },
      { keyName: 'columnname', columnName: 'Создана', isSortable: true },
      { keyName: 'address', columnName: 'Адрес', isSortable: false },
      { keyName: 'lastname', columnName: 'Заявитель', isSortable: false },
      { keyName: 'description', columnName: 'Описание', isSortable: true },
      { keyName: 'dueDate', columnName: 'Срок', isSortable: true },
      { keyName: 'statusname', columnName: 'Статус', isSortable: true }
    ]
  }),
  mutations: {
    setOrders(state, data) {
      state.orders = data.results
      state.data = data
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
    async fetchOrders({ commit }, payload) {
      try {
        const data = await getAppeals(
          payload.search,
          payload.premiseid,
          payload.pagesize,
          payload.page
        )
        commit('setOrders', data)
        commit('paginationStore/setCurrentPage', data.page, { root: true })
        commit('paginationStore/setRowsPerPage', data.page_size, { root: true })
        commit('paginationStore/setCountRecords', data.count, { root: true })
        commit('paginationStore/setNextPage', data.page_next, { root: true })
        commit('paginationStore/setPrevPage', data.page_previous, { root: true })
        commit('paginationStore/setPagesCount', data.pages, { root: true })
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
