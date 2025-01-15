// Comunicates the front-end with the back-end
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

import axios from 'axios'

const getSales = async (idUser) => {
  const request = await axios.get(`${API_URL}/getVentasById/${idUser}`)
  return request.data
}

const getPurchases = async (idUser) => {
  const request = await axios.get(`${API_URL}/getComprasById/${idUser}`)
  return request.data
}

const updatePhoto = async (PhotoUrl, idUser) => {
  const request = await axios.get(
    `${API_URL}/updateUsuarioFoto/${PhotoUrl}/${idUser}`
  )
  return request.data
}

export default { getSales, getPurchases, updatePhoto }
