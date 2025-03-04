// Comunicates the front-end with the back-end
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

import axios from 'axios'

const loginUser = async (data) => {
  const request = await axios.post(API_URL + '/login', data)
  return request
}

const sendResetPasswordEmail = async (data) => {
  const request = await axios.post(API_URL + '/sendRecover', { data })
  return request
}

const recoveryPassword = async (data, token) => {
  const request = await axios.post(API_URL + '/updatePassword', { data, token })
  return request
}

const sendRegisterCode = async (data) => {
  const request = await axios.post(API_URL + '/sendRegisterCode', { data })
  return request
}

const validateCode = async (data, token) => {
  const request = await axios.post(API_URL + '/validateCode', { data, token })
  return request
}

const validateCaptcha = async (token) => {
  const request = await axios.post(API_URL + '/validateCaptcha', {token})
  return request.data
}

export default {
  loginUser,
  sendResetPasswordEmail,
  recoveryPassword,
  sendRegisterCode,
  validateCode,
  validateCaptcha,
}
