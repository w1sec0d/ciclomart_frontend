// Routing
import { Route, Routes } from 'react-router'

// Pages
import Landing from './pages/Landing'
import Layout from './components/Layout'
import Register from './pages/Register'
import Profile from './pages/profile'
import UserInfo from './pages/UserInfo'
import Login from './pages/Login'
import Verificacion from './pages/Verificacion'
import PasswordRecovery from './pages/PasswordRecovery'
import { useEffect } from 'react'
import getUserFromLocalStorage from './utils/GetUser'

import { setAuthUser } from './store/slices/authSlice'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUserFromLocalStorage()
      dispatch(setAuthUser(user))
    }
    fetchUser()
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route path="login" element={<Login />} />
        <Route path="userInfo" element={<UserInfo />} />
        <Route path="verificacion" element={<Verificacion />} />
        <Route path="passwordRecovery/:token" element={<PasswordRecovery />} />
      </Route>
    </Routes>
  )
}

export default App
