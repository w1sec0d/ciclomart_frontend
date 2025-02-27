import axios from 'axios'
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

const createPreference = async (producto, idComprador) => {
  try {
    console.log('producto', producto)
    const preferenceBody = {
      title: producto.nombre,
      unit_price: producto.precio,
      quantity: 1,
      currency: 'COP',
      idComprador: idComprador,
      idProducto: producto.idProducto,
      idVendedor: producto.idVendedor,
    }
    const response = await axios.post(API_URL + '/createPreference', preferenceBody)
    const { preferenceId, paymentURL } = response.data
    return { preferenceId, paymentURL }
  } catch (error) {
    console.error('Error creando la preferencia de Mercado Pago:', error)
  }
}

export default { createPreference }
