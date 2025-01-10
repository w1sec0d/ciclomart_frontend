// Routing
import { Route, Routes } from 'react-router'

// Pages
import Landing from './pages/Landing'
import Layout from './components/Layout'
import Register from './pages/Register'
import Search from './pages/Search'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="search" element={<Search />} />
      </Route>
    </Routes>
  )
}

export default App
