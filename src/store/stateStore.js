export const stateStore = {
  namespaced: true,
  state: () => ({
    searchQuery: '',
    loading: false,
    tableColumns: [
      { keyName: 'number', columnName: '№', isSortable: true },
      { keyName: 'created_at', columnName: 'Создана', isSortable: true },
      { keyName: 'address', columnName: 'Адрес', isSortable: false },
      { keyName: 'lastname', columnName: 'Заявитель', isSortable: false },
      { keyName: 'description', columnName: 'Описание', isSortable: true },
      { keyName: 'due_date', columnName: 'Срок', isSortable: true },
      { keyName: 'status.name', columnName: 'Статус', isSortable: true }
    ]
  }),
  getters: {
    getSearchQuery(state) {
      return state.searchQuery
    },
    getLoading(state) {
      return state.loading
    },
    getTableColumns(state) {
      return state.tableColumns
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
