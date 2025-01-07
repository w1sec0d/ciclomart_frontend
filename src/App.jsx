// Routing
import { Route, Routes } from 'react-router'

// Pages
import LandingPage from './pages/Landing'
import Layout from './components/Layout'
import Register from './pages/Register'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Register />} />
      </Route>
    </Routes>
  )
}

export default App
