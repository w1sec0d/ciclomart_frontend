// Main landing page showing the most sold products, the offers, the bicycles and the spare parts

// React
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

// Carousel
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { landingCarousel, itemContainer } from './carouselSettings'

// Assets importing
import landing1 from '../../assets/landing1.webp'
import bike2 from '../../assets/bike2.webp'
import offer from '../../assets/offer.png'
import repuestos from '../../assets/repuestos.webp'
import {
  LocalFireDepartment,
  PedalBike,
  SettingsSuggest,
} from '@mui/icons-material'

// Components
import ItemContainer from '../../components/ItemContainer'
import ComparisonBar from '../../components/Comparison/ComparisonBar'

// React Query
import { useQuery } from 'react-query'

// Services
import { getProducts } from '../../services/productService'
import { useDispatch } from 'react-redux'
import { clearLoading, setLoading } from '../../store/slices/loadingSlice'
import { useTranslation } from 'react-i18next'

const LandingPage = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  // Load products with react-query
  const { data: products, isLoading, error } = useQuery('products', getProducts)

  useEffect(() => {
    if (isLoading) {
      dispatch(setLoading())
    } else {
      dispatch(clearLoading())
    }
  }, [isLoading, dispatch])

  if (isLoading) return null
  if (error) return <p>Error: {error.message}</p>

  return (
    <section>
      <Carousel responsive={landingCarousel} className="hover:cursor-pointer">
        <Link to="/offers">
          <div className="flex items-center justify-center w-full relative bg-[#ebf9f6]">
            <img
              src={landing1}
              alt="Imagen de una bicicleta deportiva blanca con el mensaje: Encuentra tu nueva bici con los componentes que necesitas (has click aqui)"
              className="max-h-[80vh] object-contain"
              style={{ boxShadow: '0 0 8px 8px #ebf9f6 inset' }}
            />
          </div>
        </Link>
      </Carousel>
      <div className="bg-white shadow-sm">
        <ComparisonBar />
      </div>
      <section>
        <h2 className="text-2xl md:text-3xl text-center font-bold my-6 md:my-10 flex items-center justify-center gap-2">
          <LocalFireDepartment fontSize="large" className="text-orange-500" />{' '}
          {t('products.mostSoldBefore')}
          <span className="text-orange-600">
            {t('products.mostSoldHighlight')}
          </span>
        </h2>
        <Carousel
          responsive={itemContainer}
          className="pl-4 md:pl-7 pb-6 md:pb-10"
        >
          {products.map((product) => {
            return (
              <ItemContainer
                {...product}
                key={product.idProducto}
                envioGratis={product['método de envio'] === 'gratis'}
              />
            )
          })}
        </Carousel>
      </section>
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <h2 className="text-2xl md:text-3xl text-center font-bold my-6 md:my-10 flex items-center justify-center gap-2">
          <PedalBike fontSize="large" className="text-blue-600" />{' '}
          {t('products.exploreYourBikeWorldBefore')}
          <span className="text-blue-600">
            {t('products.exploreYourBikeWorldHighlight')}
          </span>
        </h2>
        <section className="flex flex-col md:flex-row justify-between max-w-full md:max-w-[900px] mx-auto px-4">
          <Link
            to="/offers"
            className="p-6 shadow-lg bg-gradient-to-br from-white to-orange-50 rounded-xl group mb-4 md:mb-0 mx-2 my-2 lg:mx-0 lg:my-0 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-orange-100"
          >
            <div className="bg-orange-100 rounded-lg p-4 mb-3 group-hover:bg-orange-200 transition-colors">
              <img src={offer} className="w-full h-[180px] object-contain" />
            </div>
            <h3 className="font-bold text-center text-lg md:text-xl group-hover:text-orange-600 transition-colors">
              {t('products.offers')}
            </h3>
          </Link>
          <Link
            to="search/bycicle"
            className="p-6 shadow-lg bg-gradient-to-br from-white to-blue-50 rounded-xl group mb-4 md:mb-0 mx-2 my-2 lg:mx-0 lg:my-0 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-blue-100"
          >
            <div className="bg-blue-100 rounded-lg p-4 mb-3 group-hover:bg-blue-200 transition-colors">
              <img src={bike2} className="w-full h-[180px] object-contain" />
            </div>
            <h3 className="font-bold text-center text-lg md:text-xl group-hover:text-blue-600 transition-colors">
              {t('products.bicycles')}
            </h3>
          </Link>
          <Link
            to="/search/component"
            className="p-6 shadow-lg bg-gradient-to-br from-white to-green-50 rounded-xl group mx-2 my-2 lg:mx-0 lg:my-0 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-green-100"
          >
            <div className="bg-green-100 rounded-lg p-4 mb-3 group-hover:bg-green-200 transition-colors">
              <img
                src={repuestos}
                className="w-full h-[180px] object-contain"
              />
            </div>
            <h3 className="font-bold text-center text-lg md:text-xl group-hover:text-green-600 transition-colors">
              {t('products.spareParts')}
            </h3>
          </Link>
        </section>
      </div>
      <div className="bg-gradient-to-b from-gray-50 to-white py-12">
        <h2 className="text-2xl md:text-3xl text-center font-bold my-6 md:my-10 mx-4 lg:mx-0 flex items-center justify-center gap-2">
          <SettingsSuggest fontSize="large" className="text-purple-600" />{' '}
          {t('products.findThatSparePart')}{' '}
          <span className="italic text-purple-700">
            {t('products.thatSparePartYouNeed')}
          </span>{' '}
          {t('products.youNeed')}
        </h2>
        <Carousel
          responsive={itemContainer}
          className="pl-4 md:pl-7 pb-6 md:pb-10"
        >
          {products.map((product) => {
            if (product.tipo !== 'componente') return null
            return (
              <ItemContainer
                {...product}
                key={product.idProducto}
                envioGratis={product['método de envio'] === 'gratis'}
              />
            )
          })}
        </Carousel>
      </div>
    </section>
  )
}

export default LandingPage
