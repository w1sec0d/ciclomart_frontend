// Estructura general de la app, cada página de la app se renderiza dentro de <Outlet/>

import { useEffect } from 'react'

// Components
import Navbar from './Navbar'
import Notification from './Notification'
import ModalShow from './ModalShow'
import Loading from './Loading'
import Footer from './Footer'

// Librerías
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'

// Redux
import { clearAuth, setAuthUser } from '../store/slices/authSlice'

// Utils
import getUserFromLocalStorage from '../utils/getUser'

// Inicialización de MercadoPago
import { initMercadoPago } from '@mercadopago/sdk-react'

if (import.meta.env.VITE_MP_PUBLIC_KEY) {
  initMercadoPago(import.meta.env.VITE_MP_PUBLIC_KEY)
} else {
  console.error('VITE_MP_PUBLIC_KEY no está definida')
}

const Layout = (params) => {
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
    <div>
      <header>
        <Navbar searchText={params.searchText} onSearch={params.onSearch} />
      </header>
      <main className="mt-[64px]">
        <Outlet />
        <Notification />
        <ModalShow />
        <Loading />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
