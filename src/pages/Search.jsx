import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchSearchResults,
  clearSearchResults,
  setSearchInput,
} from '../store/slices/searchSlice'

//import components
import Results from '../components/Search/Results'
import Filters from '../components/Search/Filters'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import Button from '../components/Button'
import ComparisonBar from '../components/Comparison/ComparisonBar'
import { MaterialReactTable } from 'material-react-table'
import capitalize from '../utils/capitalize'
import ComparisonButton from '../components/Comparison/ComparisonButton'

//import filters
import filters from '../utils/newFilters'
import PaginationControls from '../components/Search/PaginationControls'

const animatedComponents = makeAnimated()

const columns = [
  {
    accessorKey: 'imagen',
    header: '',
    Cell: ({ cell }) => (
      <img
        src={cell.getValue()}
        alt="Bicicleta"
        style={{ width: 200, height: 200 }}
      />
    ),
  },
  {
    accessorKey: 'modelo',
    header: 'Modelo',
  },
  {
    accessorKey: 'tipo',
    header: 'Tipo',
  },
  {
    accessorKey: 'precio',
    header: 'Precio',
    Cell: ({ row }) => (
      <div className="relative ">
        <span>{row.original.precio}</span>
        <ComparisonButton idProducto={row.original.id} />
      </div>
    ),
  },
]

const SearchPage = (params) => {
  const dispatch = useDispatch()
  const searchResults = useSelector((state) => state.search.results)
  const searchStatus = useSelector((state) => state.search.status)
  const searchInput = useSelector((state) => state.search.searchInput)
  const idProduct1 = useSelector((state) => state.comparison.idProduct1)
  const idProduct2 = useSelector((state) => state.comparison.idProduct2)
  let tableResults = {}
  //State
  const [tipo, setTipo] = useState('bicicleta')
  const [showAllFilters, setShowAllFilters] = useState(false)
  const [filterValues, setFilterValues] = useState({ tipo: tipo })

  //pagination variables
  const itemsPerPage = 15
  const [currentPage, setCurrentPage] = useState(1)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentItems =
    searchResults && searchResults.results
      ? searchResults.results.slice(startIndex, startIndex + itemsPerPage)
      : []

  //State change functions
  const handleShowAllFilters = () => {
    setShowAllFilters(!showAllFilters)
  }

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1)
  }

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
  }

  //Filter change function

  const handleFilterChange = async (filterLabel, selectedValue) => {
    let newFilters = {}
    const defaultValues = {}

    //If tipo selector changed, reset all filters

    if (filterLabel === 'tipo') {
      setTipo(selectedValue.value)

      const types = ['bicicleta', 'componente']

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
        tipo: selectedValue.value,
        ...defaultValues,
      }
      setFilterValues({ ...newFilters, ...defaultValues })
    }

    //For every other selector, update the filters
    else {
      if (selectedValue === null) {
        newFilters = { ...filterValues, [filterLabel.toLowerCase()]: '' }
        setFilterValues(newFilters)
      } else {
        newFilters = {
          ...filterValues,
          [filterLabel.toLowerCase()]: selectedValue.value,
        }
        setFilterValues(newFilters)
      }
    }

    dispatch(fetchSearchResults(newFilters))
  }

  const handleSearchInputChange = (event) => {
    const value = event.target.value
    dispatch(setSearchInput(value))
  }

  //UseEffect
  useEffect(() => {
    if (params.searchResults) {
      dispatch(fetchSearchResults({ nombre: params.name, tipo: tipo }))
    }
    return () => {
      dispatch(clearSearchResults())
    }
  }, [params.searchResults, dispatch, params.name, tipo])

  useEffect(() => {
    if (searchInput || searchInput === '') {
      dispatch(fetchSearchResults({ nombre: searchInput, tipo: tipo }))
    }
  }, [searchInput, tipo, dispatch])

  const resultKeys =
    searchResults && searchResults.results && searchResults.results.length > 0
      ? Object.keys(searchResults.results[0])
      : []

  return (
    <div className="flex">
      <div className="w-1/5 p-4 bg-primary">
        <label className="text-slate-50 text-lg font-bold">Filtros</label>
        {resultKeys.map((key) => (
          <Filters
            key={key}
            label={key}
            results={Object.values(searchResults.results)}
            onChange={(selectedValue) => handleFilterChange(key, selectedValue)}
            onChange={(selectedValue) => handleFilterChange(key, selectedValue)}
          />
        ))}
      </div>
      <div className="w-4/5 p-4">
        <ComparisonBar />
        <MaterialReactTable
          columns={columns}
          data={
            searchResults && Array.isArray(searchResults.results)
              ? searchResults.results.map((result) => ({
                  imagen: result.imagenURL,
                  modelo: result.nombre,
                  tipo: capitalize(result.tipo),
                  precio: result.precio,
                  id: result.idProducto,
                }))
              : []
          }
          enableCellActions={false}
          enableColumnFilters={false}
          enablePagination
          enableHiding={false}
          enableSorting={false}
          enableBottomToolbar
          enableTopToolbar={false}
          muiTableContainerProps={{ sx: { maxHeight: '2000px' } }}
          muiTableBodyRowProps={({ row }) => {
            return {
              className: 'group',
            }
          }}
        />
      </div>
    </div>
  )
}

export default SearchPage
