// General layout structure for the app, each route will be rendered inside <Outlet />

import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div>
      <header>
        <h1>Register</h1>
        <nav className="bg-primary p-4">
          <ul className="flex flex-col md:flex-row">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  )
}

export default Layout
