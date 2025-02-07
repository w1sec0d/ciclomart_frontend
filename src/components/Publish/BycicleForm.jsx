import { useState } from 'react'
import filters from '../../utils/filters'
import Input from '../Input'
import Button from '../Button'
import Select from './Select'

const BycicleForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    brand: '',
    bikeType: '',
    frameSize: '',
    frameMaterial: '',
    wheelSize: '',
    brakeType: '',
    speeds: '',
    suspension: '',
    transmission: '',
    weight: '',
    color: '',
    extras: '',
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
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full p-6 shadow-lg bg-white rounded-lg">
      
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
        name='description'
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
          options={filters.bicicleta[1].options}
          value={formData.brand}
          onChange={handleChange}
          required
        />
        <Select
          name="bikeType"
          label="Tipo de bicicleta"
          options={filters.bicicleta[2].options}
          value={formData.bikeType}
          onChange={handleChange}
          required
        />
        <Select
          name="frameSize"
          label="Tamaño del marco"
          options={filters.bicicleta[3].options}
          value={formData.frameSize}
          onChange={handleChange}
          required
        />
        <Select
          name="frameMaterial"
          label="Material del marco"
          options={filters.bicicleta[4].options}
          value={formData.frameMaterial}
          onChange={handleChange}
          required
        />
        <Select
          name="wheelSize"
          label="Tamaño de rueda"
          options={filters.bicicleta[5].options}
          value={formData.wheelSize}
          onChange={handleChange}
          required
        />
        <Select
          name="brakeType"
          label="Tipo de frenos"
          options={filters.bicicleta[6].options}
          value={formData.brakeType}
          onChange={handleChange}
          required
        />
        <Select
          name="speeds"
          label="Velocidades"
          options={filters.bicicleta[7].options}
          value={formData.speeds}
          onChange={handleChange}
          required
        />
        <Select
          name="suspension"
          label="Suspensión"
          options={filters.bicicleta[8].options}
          value={formData.suspension}
          onChange={handleChange}
          required
        />
        <Select
          name="transmission"
          label="Transmisión"
          options={filters.bicicleta[9].options}
          value={formData.transmission}
          onChange={handleChange}
          required
        />
        <Select
          name="weight"
          label="Peso"
          options={filters.bicicleta[10].options}
          value={formData.weight}
          onChange={handleChange}
          required
        />
        <Select
          name="color"
          label="Color"
          options={filters.bicicleta[11].options}
          value={formData.color}
          onChange={handleChange}
          required
        />
        <Select
          name="extras"
          label="Extras"
          options={filters.bicicleta[12].options}
          value={formData.extras}
          onChange={handleChange}
          required
        />
        <Select
          name="condition"
          label="Condición"
          options={filters.bicicleta[13].options}
          value={formData.condition}
          onChange={handleChange}
          required
        />
        <Select
          name="availability"
          label="Disponibilidad"
          options={filters.bicicleta[14].options}
          value={formData.availability}
          onChange={handleChange}
          required
        />
        <Select
          name="shippingMethod"
          label="Método de envío"
          options={filters.bicicleta[15].options}
          value={formData.shippingMethod}
          onChange={handleChange}
          required
        />
        <Select
          name="sellerLocation"
          label="Ubicación del vendedor"
          options={filters.bicicleta[16].options}
          value={formData.sellerLocation}
          onChange={handleChange}
          required
        />
      </div>
      <Button type="submit" className="mt-4 w-full">Publicar</Button>
    </form>
  )
}

export default BycicleForm