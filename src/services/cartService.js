const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

import axios from 'axios'

const addProductToCart = async (idUsuario, idProducto) => {
  try {
    const response = await axios.post(API_URL + '/addToShoppingCart', {
      idUsuario,
      idProducto,
      cantidad : 1
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

export default {
  addProductToCart,
  getCart
}