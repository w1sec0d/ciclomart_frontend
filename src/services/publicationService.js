const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

import axios from 'axios'
import { string } from 'prop-types'

const publishProduct = async (product) => {
  const request = await axios.post(API_URL + '/addProduct', product)
  return request.data
}

const getModels = async (type, id) => {
  const request = await axios.get(
    API_URL + '/models/' + type + '/' + id.toString()
  )
  return request.data
}

const getBrands = async () => {
  const request = await axios.get(API_URL + '/brands')
  return request.data
}

export default { publishProduct, getModels, getBrands }
