import axios from 'axios'
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

const createPreference = async (item) => {
  try {
    const response = await axios.post(API_URL + '/createPreference', item)
    const { id } = response.data
    return id
  } catch (error) {
    console.error('Error creando la preferencia de Mercado Pago:', error)
  }
}

export default { createPreference }
