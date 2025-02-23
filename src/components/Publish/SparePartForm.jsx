import React from 'react'
import filters from '../../utils/newFilters'
import Input from '../Input'
import CustomSelect from './Select'

const SparePartForm = ({ componentData, register }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <CustomSelect
          name="compatibilidad"
          label="Compatibilidad"
          options={filters['componente'].compatibilidad}
          {...register('compatibilidad')}
        />
        <CustomSelect
          name="categoria"
          label="Categoria"
          options={filters['componente'].categoria}
          {...register('categoria')}
        />
        <Input type="number" id="marca" label="Marca" {...register('marca')} />
        <Input id="modelo" label="Modelo" {...register('modelo')} />
      </div>
    </>
  )
}

export default SparePartForm
