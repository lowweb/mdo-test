// store/modules/table.js
export const dataStore = {
  namespaced: true,
  state: () => ({
    orders: [
      {
        number: 1,
        created_at: '2023-12-01',
        address: '123 Street',
        last_name: 'Smith',
        description: 'Description 1',
        due_date: '2023-12-10',
        statusname: 'Pending'
      },
      {
        number: 2,
        created_at: '2023-15-01',
        address: '543 Street',
        last_name: 'John',
        description: 'Description 2',
        due_date: '2023-14-10',
        statusname: 'new'
      },

      {
        number: 3,
        created_at: '2023-16-01',
        address: '5435 Street',
        last_name: 'Delim',
        description: 'Description 3',
        due_date: '2023-10-10',
        statusname: 'new'
      },

      {
        number: 4,
        created_at: '2023-17-01',
        address: '67 Street',
        last_name: 'Yarii',
        description: 'Description 4',
        due_date: '2023-09-10',
        statusname: 'Pending'
      },

      {
        number: 5,
        created_at: '2023-11-01',
        address: '78 Street',
        last_name: 'Surjio',
        description: 'Description 5',
        due_date: '2023-11-10',
        statusname: 'Pending'
      }
      // Добавьте больше данных по необходимости
    ],
    searchQuery: '',
    addressFilter: '',
    sortKey: '',
    sortOrder: 1,
    columns: [
      { keyName: 'number', columnName: '№', isSortable: true },
      { keyName: 'created_at', columnName: 'Создана', isSortable: true },
      { keyName: 'address', columnName: 'Адрес', isSortable: false },
      { keyName: 'lastName', columnName: 'Заявитель', isSortable: false },
      { keyName: 'description', columnName: 'Описание', isSortable: false },
      { keyName: 'dueDate', columnName: 'Срок', isSortable: false },
      { keyName: 'statusName', columnName: 'Статус', isSortable: true }
    ]
  }),
  mutations: {
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
  getters: {
    uniqueAddresses(state) {
      const addresses = state.orders.map((item) => item.address)
      return [...new Set(addresses)]
    },
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
