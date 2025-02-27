//Componentes
import ItemContainer from '../components/ItemContainer'
import ComparisonBar from '../components/Comparison/ComparisonBar'
import Input from '../components/Input'

//Utilidades
import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import Fuse from 'fuse.js'

//Icons
import { IoIosArrowForward } from 'react-icons/io'
import { IoIosArrowBack } from 'react-icons/io'

const IndividualProduct = ({ products, title }) => {
  const itemsPerPage = 10
  const [currentPage, setCurrentPage] = useState(0)
  const [query, setQuery] = useState('')

  const fuse = new Fuse(products, {
    keys: ['nombre', 'precio'],
    includeScore: true,
  })

  // Maneja cambio de página
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected)
  }

  // Controla busqueda
  const handleOnSearch = ({ currentTarget = {} }) => {
    const { value } = currentTarget
    setQuery(value)
  }

  // Calcula que elementos mostrar
  const results = fuse.search(query)
  const matchResults = query ? results.map((result) => result.item) : products

  const offset = currentPage * itemsPerPage
  const currentItems = matchResults.slice(offset, offset + itemsPerPage)

  return (
    <div className="bg-lgray pb-8 ">
      <ComparisonBar />
      <div>
        <h1 className="font-bold text-3xl bg-secondary w-full h-20 mb-10 shadow-xl flex items-center justify-center">
          {title}
        </h1>
      </div>
      {/*Permite realizar busqueda, integrada con Fuse (búsqueda difusa) */}
      <div className="flex items-end justify-center mb-10 ">
        <div className="w-40 bg-secondary flex items-center justify-center rounded-l-xl  h-10 border-black/50 border font-bold shadow-xl">
          <h2>Busca</h2>
        </div>
        <Input
          id={'busqueda'}
          className={'bg-white mt-2 w-[900px] shadow-xl rounded-r-xl '}
          inputClassName={' border px-2 rounded-r-xl '}
          label=""
          value={query}
          onChange={handleOnSearch}
        />
      </div>
      {/*Muestra todos los productos pasados por parámetro */}
      <div className="px-9 mb-10">
        <div className="grid grid-cols-5">
          {currentItems.map((product) => (
            <ItemContainer
              {...product}
              key={product.idProducto}
              className={'mt-2'}
              envioGratis={product['método de envio'] === 'gratis'}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        {/*Crea paginación personalizada */}
        <ReactPaginate
          previousLabel={
            <span className="bg-secondary flex items-center justify-center w-10 h-10 rounded-md">
              <IoIosArrowBack className="size-6" />
            </span>
          }
          nextLabel={
            <span className="bg-secondary flex items-center justify-center w-10 h-10 rounded-md">
              <IoIosArrowForward className="size-6" />
            </span>
          }
          breakLabel={<span className="mr-2">...</span>}
          pageCount={Math.ceil(matchResults.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={'flex items-center justify-center'}
          pageClassName="border border-lgray hover:bg-stone-400/35 w-10 h-10 flex items-center justify-center rounded-xl ml-2 mr-2 "
          activeClassName={'bg-tertiary/50'}
        />
      </div>
    </div>
  )
}

export default IndividualProduct
