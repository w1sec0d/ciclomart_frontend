// Comunicates the front-end with the back-end
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

import axios from 'axios'

const getTiendas = async () => {
  const request = await axios.get(API_URL + '/tiendas')
  return request.data
}

//Products search
const searchProducts = async (params) => {
  params = new URLSearchParams(params).toString()
  const request = await axios.get(API_URL + '/search?' + params)
  return request.data
}

export default {
  searchProducts,
  getTiendas,
}
