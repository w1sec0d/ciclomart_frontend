import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import userInfoService from '../services/userInfoService'
import { setAuthUser } from '../store/slices/authSlice'

const UserInfo = () => {
  const dispatch = useDispatch()
  const authUser = useSelector((state) => state.auth.authUser)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUserInfo = async () => {
      const token = localStorage.getItem('token')

      if (token) {
        const request = await userInfoService.getUserInfo(token)
        dispatch(setAuthUser(request.user))
        setLoading(false)
      } else {
        setLoading(false)
      }
    }

    fetchUserInfo()
  }, [dispatch])

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h1>Información del Usuario</h1>
      <p>ID del Usuario: {authUser.idUsuario}</p>
      <p>Email: {authUser.correo}</p>
      <p>Username: {authUser.username}</p>
    </div>
  )
}

export default UserInfo
