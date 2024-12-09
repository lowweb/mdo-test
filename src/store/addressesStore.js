import { getAddresses, getApartament } from '../services/api'

export const addressesStore = {
  namespaced: true,
  state: () => ({
    addresses: [],
    activeAddressId: null,
    apartaments: []
  }),
  mutations: {
    setAddresses(state, data) {
      state.addresses = data
    },
    setApartament(state, data) {
      state.apartaments = data
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
    },
    async fetchApartament({ commit }, id) {
      try {
        const data = await getApartament(id)
        commit('setApartament', data.results)
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
    },
    getApartament(state) {
      const apartaments = state.apartaments.map((item) => {
        return { value: item.id, name: item.number }
      })
      return [...apartaments]
    },
    getAddressesById(state) {
      const addresses = state.addresses.map((item) => {
        return { value: item.id, name: item.address }
      })

      return [...addresses]
    }
  }
}
