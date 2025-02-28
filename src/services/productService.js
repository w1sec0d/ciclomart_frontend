import axios from 'axios'
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'


const getProducts = async () => {
  const request = await axios.get(API_URL + '/productos')
  return request.data.results
}

const getBicicletas = async () => {
  const request = await axios.get(API_URL + '/bicicletas')
  return request.data.results
}

const getComponentes = async () => {
  const request = await axios.get(API_URL + '/componentes')
  return request.data.results
}

const getOfertas = async () => {
  const request = await axios.get(API_URL + '/ofertas')
  return request.data.results
}

const getProductById = async (id) => {
  const request = await axios.get(API_URL + '/productos/' + id)
  return request.data.results[0]
}


export {
  getProducts,
  getProductById,
  getBicicletas,
  getComponentes,
  getOfertas,
}

