import axios from 'axios'
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

const getPurchasesByBuyerId = async (idComprador) => {
  const request = await axios.get(API_URL + '/compras/' + idComprador)
  return request.data.results
}

const confirmShipment = async (idCarrito) => {
  const request = await axios.post(API_URL + '/confirmShipment/' + idCarrito)
  return request.data
}

const cancelPurchase = async (idCarrito) => {
  const request = await axios.post(API_URL + '/cancelPurchase/' + idCarrito)
  return request.data
}

export { getPurchasesByBuyerId, confirmShipment, cancelPurchase }
