import axios from 'axios'
import store from '@/store'

const apiClient = axios.create({
  baseURL: 'https://dev.moydomonline.ru/api/',
  headers: {
    'Content-Type': 'application/json'
  }
})
export const getAppeals = async (search = '', premise_id = '', page_size = 10, page = 1) => {
  const TOKEN_FROM_STORAGE = sessionStorage.getItem('mdo_key')
  console.log(TOKEN_FROM_STORAGE)
  try {
    const response = await apiClient.get(`appeals/v1.0/appeals/`, {
      params: { search: search, premise_id: premise_id, page_size: page_size, page: page },
      headers: { Authorization: `Token ${TOKEN_FROM_STORAGE}` }
    })
    return response.data
  } catch (error) {
    console.error('Error fetching appeals:', error)
    throw error
  }
}

export const getAddresses = async () => {
  const TOKEN_FROM_STORAGE = sessionStorage.getItem('mdo_key')
  try {
    const response = await apiClient.get('geo/v2.0/user-premises/', {
      headers: {
        Authorization: `Token ${TOKEN_FROM_STORAGE}`
      }
    })
    return response.data
  } catch (error) {
    console.error('Error get address:', error)
    throw error
  }
}

export const postLogin = async (username, password) => {
  try {
    const response = await apiClient.post('auth/login/', {
      username: username,
      password: password
    })
    const token = response.data.key
    return token
  } catch (error) {
    console.error('Error logging in:', error)
    throw error
  }
}
