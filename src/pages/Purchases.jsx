import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useQuery, useQueryClient } from 'react-query'
import { useParams } from 'react-router-dom'

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

  const getPurchaseText = (estado) => {
    switch (estado) {
      case 'pendiente_pago':
        return {
          stateText: 'Pago Pendiente',
          color: 'yellow',
          icon: <Payment />,
        }
      case 'pendiente_envio':
        return {
          stateText: 'Envío Pendiente',
          color: 'blue',
          icon: <Inventory />,
        }
      case 'enviado':
        return {
          stateText: 'Enviado',
          color: 'green',
          icon: <LocalShippingRounded />,
        }
      case 'recibido':
        return {
          stateText: 'Recibido',
          color: 'green',
          icon: <CheckCircle />,
        }
      case 'fallido':
        return {
          stateText: 'Fallido',
          color: 'red',
          icon: <Cancel />,
        }
      case 'reembolsado':
        return {
          stateText: 'Reembolsado',
          color: 'red',
          icon: <Undo />,
        }
      default:
        return {
          stateText: 'Desconocido',
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
      <h1 className="text-3xl font-bold mb-6 text-center">Mis compras</h1>
      <div className="space-y-6">
        {purchases.map((purchase, index) => {
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
                <p className="text-lg mb-1">
                  Precio: {colombianPrice(purchase.precioCarrito)}
                </p>
                <p className="text-lg mb-1">
                  Fecha: {new Date(purchase.fecha).toLocaleDateString()}
                </p>
                <p className="text-lg mb-1">
                  Método de pago: {purchase.metodoPago}
                </p>
                <p className="text-lg mb-1">
                  Dirección de envío: {purchase.direccionEnvio}
                </p>
                <div className="mt-4 space-x-2">
                  {purchase.estadoCarrito !== 'recibido' &&
                    purchase.estadoCarrito !== 'fallido' &&
                    purchase.estadoCarrito !== 'reembolsado' && (
                      <>
                        <button
                          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition font-semibold"
                          onClick={() => handleConfirm(purchase.idCarrito)}
                        >
                          Recibí el producto
                        </button>
                        <button
                          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition font-semibold"
                          onClick={() => handleCancel(purchase.idCarrito)}
                        >
                          Quiero un reembolso
                        </button>
                      </>
                    )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Purchases
