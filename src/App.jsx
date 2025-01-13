// Routing
import { Route, Routes } from 'react-router'


// Pages
import Landing from './pages/Landing'
import Layout from './components/Layout'
import Register from './pages/Register'
import UserInfo from './pages/UserInfo'
import Login from './pages/Login'

// Context

import { AuthProvider } from './assets/Context/AuthContext'

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path = "login" element={<Login />} /> 
        <Route path = "userInfo" element={<UserInfo />} /> 
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
