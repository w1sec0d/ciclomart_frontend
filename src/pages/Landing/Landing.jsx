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
      <ComparisonBar />
      <h2 className="text-2xl md:text-3xl text-center font-bold my-6 md:my-10">
        <LocalFireDepartment fontSize="large" /> {t('products.mostSold')}
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
      <h2 className="text-2xl md:text-3xl text-center font-bold my-6 md:my-10">
        <PedalBike fontSize="large" /> {t('products.exploreYourBikeWorld')}
      </h2>
      <section className="flex flex-col md:flex-row justify-between max-w-full md:max-w-[800px] mx-auto">
        <Link
          to="/offers"
          className="p-4 shadow-a bg-white rounded-md group mb-4 md:mb-0 mx-5 my-2 lg:mx-0 lg:my-0"
        >
          <img
            src={offer}
            className="w-full md:w-[200px] h-[200px] object-contain"
          />
          <h3 className="font-semibold text-center my-2 text-lg md:text-xl group-hover:text-primary">
            {t('products.offers')}
          </h3>
        </Link>
        <Link
          to="search/bycicle"
          className="p-4 shadow-a bg-white rounded-md group mb-4 md:mb-0 mx-5 my-2 lg:mx-0 lg:my-0"
        >
          <img
            src={bike2}
            className="w-full md:w-[200px] h-[200px] object-contain"
          />
          <h3 className="font-semibold text-center my-2 text-lg md:text-xl group-hover:text-primary">
            {t('products.bicycles')}
          </h3>
        </Link>
        <Link
          to="/search/component"
          className="p-4 shadow-a bg-white rounded-md group mx-5 my-2 lg:mx-0 lg:my-0"
        >
          <img
            src={repuestos}
            className="w-full md:w-[200px] h-[200px] object-contain"
          />
          <h3 className="font-semibold text-center my-2 text-lg md:text-xl group-hover:text-primary">
            {t('products.spareParts')}
          </h3>
        </Link>
      </section>
      <section className="my-6">
        <h2 className="text-2xl md:text-3xl text-center font-bold my-6 md:my-10 mx-4 lg:mx-0">
          <SettingsSuggest fontSize="large" /> {t('products.findThatSparePart')}{' '}
          <span className="italic">{t('products.thatSparePartYouNeed')}</span>{' '}
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
      </section>
    </section>
  )
}

export default LandingPage
