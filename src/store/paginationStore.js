import store from '../store'

export const paginationStore = {
  namespaced: true,
  state: () => ({
    currentPage: 1,
    rowsPerPage: 10,
    countRecords: null,
    pagesCount: null
  }),
  mutations: {
    setCurrentPage(state, page) {
      state.currentPage = page
    },
    setRowsPerPage(state, rows) {
      state.rowsPerPage = rows
    },
    setCountRecords(state, count) {
      state.countRecords = count
    },
    setPagesCount(state, pages) {
      state.pagesCount = pages
    }
  },
  getters: {
    paginatedData(state, getters) {
      return store.getters['ordersStore/filteredData']
    },
    getCurrentPage(state) {
      return state.currentPage
    },
    getRowsPerPage(state) {
      return state.rowsPerPage
    }
  }
}
