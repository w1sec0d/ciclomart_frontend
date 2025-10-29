import { useTranslation } from 'react-i18next'
import Input from '../Input'
import CustomSelect from './Select'

const AvailabilityForm = ({ product, register }) => {
  const { t } = useTranslation()

  return (
    <>
      <div className="mt-2 grid grid-cols-2 gap-2">
        <CustomSelect
          name="disponibilidad"
          label={t('publish.availability')}
          options={{
            options: [
              { label: t('publish.available'), value: 'disponible' },
              { label: t('publish.sold'), value: 'vendido' },
              { label: t('publish.reserved'), value: 'reservado' },
            ],
          }}
          value={product.disponibilidad}
          {...register('disponibilidad')}
          required={false}
        />

        <CustomSelect
          name="retiro"
          label={t('publish.pickupAvailable')}
          options={{
            options: [
              { label: t('publish.yes'), value: true },
              { label: t('publish.no'), value: false },
            ],
          }}
          value={product.retiro}
          {...register('retiro')}
          required={false}
        />

        <CustomSelect
          name="estado"
          label={t('publish.condition')}
          options={{
            options: [
              { label: t('publish.new'), value: 'nuevo' },
              { label: t('publish.used'), value: 'usado' },
            ],
          }}
          value={product.estado}
          {...register('estado')}
          required={true}
        />
      </div>

      <div className="mt-2 grid grid-cols-2 gap-2">
        <Input
          type="number"
          id="cantidad"
          label={t('publish.availableQuantity')}
          min="1"
          value={product.cantidad}
          {...register('cantidad')}
        />

        <Input
          type="number"
          id="costoEnvio"
          label={t('publish.shippingPrice')}
          min="0"
          value={product.costoEnvio}
          {...register('costoEnvio')}
          required={false}
        />
      </div>
    </>
  )
}

export default AvailabilityForm
