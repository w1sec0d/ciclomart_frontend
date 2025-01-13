const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'
import axios from 'axios'

const getUserInfo = async (token) => {

    const request = await axios.get(API_URL + '/userInfo',{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return request.data
}

export default { getUserInfo}