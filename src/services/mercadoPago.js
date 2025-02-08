import axios from 'axios'
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

const createPreference = async (item) => {
  try {
    console.log('item', item)
    const response = await axios.post(API_URL + '/createPreference', item)
    const { preferenceId, paymentURL } = response.data
    return { preferenceId, paymentURL }
  } catch (error) {
    console.error('Error creando la preferencia de Mercado Pago:', error)
  }
}

const sendBuyRequest = async (producto) => {
  try {
    console.log('unitPRice', producto.precio)
    const request = await createPreference({
      title: producto.nombre,
      unit_price: producto.precio,
      quantity: 1,
      currency: "COP"
    })
    return request
  } catch (error) {
    console.error('Error creando la preferencia de MercadoPago:', error)
  }
}

export default { createPreference, sendBuyRequest }
