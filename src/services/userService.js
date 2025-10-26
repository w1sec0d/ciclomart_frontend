const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'
import axios from 'axios'

const getUser = async (token) => {
    const request = await axios.get(API_URL + '/getUser', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })

    return request.data
}

const getUserPhoto = async (id) => {
    const request = await axios.get(`${API_URL}/getUserPhoto/${id}`)
    return request.data
}

const getSales = async (idUser) => {
    const request = await axios.get(`${API_URL}/sales/${idUser}`)
    return request.data
}

const getPurchases = async (idUser) => {
    const request = await axios.get(`${API_URL}/purchases/${idUser}`)
    return request.data
}

const updateUserPhoto = async (PhotoUrl, idUser) => {
    const request = await axios.get(
        `${API_URL}/updateUserPhoto/${PhotoUrl}/${idUser}`
    )
    return request.data
}

const createUsuario = async (usuario) => {
    const request = await axios.post(API_URL + '/users', usuario)
    return request.data
}

const updateUserAddress = async (idUsuario, userAddressData) => {
    const response = await axios.put(
        API_URL + `/updateUserAddress/${idUsuario}`,
        userAddressData
    )
    return response.data
}

export { getUser, getUserPhoto, createUsuario, updateUserAddress, getSales, getPurchases, updatePhoto }