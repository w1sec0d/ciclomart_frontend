// Comunicates the front-end with the back-end
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'
import axios from 'axios'

const getRatingProduct = async (data) => {
  const request = await axios.get(API_URL + `/ratingProduct/${data}`)
  return request.data
}

const getAvgRatingProduct = async (data) => {
  const request = await axios.get(API_URL + `/averageProductRatings/${data}`)
  return request.data
}

const createRating = async (data) => {
  const request = await axios.post(API_URL + `/addRatingProduct`, data)
  return request.data
}

const checkUserPurchase = async (data) => {
  const request = await axios.post(
    API_URL + `/checkUserPurchase/`,
    data
  )
  return request.data
}

export default {
  getRatingProduct,
  getAvgRatingProduct,
  createRating,
  checkUserPurchase,
}
