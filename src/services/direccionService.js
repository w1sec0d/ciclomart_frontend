import axios from 'axios'

const updateDireccion = async (idUsuario, direccionData) => {
    const response = await axios.put(`/api/updateUsuarioDireccion/${idUsuario}`, direccionData)
    return response.data
}

export default {
    updateDireccion,
}
