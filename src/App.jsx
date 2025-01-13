// Routing
import { Route, Routes } from 'react-router'

//State
import { useState } from 'react'

// Pages
import Landing from './pages/Landing'
import Layout from './components/Layout'
import Register from './pages/Register'
import Search from './pages/Search'
import apiService from './services/apiService'

const App = () => {

  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (text) => {
    setSearchText(text);
    const results = await apiService.searchProducts({nombre: text});
    setSearchResults(results);
  }

  return (
    <Routes>
      <Route path="/" element={<Layout searchText={searchText} onSearch={handleSearch}/>}>
        <Route index element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="search" element={<Search searchResults={searchResults} />} />
      </Route>
    </Routes>
  )
}

export default App
