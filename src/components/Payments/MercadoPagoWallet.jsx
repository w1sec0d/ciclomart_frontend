import { useEffect } from 'react'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'

const MercadoPagoWallet = ({ preferenceId }) => {
  useEffect(() => {
    initMercadoPago(import.meta.env.VITE_MP_PUBLIC_KEY, { locale: 'es-CO' })
  }, [])

  return (
    <div>
      <Wallet initialization={{ preferenceId: preferenceId }} />
    </div>
  )
}

export default MercadoPagoWallet
