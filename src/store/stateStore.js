export const stateStore = {
  namespaced: true,
  state: () => ({
    searchQuery: '',
    loading: false,
    tableColumns: [
      { keyName: 'number', columnName: '№', isSortable: true },
      { keyName: 'columnname', columnName: 'Создана', isSortable: true },
      { keyName: 'address', columnName: 'Адрес', isSortable: false },
      { keyName: 'lastname', columnName: 'Заявитель', isSortable: false },
      { keyName: 'description', columnName: 'Описание', isSortable: true },
      { keyName: 'dueDate', columnName: 'Срок', isSortable: true },
      { keyName: 'statusname', columnName: 'Статус', isSortable: true }
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
