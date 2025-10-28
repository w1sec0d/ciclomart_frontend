// Comunicates the front-end with the back-end
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

import axios from 'axios'

const loginUser = async (data) => {
  const request = await axios.post(API_URL + '/login', data)
  return request
}

const sendResetPasswordEmail = async (data, language) => {
  const request = await axios.post(API_URL + '/sendRecover', { data, language })
  return request
}

const recoveryPassword = async (data, token, language) => {
  const request = await axios.post(API_URL + '/updatePassword', { data, token, language })
  return request
}

const sendRegisterCode = async (data, language) => {
  const request = await axios.post(API_URL + '/sendRegisterCode', { data, language })
  return request
}

const validateCode = async (data, token) => {
  const request = await axios.post(API_URL + '/validateCode', { data, token })
  return request
}

export default {
  loginUser,
  sendResetPasswordEmail,
  recoveryPassword,
  sendRegisterCode,
  validateCode,
}
