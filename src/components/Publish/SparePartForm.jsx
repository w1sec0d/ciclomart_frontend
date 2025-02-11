import { useState } from 'react'
import filters from '../../utils/newFilters'
import Input from '../Input'
import CustomSelect from './Select'
import TextArea from '../TextArea'

const SparePartForm = ({ onSubmit, componentData, handleChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      onSubmit(formData)
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <CustomSelect
          name="compatibility"
          label="Compatibilidad"
          options={filters['componente'].compatibilidad}
          value={componentData.compatibilidad}
          onChange={handleChange}
        />
        <CustomSelect
          name="category"
          label="Categoria"
          options={filters['componente'].categoria}
          value={componentData.categoria}
          onChange={handleChange}
        />
        <Input
          type="number"
          id="marca"
          label="Marca"
          value={componentData.marca}
          onChange={handleChange}
        />
        <Input
          id="modelo"
          label="Modelo"
          value={componentData.modelo}
          onChange={handleChange}
        />
      </div>
    </>
  )
}

export default SparePartForm
