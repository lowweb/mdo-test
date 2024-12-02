import axios from 'axios'

export const ordersStore = {
  namespaced: true,
  state: () => ({
    orders: []
  }),
  mutations: {
    SET_ITEMS(state, data) {
      state.orders = data.items
    }
  },
  actions: {
    async fetchItems({ commit, state }) {
      const token = 'a12c249a0e5d16923a6ad7dac2db7ade6f73cb92'
      try {
        const response = await axios.get('https://dev.moydomonline.ru/api/appeals/v1.0/appeals/', {
          headers: {
            Authorization: `Token ${token}`
          }
        })
        const data = response.data
        console.log(data.items)
        commit('SET_ITEMS', { items: data.items })
      } catch (error) {
        console.error('Error fetching items:', error)
      }
    }
  },
  etters: { paginatedOrders: (state) => state.orders }
}
