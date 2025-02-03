import { useState, useEffect } from 'react'

//import components
import ProductRow from '../components/ProductRow'
import Selector from '../components/Selector'
import apiService from '../services/apiService'
//import filters
import filters from '../utils/filters'
import Button from '../components/Button'

const SearchPage = (params) => {
  const [tipo, setTipo] = useState('bicicleta')
  const [showAllFilters, setShowAllFilters] = useState(false)
  const [filterResults, setFilterResults] = useState(params.searchResults || [])
  const [filterValues, setFilterValues] = useState({ tipo: tipo })
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const handleShowAllFilters = () => {
    setShowAllFilters(!showAllFilters)
  }

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1)
  }

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
  }

  const startIndex = (currentPage - 1) * itemsPerPage
  const currentItems = filterResults.slice(
    startIndex,
    startIndex + itemsPerPage
  )

  const handleFilterChange = async (filterLabel, selectedValue) => {
    let newFilters = {}
    const defaultValues = {}

    //If tipo selector changed, reset all filters

    if (filterLabel === 'tipo') {
      setTipo(selectedValue)

      const types = ['bicicleta', 'repuesto']

      for (const type of types) {
        filters[type].forEach((filter) => {
          if (filter.label === 'tipo')
            defaultValues[filter.label.toLowerCase()] = type
          else if (filter.label === 'nombre')
            defaultValues[filter.label.toLowerCase()] = params.name
          else defaultValues[filter.label.toLowerCase()] = ''
        })
      }

      newFilters = {
        nombre: params.name,
        tipo: selectedValue,
        ...defaultValues,
      }
      setFilterValues({ ...newFilters, ...defaultValues })
    }

    //For every other selector, update the filters
    else {
      newFilters = {
        ...filterValues,
        [filterLabel.toLowerCase()]: selectedValue,
      }
      setFilterValues(newFilters)
    }
    const request = await apiService.searchProducts(newFilters)
    const filtered = request.results.filter((result) => {
      return Object.entries(newFilters).every(([key, value]) => {
        if (value === '') return true
        return result[key.toLowerCase()]
          ?.toString()
          .toLowerCase()
          .includes(value.toString().toLowerCase())
      })
    })

    setFilterResults(filtered)
  }

  useEffect(() => {
    setFilterResults(params.searchResults || [])
  }, [params.searchResults])

  return (
    <>
      {/* Main Section */}
      <main className="max-w-5xl mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-6">
          Busca Bicicletas y Repuestos
        </h1>

        {/* Search Bar */}
        <div className="bg-white shadow rounded-lg overflow-hidden mb-4">
          <div className="flex items-center border-b px-4 py-3">
            <input
              type="text"
              placeholder="Búsqueda"
              className="flex-grow px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
            {/* <button className="ml-2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded">Bicicleta de ruta</button> */}
          </div>
          {/* Filters Row */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 py-4 px-4">
            <div className="flex flex-col items-start">
              <label className="text-sm font-semibold text-gray-600 mb-1">
                Tipo
              </label>
              <select
                className="px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 w-full"
                value={tipo}
                onChange={(event) => {
                  handleFilterChange('tipo', event.target.value)
                }}
              >
                <option value="bicicleta">Bicicleta</option>
                <option value="repuesto">Repuesto</option>
              </select>
            </div>
            {Array.isArray(filters[tipo]) &&
              filters[tipo]
                .slice(0, showAllFilters ? filters[tipo].length : 4)
                .map((filter, index) => (
                  <Selector
                    key={index}
                    label={filter.label}
                    options={filter.options}
                    value={filterValues[filter.label.toLowerCase()] || ''}
                    onFilterChange={handleFilterChange}
                  />
                ))}
          </div>
          {filters[tipo].length > 4 && (
            <div className="px-4">
              <button
                onClick={handleShowAllFilters}
                className="text-blue-500 hover:underline mt-2"
              >
                {showAllFilters
                  ? 'Mostrar menos filtros'
                  : 'Mostrar más filtros'}
              </button>
            </div>
          )}
        </div>

        {/* Table Header */}
        <div className="hidden sm:grid grid-cols-4 bg-blue-200 text-blue-800 font-semibold py-2 px-4">
          <span>Producto</span>
          <span>Descripción</span>
          <span>Tipo</span>
          <span>Precio</span>
        </div>

        {/* Products List */}
        <div className="bg-white shadow rounded-lg">
          {filterResults.length > 0 ? (
            currentItems.map((result, index) => (
              <ProductRow
                key={index}
                image="https://bicistore.com.co/wp-content/uploads/2020/11/imagen-5.jpg"
                alt={result.nombre}
                description={result.nombre}
                brand={result.marca}
                type={
                  result.tipo.charAt(0).toUpperCase() + result.tipo.slice(1)
                }
                price={`$${result.precio.toString()}`}
              />
            ))
          ) : (
            <p>No hay resultados para los filtros ingresados</p>
          )}
        </div>
        {/* Pagination Controls */}
        <div className="flex justify-center mt-4">
          <Button onClick={handlePreviousPage} disabled={currentPage === 1}>
            Anterior
          </Button>
          <Button
            onClick={handleNextPage}
            disabled={startIndex + itemsPerPage >= filterResults.length}
          >
            Siguiente
          </Button>
        </div>
      </main>
    </>
  )
}

export default SearchPage
