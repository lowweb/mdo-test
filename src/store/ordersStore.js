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
      const KEY_FROM_STORAGE = sessionStorage.getItem('mdo_key')
      try {
        const response = await axios.get('https://dev.moydomonline.ru/api/appeals/v1.0/appeals/', {
          headers: {
            Authorization: `Token ${KEY_FROM_STORAGE}`
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
  getters: { paginatedOrders: (state) => state.orders }
}
