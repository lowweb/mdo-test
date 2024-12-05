import store from '../store'

export const paginationStore = {
  namespaced: true,
  state: () => ({
    currentPage: 1,
    rowsPerPage: 3
  }),
  mutations: {
    setCurrentPage(state, page) {
      state.currentPage = page
    },
    setRowsPerPage(state, rows) {
      state.rowsPerPage = rows
    }
  },
  getters: {
    paginatedData(state, getters) {
      const start = (state.currentPage - 1) * state.rowsPerPage
      const end = start + state.rowsPerPage
      return store.getters['dataStore/filteredData'].slice(start, end)
      // return getters.filteredData.slice(start, end)
    },
    totalItems(state, getters) {
      // return getters.filteredData.length
      return store.getters['dataStore/filteredData'].length
    }
  }
}
