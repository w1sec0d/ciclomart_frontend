// React and state logic
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

// Routing
import { Route, Routes } from 'react-router-dom'

// Pages
import Landing from './pages/Landing'
import Register from './pages/Register'
import Profile from './pages/Profile'
import UserInfo from './pages/UserInfo'
import Login from './pages/Login'
import Verificacion from './pages/Verificacion'
import PasswordRecovery from './pages/PasswordRecovery'
import CodeVerification from './pages/CodeVerification'

// Components
import Layout from './components/Layout'

// Utils
import getUserFromLocalStorage from './utils/getUser'
import { setAuthUser } from './store/slices/authSlice'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUserFromLocalStorage()
      dispatch(setAuthUser(user))
    }
    fetchUser()
  }, [dispatch])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="userInfo" element={<UserInfo />} />
        <Route path="verificacion" element={<Verificacion />} />
        <Route path="verificationCode" element={<CodeVerification />} />
        <Route path="verificationCode/:token" element={<CodeVerification />} />
        <Route path="passwordRecovery/:token" element={<PasswordRecovery />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  )
}

export default App
