import axios from 'axios'
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

const addProductToCart = async (idUsuario, idProducto, cantidad) => {
  try {
    const response = await axios.post(API_URL + '/addToShoppingCart', {
      buyerId: idUsuario,
      productId: idProducto,
      quantity: cantidad,
    })
    return response.data
  } catch (error) {
    console.error('Error agregando producto al carrito:', error)
  }
}

const getCart = async (idUsuario) => {
  try {
    console.log('idUsuario', idUsuario)
    const response = await axios.get(API_URL + '/shoppingCart/' + idUsuario)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error('Error obteniendo carrito:', error)
  }
}

const removeFromCart = async (idUsuario, idProducto) => {
  try {
    const response = await axios.delete(
      API_URL + '/removeFromShoppingCart/' + idUsuario + '/' + idProducto
    )
    return response.data
  } catch (error) {
    console.error('Error eliminando producto del carrito:', error)
  }
}

export default {
  addProductToCart,
  getCart,
  removeFromCart,
}
