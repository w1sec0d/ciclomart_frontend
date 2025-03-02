// React and state logic
import { useState } from 'react'

// Routing
import { Route, Routes } from 'react-router-dom'

// Pages
import Landing from './pages/Landing'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Verificacion from './pages/Verificacion'
import PasswordRecovery from './pages/PasswordRecovery'
import CodeVerification from './pages/CodeVerification'
import Layout from './components/Layout'
import ComparisonView from './pages/ComparisonView'
import Publish from './pages/Publish'
import ExposureInfo from './pages/ExposureInfo'
import Vendedor from './pages/Vendedor'
import ShoppingCart from './pages/ShoppingCart'
import ExposurePage from './components/Exposure/ExpositionPage'
import Purchases from './pages/Purchases'
import TermsAndCondition from './pages/TermsAndConditions'
import DataPrivacy from './pages/DataPrivacy'
import Conocenos from './pages/Conocenos'
import Ofertas from './pages/Ofertas'

import ExpositionPage from './components/Exposure/ExpositionPage'
import Componente from './pages/Search/Componente'
import Bicicleta from './pages/Search/Bicicleta'



// Services
import apiService from './services/apiService'
import ProductPage from './pages/Product/Product'
import RequestResult from './pages/RequestResult'
import ProductRating from './pages/ProductRating'

const App = () => {
  const [searchText, setSearchText] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = async (text) => {
    setSearchText(text)
    const request = await apiService.searchProducts({ nombre: text })
    setSearchResults(request.results)
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
        <Route path="search/component" element={<Componente />} />
        <Route path="search/bycicle" element={<Bicicleta />} />
        <Route path="verificacionCode/:token" element={<CodeVerification />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="comparison/:id1/:id2" element={<ComparisonView />} />
        <Route path="requestResult/:type" element={<RequestResult />} />
        <Route path="passwordRecovery/:token" element={<PasswordRecovery />} />
        <Route path="publish" element={<Publish />} />
        <Route path="productRating" element={<ProductRating />} />
        <Route path="exposureInfo" element={<ExposureInfo />} />
        <Route path="exposurePayment" element={<ExposurePage />} />
        <Route path="vendedor/:id" element={<Vendedor />} />
        <Route path="shoppingCart" element={<ShoppingCart />} />
        <Route path="purchases/:idComprador" element={<Purchases />} />
        <Route path="terms" element={<TermsAndCondition />} />
        <Route path="privacy" element={<DataPrivacy />} />
        <Route path="/conocenos" element={<Conocenos />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/exposure/:idProduct" element={<ExpositionPage />} />
      </Route>
    </Routes>
  )
}

export default App
