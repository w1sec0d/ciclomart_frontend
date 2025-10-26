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
    const request = await axios.get(`${API_URL}/getUsuarioPhoto/${id}`)
    return request.data
}

const getSales = async (idUser) => {
    const request = await axios.get(`${API_URL}/ventas/${idUser}`)
    return request.data
}

const getPurchases = async (idUser) => {
    const request = await axios.get(`${API_URL}/compras/${idUser}`)
    return request.data
}

const updateUserPhoto = async (PhotoUrl, idUser) => {
    const request = await axios.get(
        `${API_URL}/updateUsuarioFoto/${PhotoUrl}/${idUser}`
    )
    return request.data
}

const createUsuario = async (usuario) => {
    const request = await axios.post(API_URL + '/usuarios', usuario)
    return request.data
}

const updateDireccion = async (idUsuario, direccionData) => {
    const response = await axios.put(
        API_URL + `/updateUsuarioDireccion/${idUsuario}`,
        direccionData
    )
    return response.data
}

export { getUser, getUserPhoto, createUsuario, updateDireccion, getSales, getPurchases, updateUserPhoto }