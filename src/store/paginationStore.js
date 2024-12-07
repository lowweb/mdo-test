import store from '../store'

export const paginationStore = {
  namespaced: true,
  state: () => ({
    currentPage: null,
    rowsPerPage: null,
    countRecords: null,
    nextPage: null,
    prevPage: null,
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
    setNextPage(state, next) {
      state.nextPage = next
    },
    setPrevPage(state, prev) {
      state.prevPage = prev
    },
    setPagesCount(state, pages) {
      state.pagesCount = pages
    }
  },
  getters: {
    paginatedData(state, getters) {
      return store.getters['ordersStore/filteredData']
    }
  }
}
