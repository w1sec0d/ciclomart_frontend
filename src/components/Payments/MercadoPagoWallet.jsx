import { useEffect } from 'react'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'

const MercadoPagoWallet = () => {
  useEffect(() => {
    initMercadoPago('YOUR_PUBLIC_KEY', { locale: 'es-CO' })
  }, [])

  return (
    <div>
      <Wallet initialization={{ preferenceId: '<PREFERENCE_ID>' }} />
    </div>
  )
}

export default MercadoPagoWallet
