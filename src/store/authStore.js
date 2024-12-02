import axios from 'axios'

export const authStore = {
  namespaced: true,
  state: () => ({
    token: null
  }),
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    }
  },
  actions: {
    async login({ commit }, userData) {
      console.log(userData)
      try {
        const response = await axios.post('https://dev.moydomonline.ru/api/auth/login/', {
          username: userData.username,
          password: userData.password
        })
        const token = response.data.key
        console.log(token)
        commit('SET_TOKEN', token)
        return token
      } catch (error) {
        console.error('Error logging in:', error)
        throw error
      }
    }
  },
  getters: { isAuthenticated: (state) => !!state.token, getToken: (state) => state.token }
}
