import userInfoService from '../services/userInfoService'

const getUserFromLocalStorage = async () => {
  const token = window.localStorage.getItem('token')

  if (!token) return null

  const response = await userInfoService.getUserInfo(token)
  return response.user ? response.user : null
}

export default getUserFromLocalStorage
