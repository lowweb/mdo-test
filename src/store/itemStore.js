import { fetchItem, updateAppeals, putAppeals } from '../services/api'

export const itemStore = {
  namespaced: true,
  state: () => ({
    item: {
      number: null,
      created_at: null,
      premise: {
        id: null
      },
      apartment: {
        id: null
      },
      applicant: {
        last_name: null,
        first_name: null,
        patronymic_name: null,
        username: null
      },
      description: null,
      due_date: null,
      status: {
        name: null
      }
    }
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
        const data = await fetchItem(itemId)
        commit('setItem', data)
      } catch (error) {
        throw error
      }
    },
    async updateAppeal({ state }) {
      try {
        await updateAppeals(state.item.number, state.item)
      } catch (error) {
        throw error
      }
    },
    async putAppeal({ state }) {
      try {
        await putAppeals(state.item)
      } catch (error) {
        throw error
      }
    }
  }
}
