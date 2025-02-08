// React and state logic
import { useState } from 'react'

// Routing
import { Route, Routes } from 'react-router-dom'

// Pages
import Landing from './pages/Landing'
import Register from './pages/Register'
import Search from './pages/Search'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Verificacion from './pages/Verificacion'
import PasswordRecovery from './pages/PasswordRecovery'
import CodeVerification from './pages/CodeVerification'
import Layout from './components/Layout'

// Services
import apiService from './services/apiService'
import ProductPage from './pages/Product/Product'
import RequestResult from './pages/RequestResult'

const App = () => {
  const [searchText, setSearchText] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = async (text) => {
    setSearchText(text)
    const request = await apiService.searchProducts({ nombre: text })
    setSearchResults(request.results)
    console.log('request.results', request.results)
  }

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout searchText={searchText} onSearch={handleSearch} />}
      >
        <Route index element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="verificacion" element={<Verificacion />} />
        <Route path="verificationCode/:token?" element={<CodeVerification />} />
        <Route path="passwordRecovery/:token" element={<PasswordRecovery />} />
        <Route path="profile" element={<Profile />} />
        <Route
          path="search"
          element={<Search searchResults={searchResults} name={searchText} />}
        />
        <Route path="verificacionCode/:token" element={<CodeVerification />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route
          path="requestResult/:type"
          element={<RequestResult message="Compra exitosa" />}
        />
      </Route>
    </Routes>
  )
}

export default App
