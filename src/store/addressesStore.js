import { getAddresses } from '../services/api'

export const addressesStore = {
  namespaced: true,
  state: () => ({
    addresses: [],
    activeAddressId: null
  }),
  mutations: {
    setAddresses(state, data) {
      state.addresses = data
    },
    setActiveAddressId(state, id) {
      state.activeAddressId = id
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
      addresses.unshift({ value: '', name: 'Все адреса' })
      return [...addresses]
    }
  }
}
