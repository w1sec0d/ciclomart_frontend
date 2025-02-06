// React and state logic
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { clearAuth, setAuthUser } from './store/slices/authSlice'

// Routing
import { Route, Routes } from 'react-router-dom'

// Pages
import Landing from './pages/Landing'
import Register from './pages/Register'
import Search from './pages/Search'
import Profile from './pages/Profile'
import UserInfo from './pages/UserInfo'
import Login from './pages/Login'
import Verificacion from './pages/Verificacion'
import PasswordRecovery from './pages/PasswordRecovery'
import CodeVerification from './pages/CodeVerification'
import Layout from './components/Layout'

// Services
import apiService from './services/apiService'
import getUserFromLocalStorage from './utils/getUser'
import ProductPage from './pages/Product'

// MercadoPago
import { initMercadoPago } from '@mercadopago/sdk-react'

if (import.meta.env.VITE_MP_PUBLIC_KEY) {
  console.log('VITE_MP_PUBLIC_KEY', typeof import.meta.env.VITE_MP_PUBLIC_KEY)
  initMercadoPago(import.meta.env.VITE_MP_PUBLIC_KEY)
} else {
  console.error('VITE_MP_PUBLIC_KEY no está definida')
}

const App = () => {
  const [searchText, setSearchText] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = async (text) => {
    setSearchText(text)
    const request = await apiService.searchProducts({ nombre: text })
    setSearchResults(request.results)
    console.log('request.results', request.results)
  }

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUserFromLocalStorage()
      if (user) {
        dispatch(setAuthUser(user))
      } else {
        dispatch(clearAuth())
      }
    }
    fetchUser()
  }, [dispatch])

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout searchText={searchText} onSearch={handleSearch} />}
      >
        <Route index element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="userInfo" element={<UserInfo />} />
        <Route path="verificacion" element={<Verificacion />} />
        <Route path="verificationCode/:token?" element={<CodeVerification />} />
        <Route path="passwordRecovery/:token" element={<PasswordRecovery />} />
        <Route path="profile" element={<Profile />} />
        <Route
          path="search"
          element={<Search searchResults={searchResults} name={searchText} />}
        />
        <Route path="verificacionCode/:token" element={<CodeVerification />} />
        <Route path="passwordRecovery/:token" element={<PasswordRecovery />} />
        <Route path="product/:id" element={<ProductPage />} />
      </Route>
    </Routes>
  )
}

export default App
