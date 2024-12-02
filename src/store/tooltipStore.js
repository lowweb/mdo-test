export const tooltipStore = {
  namespaced: true,
  state: () => ({
    isShown: false,
    text: '',
    isSuccess: false
  }),
  mutations: {
    setText(state, text) {
      state.text = text
    },
    showTooltip(state, payload) {
      state.text = payload.text
      state.isShown = true
      state.isSuccess = payload.isSuccess
      setTimeout(() => (state.isShown = false), 3000)
    },
    hideTooltip(state) {
      state.isShown = false
    }
  },
  getters: {
    getIsShown: (state) => state.isShown,
    getTextTooltip: (state) => state.text,
    getSuccess: (state) => state.isSuccess
  }
}
