// Components
import ItemContainer from '../components/ItemContainer'
import ComparisonBar from '../components/Comparison/ComparisonBar'
import Input from '../components/Input'

// Utilities
import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import Fuse from 'fuse.js'
import { useTranslation } from 'react-i18next'

// Icons
import { IoIosArrowForward } from 'react-icons/io'
import { IoIosArrowBack } from 'react-icons/io'

const IndividualProduct = ({
  products,
  title,
  columns = 5,
  itemsPerPage = 10,
}) => {
  const { t } = useTranslation()
  const [currentPage, setCurrentPage] = useState(0)
  const [query, setQuery] = useState('')

  const fuse = new Fuse(products, {
    keys: ['nombre', 'precio'], // API field names
    includeScore: true,
  })

  // Handle page change
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected)
  }

  // Handle search input
  const handleOnSearch = ({ currentTarget = {} }) => {
    const { value } = currentTarget
    setQuery(value)
  }

  // Calculate which items to display
  const results = fuse.search(query)
  const matchResults = query ? results.map((result) => result.item) : products
  // Sort products by exposure value
  const sortedProducts = matchResults.sort(
    (a, b) => b.exposicion - a.exposicion
  )

  const offset = currentPage * itemsPerPage
  const currentItems = sortedProducts.slice(offset, offset + itemsPerPage)

  return (
    <div className="bg-slate-100 pb-8 overflow-y-visible">
      <ComparisonBar />
      <div>
        <h1 className="font-bold text-3xl bg-secondary w-full h-20 mb-10 shadow-xl flex items-center justify-center">
          {title}
        </h1>
      </div>
      {/* Search functionality integrated with Fuse (fuzzy search) */}
      <div className="flex flex-col sm:flex-row items-end justify-center mb-10">
        <div className="w-full sm:w-40 bg-secondary flex items-center justify-center rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none h-10 border-black/50 border font-bold shadow-xl">
          <h2>{t('products.search')}</h2>
        </div>
        <Input
          id={'busqueda'}
          className={
            'bg-white mt-2 sm:mt-0 w-full sm:w-[900px] shadow-xl rounded-b-xl sm:rounded-r-xl sm:rounded-bl-none'
          }
          inputClassName={
            'border px-2 rounded-b-xl sm:rounded-r-xl sm:rounded-bl-none'
          }
          label=""
          value={query}
          onChange={handleOnSearch}
        />
      </div>
      {/* Display all products passed as parameter */}
      <div className="px-4 sm:px-9 mb-10">
        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: `repeat(auto-fill, minmax(250px, 1fr))`,
          }}
        >
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
        {/* Create custom pagination */}
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
