import { getUser } from '../services/userService'

const getUserFromLocalStorage = async () => {
  const token = window.localStorage.getItem('token')
  if (!token) {
    console.log('No token found')
    return null
  }

  try {
    const response = await getUser(token)
    return response.results.user ? response.results.user : null
  } catch (error) {
    window.localStorage.removeItem('token')
    console.error(error)
    return null
  }
}

export default getUserFromLocalStorage
