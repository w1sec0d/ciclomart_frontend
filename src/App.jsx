// Routing
import { Route, Routes } from 'react-router'

// Pages
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
