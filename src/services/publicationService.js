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

const addBrand = async (nombre) => {
  const request = await axios.post(API_URL + '/addBrand', {nombre})
  return request.data
}

const uploadImage = async (id, image) => {
  if (!image) {
    return 'Please select an image to upload'
  }
  try {
    const formData = new FormData()
    formData.append('file', image)
    formData.append('upload_preset', 'ciclomart')

    const response = await axios.post(
      'https://api.cloudinary.com/v1_1/drfmpnhaz/image/upload', // Reemplaza con tu cloud name
      formData
    )
    console.log('Response:', response.data.secure_url)
    console.log('Id:', id)
    await axios.post(`${API_URL}/uploadImage`, {
      idProducto: id,
      file: response.data.secure_url,
    })
  } catch (error) {
    console.error('Error subiendo la imagen:', error)
  }
}

export default { publishProduct, getModels, getBrands, addBrand, uploadImage }
