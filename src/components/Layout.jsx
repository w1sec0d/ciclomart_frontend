// General layout structure for the app, each route will be rendered inside <Outlet />

import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Notification from './Notification'
import ModalShow from './ModalShow'
import Loading from './Loading'
import Footer from './Footer'

const Layout = (params) => {
  return (
    <div>
      <header>
        {/* <h1>Register</h1> */}
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
