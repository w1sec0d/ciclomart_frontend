// Comunicates the front-end with the back-end
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

import axios from 'axios'

const loginUser = async (data) => {
  const request = await axios.post(API_URL + '/login', data)
  return request
}

const sendResetPasswordEmail = async (data) => {
  const request = await axios.post(API_URL + '/sendEmail', { data })
  return request
}

const recoveryPassword = async (data, token) => {
  console.log('Hola desde recoveryPassword ', data)
  const request = await axios.post(API_URL + '/updatePassword', { data, token })
  return request
}

export default {
  loginUser,
  sendResetPasswordEmail,
  recoveryPassword,
}
