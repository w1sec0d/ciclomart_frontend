//Componentes
import ItemContainer from '../components/ItemContainer'
import ComparisonBar from '../components/Comparison/ComparisonBar'

//Utilidades
import { useQuery } from 'react-query'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setLoading, clearLoading } from '../store/slices/loadingSlice'
import ReactPaginate from 'react-paginate'

//Servicios
import { getBicicletas, getProducts } from '../services/productService'

const Bicicleta = () => {
  const dispatch = useDispatch()
  const itemsPerPage = 5
  const [currentPage, setCurrentPage] = useState(0)

  //Trae bicicletas
  const {
    data: bicicletas,
    isError,
    isLoading,
  } = useQuery(['productos'], getProducts)

  // Maneja cambio de página
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected)
  }

  useEffect(() => {
    if (isLoading) {
      dispatch(setLoading())
    } else {
      dispatch(clearLoading())
    }
  }, [isLoading, dispatch])

  if (isLoading) return null
  if (isError) return <p>Error: {error.message}</p>
  // Calcula que elementos mostrar

  const offset = currentPage * itemsPerPage
  const currentItems = bicicletas.slice(offset, offset + itemsPerPage)

  console.log(currentItems)

  return (
    <div className="bg-lgray pb-8 ">
      <ComparisonBar />
      <div>
        <h1 className="font-bold text-3xl bg-primary w-full h-20 mb-10 shadow-xl flex items-center justify-center">
          ¡Encuentra tu próxima bicicleta!
        </h1>
      </div>
      <div className="px-9 mb-4">
        <div className="grid grid-cols-5">
          {currentItems.map((bicicleta) => (
            <ItemContainer
              {...bicicleta}
              key={bicicleta.idProducto}
              className={'mt-2'}
              envioGratis={bicicleta['método de envio'] === 'gratis'}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <ReactPaginate
          previousLabel={'← Anterior'}
          nextLabel={'Siguiente →'}
          breakLabel={'...'}
          pageCount={Math.ceil(bicicletas.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </div>
    </div>
  )
}

export default Bicicleta
