import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useQuery, useQueryClient } from 'react-query'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import {
  Cancel,
  CheckCircle,
  Help,
  Inventory,
  LocalShippingRounded,
  Payment,
  Undo,
} from '@mui/icons-material'

import {
  getPurchasesByBuyerId,
  confirmShipment,
  cancelPurchase,
} from '../services/purchaseService'
import { clearLoading, setLoading } from '../store/slices/loadingSlice'

import colombianPrice from '../utils/colombianPrice'
import { setNotification } from '../store/slices/notificationSlice'

const Purchases = () => {
  const { t } = useTranslation()
  // Get buyer ID from URL
  const { BuyerId } = useParams()
  const queryClient = useQueryClient()
  const dispatch = useDispatch()
  const {
    data: purchases,
    isLoading,
    isError,
    error,
  } = useQuery('purchases', () => getPurchasesByBuyerId(BuyerId))

  const getPurchaseText = (estado) => {
    switch (estado) {
      case 'pendiente_pago':
        return {
          stateText: t('purchases.pendingPayment'),
          color: 'yellow',
          icon: <Payment />,
        }
      case 'pendiente_envio':
        return {
          stateText: t('purchases.pendingShipment'),
          color: 'blue',
          icon: <Inventory />,
        }
      case 'enviado':
        return {
          stateText: t('purchases.shipped'),
          color: 'green',
          icon: <LocalShippingRounded />,
        }
      case 'recibido':
        return {
          stateText: t('purchases.received'),
          color: 'green',
          icon: <CheckCircle />,
        }
      case 'fallido':
        return {
          stateText: t('purchases.failed'),
          color: 'red',
          icon: <Cancel />,
        }
      case 'reembolsado':
        return {
          stateText: t('purchases.refunded'),
          color: 'red',
          icon: <Undo />,
        }
      default:
        return {
          stateText: t('purchases.unknown'),
          color: 'gray',
          icon: <Help />,
        }
    }
  }

  const handleConfirm = async (idCarrito) => {
    try {
      const response = await confirmShipment(idCarrito)
      if (response.success) {
        dispatch(
          setNotification({
            title: t('purchases.purchaseConfirmed'),
            text: t('purchases.thankYouMessage'),
            icon: 'success',
          })
        )
        // invalidate query
        queryClient.invalidateQueries('purchases')
      }
    } catch (error) {
      console.error(error)
      dispatch(
        setNotification({
          title: t('purchases.errorConfirming'),
          text: t('purchases.pleaseTryAgainLater'),
          icon: 'error',
        })
      )
    }
  }

  const handleCancel = async (idCarrito) => {
    try {
      const response = await cancelPurchase(idCarrito)
      if (response.success) {
        dispatch(
          setNotification({
            title: t('purchases.purchaseCanceled'),
            text: t('purchases.claimMessage'),
            icon: 'success',
          })
        )
        // invalidate query
        queryClient.invalidateQueries('purchases')
      }
    } catch (error) {
      console.error(error)
      dispatch(
        setNotification({
          title: t('purchases.errorCanceling'),
          text: t('purchases.pleaseTryAgainLater'),
          icon: 'error',
        })
      )
    }
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

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        {t('purchases.myPurchases')}
      </h1>
      <div className="space-y-6">
        {purchases.length === 0 ? (
          <p className="text-center text-lg h-screen-minus-navbar">
            {t('purchases.noPurchases')}
          </p>
        ) : (
          purchases.map((purchase, index) => {
            const { stateText, color, icon } = getPurchaseText(
              purchase.estadoCarrito
            )
            return (
              <div
                key={index}
                className="p-6 border rounded-lg shadow-lg flex flex-col md:flex-row items-center"
              >
                <img
                  src={purchase.imagenModelo}
                  alt={purchase.nombreModelo}
                  className="w-32 h-32 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
                />
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-2">
                    {purchase.nombreModelo}
                    <span
                      className={`text-lg mb-1 px-2 py-1 rounded bg-${color}-500 ml-4`}
                    >
                      {icon}
                      <span className="ml-2">{stateText}</span>
                    </span>
                  </h2>
                  <p className="text-lg mb-1 font-bold">
                    {t('purchases.price')}{' '}
                    <span className="font-normal">
                      {colombianPrice(purchase.precioCarrito)}
                    </span>
                  </p>
                  <p className="text-lg mb-1 font-bold">
                    {t('purchases.date')}{' '}
                    <span className="font-normal">
                      {new Date(purchase.fecha).toLocaleDateString()}
                    </span>
                  </p>
                  <p className="text-lg mb-1 font-bold">
                    {t('purchases.paymentMethod')}{' '}
                    <span className="font-normal">{purchase.metodoPago}</span>
                  </p>
                  <p className="text-lg mb-1 font-bold">
                    {t('purchases.shippingAddress')}{' '}
                    <span className="font-normal">
                      {purchase.direccionEnvio}
                    </span>
                  </p>
                  <div className="mt-4 space-y-2 md:space-y-0 md:space-x-2">
                    {purchase.estadoCarrito !== 'recibido' &&
                      purchase.estadoCarrito !== 'fallido' &&
                      purchase.estadoCarrito !== 'reembolsado' && (
                        <>
                          <button
                            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition font-semibold mx-3"
                            onClick={() => handleConfirm(purchase.idCarrito)}
                          >
                            {t('purchases.confirmReceived')}
                          </button>
                          <button
                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition font-semibold mx-3"
                            onClick={() => handleCancel(purchase.idCarrito)}
                          >
                            {t('purchases.requestRefund')}
                          </button>
                        </>
                      )}
                  </div>
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

export default Purchases
