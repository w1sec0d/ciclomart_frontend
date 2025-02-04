import axios from 'axios'
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

const getProducts = async () => {
  const request = await axios.get(API_URL + '/productos')
  return request.data.results
}

export { getProducts }
