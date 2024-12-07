export const stateStore = {
  namespaced: true,
  state: () => ({
    searchQuery: '',
    loading: false
  }),
  getters: {
    getSearchQuery(state) {
      return state.searchQuery
    },
    getLoading(state) {
      return state.loading
    }
  },
  mutations: {
    setSearchQuery(state, value) {
      state.searchQuery = value
    },
    setLoading(state, value) {
      state.loading = value
    }
  },
  actions: {
    updateSearchQuery({ commit }, value) {
      commit('setSearchQuery', value)
    }
  }
}
