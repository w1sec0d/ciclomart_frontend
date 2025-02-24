import React from 'react'
import filters from '../../utils/newFilters'
import Input from '../Input'
import CustomSelect from './Select'
import TextArea from '../TextArea'

const BycicleForm = ({ bycicle, register }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <CustomSelect
          name="tipoBicicleta"
          label="Tipo"
          options={filters['bicicleta'].tipo}
          {...register('tipoBicicleta')}
        />
        <CustomSelect
          name="color"
          label="Color"
          options={filters['bicicleta'].color}
          {...register('color')}
        />
        <CustomSelect
          name="genero"
          label="Genero"
          options={filters['bicicleta'].genero}
          {...register('genero')}
        />
        <CustomSelect
          name="edad"
          label="Edad"
          options={filters['bicicleta'].edad}
          {...register('edad')}
        />
      </div>

      <h3 className="text-xl mt-8 text-primary justify-self-stretch">
        Detalles del marco
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <Input
          type="number"
          id="tamañoMarco"
          label="Tamaño del marco (cm)"
          {...register('tamañoMarco')}
        />
        <CustomSelect
          name="materialMarco"
          label="Material del marco"
          options={filters['bicicleta'].materialMarco}
          {...register('materialMarco')}
        />
      </div>

      <h3 className="text-xl mt-8 text-primary justify-self-stretch">
        Detalles de las ruedas
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <Input
          type="number"
          id="tamañoRueda"
          label="Tamaño de las ruedas"
          {...register('tamañoRueda')}
        />
      </div>

      <h3 className="text-xl mt-8 text-primary justify-self-stretch">
        Detalles de transmisión
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <CustomSelect
          name="transmision"
          label="Transmisión"
          options={filters['bicicleta'].transmision}
          {...register('transmision')}
        />
        <CustomSelect
          name="tipoPedales"
          label="Pedales"
          options={filters['bicicleta'].pedales}
          {...register('tipoPedales')}
        />
        <Input
          type="number"
          id="velocidades"
          label="Número de velocidades"
          {...register('velocidades')}
        />
      </div>

      <h3 className="text-xl mt-8 text-primary justify-self-stretch">
        Detalles de suspensión
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <CustomSelect
          name="tipoSuspension"
          label="Suspensión"
          options={filters['bicicleta'].suspension}
          {...register('tipoSuspension')}
        />
      </div>

      <h3 className="text-xl mt-8 text-primary justify-self-stretch">
        Detalles de los frenos
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <CustomSelect
          name="tipoFrenos"
          label="Tipo de frenos"
          options={filters['bicicleta'].frenos}
          {...register('tipoFrenos')}
        />
      </div>

      <h3 className="text-xl mt-8 text-primary justify-self-stretch">
        Detalles de peso
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <Input
          type="number"
          id="pesoBicicleta"
          label="Peso de la bicicleta (kg)"
          {...register('pesoBicicleta')}
        />
        <Input
          type="number"
          id="pesoMaximo"
          label="Peso máximo soportado (kg)"
          {...register('pesoMaximo')}
        />
      </div>

      <h3 className="text-xl mt-8 text-primary justify-self-stretch">
        Detalles del manubrio
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <CustomSelect
          name="tipoManubrio"
          label="Tipo de Manubrio"
          options={filters['bicicleta'].manubrio}
          {...register('tipoManubrio')}
        />
      </div>

      <h3 className="text-xl mt-8 text-primary justify-self-stretch">
        Adicionales
      </h3>

      <TextArea id="extras" label="Extras" {...register('extras')} />
    </>
  )
}

export default BycicleForm
