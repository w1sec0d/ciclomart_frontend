const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

import axios from 'axios'

const publishProduct = async (product) => {
    const request = await axios.post(API_URL + '/addProduct', product)
    return request.data
}

export default { publishProduct }