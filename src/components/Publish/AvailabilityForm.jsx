import React from 'react'
import Input from '../Input'
import CustomSelect from './Select'

const AvailabilityForm = ({ product, register }) => {
  return (
    <>
      <div className="mt-2 grid grid-cols-2 gap-2">
        <CustomSelect
          name="disponibilidad"
          label="Disponibilidad"
          options={{
            options: [
              { label: 'Disponible', value: 'disponible' },
              { label: 'Vendido', value: 'vendido' },
              { label: 'Reservado', value: 'reservado' },
            ],
          }}
          value={product.disponibilidad}
          {...register('disponibilidad')}
        />

        <CustomSelect
          name="retiro"
          label="Retiro disponible"
          options={{
            options: [
              { label: 'Si', value: true },
              { label: 'No', value: false },
            ],
          }}
          value={product.retiro}
          {...register('retiro')}
        />

        <CustomSelect
          name="estado"
          label="Condición"
          options={{
            options: [
              { label: 'Nuevo', value: 'nuevo' },
              { label: 'Usado', value: 'usado' },
            ],
          }}
          value={product.estado}
          {...register('estado')}
        />
      </div>
      <Input
        type="number"
        id="costoEnvio"
        label="Precio de envio"
        value={product.costoEnvio}
        {...register('costoEnvio')}
      />
    </>
  )
}

export default AvailabilityForm
