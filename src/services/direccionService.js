import axios from 'axios'
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

const updateDireccion = async (idUsuario, direccionData) => {
    const response = await axios.put(API_URL + `/updateUsuarioDireccion/${idUsuario}`, direccionData)
    return response.data
}

export default {
    updateDireccion,
}
