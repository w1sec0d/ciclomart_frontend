// Offers page
import IndividualProduct from '../components/IndividualProduct'

// Utilities
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useQuery } from 'react-query'
import { useTranslation } from 'react-i18next'
import { setLoading, clearLoading } from '../store/slices/loadingSlice'

// Services
import { getOffers } from '../services/productService'

const OffersPage = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  // Fetch offers
  const { data: offers, isError, isLoading } = useQuery(['offers'], getOffers)

  useEffect(() => {
    if (isLoading) {
      dispatch(setLoading())
    } else {
      dispatch(clearLoading())
    }
  }, [isLoading, dispatch])

  if (isLoading) return null
  if (isError) return <p>Error: {isError.message}</p>

  return (
    <IndividualProduct
      products={offers}
      title={t('products.offersPageTitle')}
    />
  )
}

export default OffersPage
