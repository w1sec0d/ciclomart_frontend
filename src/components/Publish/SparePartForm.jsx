import { useState } from 'react'
import filters from '../../utils/filters'
import Input from '../Input'
import Button from '../Button'
import Select from './Select'

const SparePartForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    brand: '',
    partType: '',
    compatibility: '',
    material: '',
    condition: '',
    availability: '',
    shippingMethod: '',
    sellerLocation: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      onSubmit(formData)
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full p-6 shadow-lg bg-white rounded-lg"
    >
      <Input
        id="title"
        label="Título"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <label className="block text-sm font-medium mb-1">Descripcion</label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        className="flex-1 w-full px-3 py-2 border rounded-lg"
        required
      />
      <Input
        id="price"
        label="Precio"
        name="price"
        type="number"
        value={formData.price}
        onChange={handleChange}
        required
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10">
        <Select
          name="brand"
          label="Marca"
          options={filters.repuesto[1].options}
          value={formData.brand}
          onChange={handleChange}
          required
        />
        <Select
          name="partType"
          label="Categoria"
          options={filters.repuesto[0].options}
          value={formData.partType}
          onChange={handleChange}
          required
        />
        <Select
          name="compatibility"
          label="Compatibilidad"
          options={filters.repuesto[2].options}
          value={formData.compatibility}
          onChange={handleChange}
          required
        />
        <Select
          name="material"
          label="Material"
          options={filters.repuesto[3].options}
          value={formData.material}
          onChange={handleChange}
          required
        />
        <Select
          name="availability"
          label="Disponibilidad"
          options={filters.repuesto[4].options}
          value={formData.availability}
          onChange={handleChange}
          required
        />
        <Select
          name="shippingMethod"
          label="Método de envío"
          options={filters.repuesto[5].options}
          value={formData.shippingMethod}
          onChange={handleChange}
          required
        />
        <Select
          name="sellerLocation"
          label="Ubicación del vendedor"
          options={filters.repuesto[6].options}
          value={formData.sellerLocation}
          onChange={handleChange}
          required
        />
      </div>
      <Button type="submit" className="mt-4 w-full">
        Publicar
      </Button>
    </form>
  )
}

export default SparePartForm
