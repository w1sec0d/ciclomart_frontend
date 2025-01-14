// Routing
import { Route, Routes } from 'react-router'

// Pages
import Landing from './pages/Landing'
import Layout from './components/Layout'
import Register from './pages/Register'
import UserInfo from './pages/UserInfo'
import Login from './pages/Login'
import Verificacion from './pages/Verificacion'
import PasswordRecovery from './pages/PasswordRecovery'

// Context

import { AuthProvider } from './assets/Context/AuthContext'

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="userInfo" element={<UserInfo />} />
          <Route path="verificacion" element={<Verificacion />} />
          <Route
            path="passwordRecovery/:token"
            element={<PasswordRecovery />}
          />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
