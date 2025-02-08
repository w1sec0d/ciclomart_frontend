// Estructura general de la app, cada página de la app se renderiza dentro de <Outlet/>

import { useEffect } from 'react'

import Navbar from './Navbar'
import Notification from './Notification'
import ModalShow from './ModalShow'
import Loading from './Loading'
import Footer from './Footer'

import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { clearAuth, setAuthUser } from '../store/slices/authSlice'
import getUserFromLocalStorage from '../utils/getUser'

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
