import axios from 'axios'
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

const createPreference = async (producto, cantidad = 1, idComprador) => {
  try {
    const response = await axios.post(API_URL + '/createPreference', { producto, cantidad, idComprador })
    const { preferenceId, paymentURL } = response.data
    return { preferenceId, paymentURL }
  } catch (error) {
    console.error('Error creando la preferencia de Mercado Pago:', error)
  }
}

export default { createPreference }
