import { Wallet } from '@mercadopago/sdk-react'

const MercadoPagoWallet = ({ preferenceId }) => {
  return (
    <div>
      <Wallet initialization={{ preferenceId: preferenceId }} />
    </div>
  )
}

export default MercadoPagoWallet
