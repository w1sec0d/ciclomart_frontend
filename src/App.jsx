// Routing
import { Route, Routes } from 'react-router'

//State
import { useState } from 'react'

// Pages
import Landing from './pages/Landing'
import Layout from './components/Layout'
import Register from './pages/Register'
import Search from './pages/Search'
import Profile from './pages/Profile'
import UserInfo from './pages/UserInfo'
import Login from './pages/Login'
import Verificacion from './pages/Verificacion'
import PasswordRecovery from './pages/PasswordRecovery'
import CodeVerification from './pages/CodeVerification'

import apiService from './services/apiService'

const App = () => {

  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (text) => {
    setSearchText(text);
    const results = await apiService.searchProducts({nombre: text});
    setSearchResults(results);
  }

  return (

      <Routes>
        <Route path="/" element={<Layout searchText={searchText} onSearch={handleSearch}/>}>
          <Route index element={<Landing />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="userInfo" element={<UserInfo />} />
          <Route path="verificacion" element={<Verificacion />} />
          <Route path="search" element={<Search searchResults={searchResults} name={searchText} />} />
          <Route
            path="verificacionCode/:token"
            element={<CodeVerification />}
          />
          <Route
            path="passwordRecovery/:token"
            element={<PasswordRecovery />}
          />
        </Route>
      </Routes>
    
  )
}

export default App
