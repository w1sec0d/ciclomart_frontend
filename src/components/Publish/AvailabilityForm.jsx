import Input from '../Input'
import Textarea from '../Textarea'
import CustomSelect from './Select'
import Select from './Select'

const AvailabilityForm = ({ product, handleChange }) => {
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
          onChange={handleChange}
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
          onChange={handleChange}
        />

        <CustomSelect
          name="estado"
          label="Condición"
          options={{
            options: [
              { label: 'Nuevo', value: 'nuevo' },
              { label: 'Usado', value: 'usado' },
              // {label:'Reacondicionado',value:'reacondicionado'}]
            ],
          }}
          value={product.estado}
          onChange={handleChange}
        />
      </div>
      <Input
        type="number"
        id="costoEnvio"
        label="Precio de envio"
        value={product.costoEnvio}
        onChange={handleChange}
      />
    </>
  )
}

export default AvailabilityForm
