// General layout structure for the app, each route will be rendered inside <Outlet />

import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Notification from './Notification'

const Layout = () => {
  return (
    <div>
      <header>
        {/* <h1>Register</h1> */}
        <Navbar />
      </header>
      <main className="mt-[64px]">
        <Outlet />
        <Notification />
      </main>
      <footer></footer>
    </div>
  )
}

export default Layout
