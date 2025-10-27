// Components
import ExposurePrice from './ExposurePrice'
import Button from '../Button'

// Utilities
import { Link, useLocation, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import mercadoPago from '../../services/mercadoPago'
import { useSelector, useDispatch } from 'react-redux'
import { setLoading, clearLoading } from '../../store/slices/loadingSlice'
import { setNotification } from '../../store/slices/notificationSlice'
import { getProductById } from '../../services/productService'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const ExpositionPage = () => {
  const { t } = useTranslation()
  const { ProductId } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const queryParams = new URLSearchParams(location.search)
  const failure = queryParams.get('failure')

  const {
    data: producto,
    isLoading,
    isError,
  } = useQuery(['productos', ProductId], () => getProductById(ProductId))

  const dispatch = useDispatch()
  const [selected, setSelected] = useState()
  const exposure = useSelector((state) => state.exposure)
  const authUser = useSelector((state) => state.auth.authUser)

  const handleBuy = async () => {
    dispatch(setLoading())
    if (!authUser) {
      dispatch(
        setNotification({
          title: t('exposure.mustLoginToBuy'),
          icon: 'error',
        })
      )
      dispatch(clearLoading())
      return
    }
    const { paymentURL } = await mercadoPago.sendBuyExposureRequest(
      exposure,
      ProductId
    )
    window.location.href = paymentURL
    setTimeout(() => {
      dispatch(clearLoading())
    }, 5000)
  }

  const handleContinue = () => {
    if (exposure.grade != 0) {
      handleBuy()
    } else {
      navigate('/requestResult/publishSuccess')
    }
  }

  useEffect(() => {
    if (isLoading) {
      dispatch(setLoading())
    } else if (failure && !isLoading) {
      dispatch(
        setNotification({
          title: t('exposure.purchaseError'),
          icon: 'error',
        })
      )
      dispatch(clearLoading())
    } else {
      dispatch(clearLoading())
    }
  }, [isLoading, dispatch, failure, t])

  if (isLoading) return null
  if (isError) return <p>Error: {isError.message}</p>

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gradient-to-t from-primary/95 to-zinc-100 from-50% to-50% mt-[64px]">
      <div
        className=" flex flex-col items-center justify-center w-full max-w-4xl pb-6 bg-zinc-100
        rounded-lg mt-4 mb-8 shadow-lg shadow-black/35"
      >
        <div className="w-full h-14 bg-primary rounded-t-lg flex items-center justify-center drop-shadow-lg">
          <h1 className="text-2xl font-bold ">
            {t('exposure.selectYourExposureLevel')}
          </h1>
        </div>
        <div className="w-full m-15 px-20 ">
          <div className="mb-6">
            <p className="mb-6 mx-[-40px] text-center mt-4">
              {t('exposure.exposureDescription')}{' '}
              <Link
                className="inline-block text-primary font-bold"
                to={'/ExposureInfo'}
                target="_blank"
              >
                {t('exposure.clickForMoreInfo')}
              </Link>
            </p>

            <div className="grid grid-cols-2 gap-4 ">
              <ExposurePrice
                grade={1}
                price={producto.precio}
                setSelected={setSelected}
                selected={selected}
              />
              <ExposurePrice
                grade={2}
                price={producto.precio}
                setSelected={setSelected}
                selected={selected}
              />
              <ExposurePrice
                grade={3}
                price={producto.precio}
                setSelected={setSelected}
                selected={selected}
              />
              <ExposurePrice
                grade={4}
                price={producto.precio}
                setSelected={setSelected}
                selected={selected}
              />
            </div>

            <Button
              className="w-full mt-4 hover:bg-primary/90"
              onClick={handleContinue}
            >
              {t('exposure.continue')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpositionPage
