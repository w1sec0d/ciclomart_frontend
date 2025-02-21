const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

import axios from 'axios'

const addProductToCart = async (idUsuario, idProducto) => {
  try {
    const response = await axios.post(API_URL + '/cart/add', {
      idUsuario,
      idProducto,
    })
    return response.data
  } catch (error) {
    console.error('Error agregando producto al carrito:', error)
  }
}

export default {
  addProductToCart,
}