import userInfoService from '../services/userInfoService'

const getUserFromLocalStorage = async () => {
  const token = window.localStorage.getItem('token')

  if (!token) {
    return null
  }

  try {
    const response = await userInfoService.getUserInfo(token)
    return response.user ? response.user : null
  } catch (error) {
    window.localStorage.removeItem('token')
    console.error(error)
    return null
  }
}

export default getUserFromLocalStorage
