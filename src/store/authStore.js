import axios from 'axios'
import { postLogin } from '../services/api'

export const authStore = {
  namespaced: true,
  state: () => ({
    token: null
  }),
  mutations: {
    SET_AUTH_TOKEN(state, token) {
      state.token = token
      sessionStorage.setItem('mdo_key', token)
    }
  },
  actions: {
    async login({ commit }, userData) {
      try {
        const token = await postLogin(userData.username, userData.password)
        commit('SET_AUTH_TOKEN', token)
        return token
      } catch (error) {
        console.error('Error logging in:', error)
        throw error
      }
    }
  },
  getters: {
    isAuthenticated: (state) => {
      const KEY_FROM_STORAGE = sessionStorage.getItem('mdo_key')
      return !!state.token || !!KEY_FROM_STORAGE ? true : false
    },
    getToken: (state) => {
      const KEY_FROM_STORAGE = sessionStorage.getItem('mdo_key')
      return state.token === null && KEY_FROM_STORAGE !== null ? KEY_FROM_STORAGE : state.token
    }
  }
}
