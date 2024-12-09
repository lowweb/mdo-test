import axios from 'axios'
import { fetchItem, updateAppeals } from '../services/api'

export const itemStore = {
  namespaced: true,
  state: () => ({
    item: []
  }),
  getters: {
    getItem(state) {
      return state.item
    },
    getItemField: (state) => (path) => {
      return path.split('.').reduce((o, i) => (o ? o[i] : null), state.item)
    }
  },
  mutations: {
    setItem(state, value) {
      state.item = value.results[0]
    },
    setItemNull(state) {
      state.item = []
    },
    setItemField: (state, { field, value }) => {
      let keys = field.split('.')
      let lastKey = keys.pop()
      let deepObject = keys.reduce((o, i) => (o[i] = o[i] || {}), state.item)
      deepObject[lastKey] = value
    }
  },

  actions: {
    async fetchItem({ commit }, itemId) {
      try {
        // commit('stateStore/setLoading', true, { root: true })
        const data = await fetchItem(itemId)
        commit('setItem', data)
        // commit('stateStore/setLoading', false, { root: true })
      } catch (error) {
        // commit('stateStore/setLoading', false, { root: true })
        throw error
      }
    },
    async updateAppeal({ state }) {
      try {
        const data = await updateAppeals(state.item.number, state.item)
      } catch (error) {
        throw error
      }
    }
  }
}
