export const addressesStore = {
  namespaced: true,
  state: () => ({
    addresses: []
  }),
  mutations: {
    setAddresses(state, addresses) {
      state.addresses = addresses
    }
  },
  getters: {}
}
