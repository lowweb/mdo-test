import axios from 'axios'
import { fetchItem } from '../services/api'

export const itemStore = {
  namespaced: true,
  state: {
    appeal: {
      number: '',
      created_at: '',
      premise_id: null,
      apartment_id: null,
      applicant: { last_name: '', first_name: '', patronymic_name: '', username: '' },
      description: '',
      due_date: '',
      status: ''
    },
    premises: [],
    apartments: []
  },
  getters: {
    getAppealField: (state) => (path) => {
      return path.split('.').reduce((o, i) => (o ? o[i] : null), state.appeal)
    }
  },
  mutations: {
    setAppealField: (state, { path, value }) => {
      const keys = path.split('.')
      const lastKey = keys.pop()
      const deepObject = keys.reduce((o, i) => (o[i] = o[i] || {}), state.appeal)
      Vue.set(deepObject, lastKey, value)
    },
    setPremises(state, premises) {
      state.premises = premises
    },
    setApartments(state, apartments) {
      state.apartments = apartments
    }
  },
  actions: {
    async fetchPremises({ commit }) {
      const response = await axios.get('https://dev.moydomonline.ru/api/geo/v2.0/user-premises/')
      commit('setPremises', response.data)
    },
    async fetchApartments({ commit }, premise_id) {
      const response = await axios.get(
        `https://dev.moydomonline.ru/api/geo/v2.0/user-premises/?search=${premise_id}`
      )
      commit('setApartments', response.data)
    },
    async updateAppeal({ state }) {
      const response = await axios.patch(
        `https://dev.moydomonline.ru/api/appeals/v1.0/appeals/${state.appeal.number}/`,
        state.appeal
      )
      return response.data
    }
  }
  // state: () => ({
  //   item: []
  // }),
  // getters: {
  //   getItem(state) {
  //     return state.item
  //   },
  //   getItemField: (state) => (path) => {
  //     return path.split('.').reduce((o, i) => (o ? o[i] : null), state.item)
  //   }
  // },
  // mutations: {
  //   setItem(state, value) {
  //     state.item = value.results[0]
  //   },
  //   setItemField: (state, { path, value }) => {
  //     let keys = path.split('.')
  //     let lastKey = keys.pop()
  //     let deepObject = keys.reduce((o, i) => (o[i] = o[i] || {}), state.item)
  //     Vue.set(deepObject, lastKey, value)
  //   }
  // },

  // actions: {
  //   async fetchItem({ commit }, itemId) {
  //     try {
  //       // commit('stateStore/setLoading', true, { root: true })
  //       const data = await fetchItem(itemId)
  //       commit('setItem', data)
  //       // commit('stateStore/setLoading', false, { root: true })
  //     } catch (error) {
  //       // commit('stateStore/setLoading', false, { root: true })
  //       throw error
  //     }
  //   }
  // }
}
