// Routing
import { Route, Routes } from 'react-router'

// Pages
import Landing from './pages/Landing'
import Layout from './components/Layout'
import Register from './pages/Register'
import Profile from './pages/Profile'
import UserInfo from './pages/UserInfo'
import Login from './pages/Login'
import Verificacion from './pages/Verificacion'
import PasswordRecovery from './pages/PasswordRecovery'
import CodeVerification from './pages/CodeVerification'

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
            path="verificacionCode/:token"
            element={<CodeVerification />}
          />
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
