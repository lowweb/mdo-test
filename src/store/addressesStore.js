import { getAddresses } from '../services/api'

export const addressesStore = {
  namespaced: true,
  state: () => ({
    addresses: []
  }),
  mutations: {
    setAddresses(state, data) {
      state.addresses = data
    }
  },
  actions: {
    async fetchAddresses({ commit }) {
      try {
        const data = await getAddresses()
        commit('setAddresses', data.results)
      } catch (error) {
        console.error('Error fetching items:', error)
      }
    }
  },
  getters: {
    getAddresses(state) {
      const addresses = state.addresses.map((item) => {
        return { value: item.customer_premise_id, name: item.address }
      })
      console.log
      return [...addresses]
    }
  }
}
