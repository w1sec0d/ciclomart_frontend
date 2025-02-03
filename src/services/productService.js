const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

const getProducts = async () => {
  const request = await axios.get(API_URL + '/products')
  return request.data
}
