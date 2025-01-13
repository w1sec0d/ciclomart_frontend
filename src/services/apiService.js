// Comunicates the front-end with the back-end
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

import axios from 'axios'

const getUsuario = async () => {
  const request = await axios.get(API_URL + '/usuarios')
  return request.data
}

const createUsuario = async (usuario) => {
  const request = await axios.post(API_URL + '/usuarios', usuario)
  return request.data
}

const searchProducts = async (params) => {
  let request = null
  if (params === '' || params === null){
    request = await axios.get(API_URL + '/search')
  }
  else{
    params = new URLSearchParams(params).toString()
    request = await axios.get(API_URL + '/search?' + params)
  }
  return request.data
}

export default { getUsuario, createUsuario, searchProducts }
