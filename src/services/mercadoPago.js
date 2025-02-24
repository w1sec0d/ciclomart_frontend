import axios from 'axios'
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

const createPreference = async (item) => {
  try {
    const response = await axios.post(API_URL + '/createPreference', item)
    const { preferenceId, paymentURL } = response.data
    return { preferenceId, paymentURL }
  } catch (error) {
    console.error('Error creando la preferencia de Mercado Pago:', error)
  }
}

const sendBuyRequest = async (producto, idComprador) => {
  try {
    const request = await createPreference({
      title: producto.nombre,
      unit_price: producto.precio,
      quantity: 1,
      currency: 'COP',
      idComprador: idComprador,
      idProducto: producto.idProducto,
    })
    return request
  } catch (error) {
    console.error('Error creando la preferencia de MercadoPago:', error)
  }
}

const createExposurePreference = async (exposure) => {
  try {
    const response = await axios.post(
      API_URL + '/createExposurePreference',
      exposure
    )
    const { preferenceId, paymentURL } = response.data
    return { preferenceId, paymentURL }
  } catch (error) {
    console.error(
      'Error creando la preferencia de exposición en Mercado Pago:',
      error
    )
  }
}

const sendBuyExposureRequest = async (exposure, idComprador) => {
  try {
    const request = await createExposurePreference({
      grade: exposure.grade,
      price: exposure.precio,
      quantity: 1,
      currency: 'COP',
      idComprador: idComprador,
    })
    return request
  } catch (error) {
    console.error('Error creando la preferencia de MercadoPago:', error)
  }
}

export default {
  createPreference,
  sendBuyRequest,
  createExposurePreference,
  sendBuyExposureRequest,
}
