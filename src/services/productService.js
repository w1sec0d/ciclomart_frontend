import axios from 'axios'
import questionService from './questionService'
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

const getProducts = async () => {
  const request = await axios.get(API_URL + '/productos')
  return request.data.results
}

const getBicycles = async () => {
  const request = await axios.get(API_URL + '/bicicletas')
  return request.data.results
}

const getComponents = async () => {
  const request = await axios.get(API_URL + '/componentes')
  return request.data.results
}

const getOffers = async () => {
  const request = await axios.get(API_URL + '/ofertas')
  return request.data.results
}

const getProductById = async (id) => {
  const request = await axios.get(API_URL + '/productos/' + id)
  const preguntas = await questionService.getQuestions(id)
  return {
    ...request.data.results[0],
    preguntas,
  }
}

export {
  getProducts,
  getProductById,
  getBicycles,
  getComponents,
  getOffers,
}
