import axios from 'axios'
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'


const getProducts = async () => {
  const request = await axios.get(API_URL + '/productos')
  return request.data.results
}

const getProductById = async (id) => {
  const request = await axios.get(API_URL + '/productos/' + id)
  return request.data.results[0]
}



export { getProducts, getProductById }
