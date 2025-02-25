import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useQuery, useQueryClient } from 'react-query'
import { useParams } from 'react-router-dom'

import {
  getPurchasesByBuyerId,
  confirmShipment,
  cancelPurchase,
} from '../services/purchaseService'
import { clearLoading, setLoading } from '../store/slices/loadingSlice'

import colombianPrice from '../utils/colombianPrice'
import { setNotification } from '../store/slices/notificationSlice'

const Purchases = () => {
  // Obtener id de la url
  const { idComprador } = useParams()
  const queryClient = useQueryClient()
  const dispatch = useDispatch()
  const {
    data: purchases,
    isLoading,
    isError,
    error,
  } = useQuery('purchases', () => getPurchasesByBuyerId(idComprador))
  console.log('purchases', purchases)
  const handleConfirm = async (idCarrito) => {
    try {
      const response = await confirmShipment(idCarrito)
      if (response.success) {
        dispatch(
          setNotification({
            title: 'Compra confirmada',
            text: 'Gracias por tu tiempo, disfruta tu producto :)',
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
          title: 'Error al confirmar la compra',
          text: 'Porfavor, intentalo más tarde',
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
            title: 'Compra cancelada',
            text: 'En breve te contactaremos sobre tu reclamo',
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
          title: 'Error al cancelar la compra',
          text: 'Porfavor, intentalo más tarde',
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
      <h1 className="text-2xl font-bold mb-4">Mis compras</h1>
      <div className="space-y-4">
        {purchases.map((purchase, index) => (
          <div key={index} className="p-4 border rounded shadow">
            <h2 className="text-xl font-semibold">{purchase.nombreModelo}</h2>
            <h3 className="text-xl">{colombianPrice(purchase.precio)}</h3>
            <h3 className="text-xl">{purchase.estado}</h3>
            <div className="mt-2 space-x-2">
              {purchase.estado != 'enviado' && purchase.estado != 'fallido' && (
                <>
                  <button
                    className="px-4 py-2 bg-green-500 text-white rounded"
                    onClick={() => handleConfirm(purchase.idCarrito)}
                  >
                    Recibí el producto
                  </button>
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded"
                    onClick={() => handleCancel(purchase.idCarrito)}
                  >
                    Quiero un reembolso
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Purchases
