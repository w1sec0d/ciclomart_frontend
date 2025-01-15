import userInfoService from '../services/userInfoService'

const getUserFromLocalStorage = async () => {
  const token = window.localStorage.getItem('token')
  console.log(token)
  const response = await userInfoService.getUserInfo(token)
  console.log('response', response.user)
  return response.user ? response.user : null
}

export default getUserFromLocalStorage
