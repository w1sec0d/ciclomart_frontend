import React, { useState } from 'react'
import Input from '../Input'
import Button from '../Button'
import Textarea from '../TextArea'
import CustomSelect from './Select'

const GeneralInfo = ({
  product,
  register,
  handleImageChange,
  imagePreviews = [],
  brands,
  handleBrandChange,
  handleAddBrand,
}) => {

  const [otraMarca, setOtraMarca] = useState('')

  const handleInputChange = (event) => {
    setOtraMarca(event.target.value)
  }

  return (
    <>
      <div>
        <Input id="nombre" label="Título" {...register('nombre')} />
      </div>

      <div className="">
        <Textarea
          id="descripcion"
          label="Descripción"
          {...register('descripcion')}
        />
      </div>

      <div>
        <Input
          type="number"
          id="precio"
          label="Precio"
          {...register('precio')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-600 font-medium">
          Imágenes
        </label>
        <input
          type="file"
          id="imagenes"
          onChange={handleImageChange}
          multiple
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
        <div className="mt-2 grid grid-cols-3 gap-2">
          {imagePreviews.map((src, index) => (
            <div
              key={index}
              className="w-32 h-32 border rounded-md overflow-hidden"
            >
              <img
                src={src}
                alt={`preview-${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-2 grid grid-cols-2 gap-2">
        <div>
          <CustomSelect
            name="marca"
            label="Marca"
            options={brands}
            {...register('marca')}
            onChange={handleBrandChange}
          />
        </div>
        <div className='flex flex-row mt-10'>
          <Input
            id="otraMarca"
            label="Otra Marca"
            required = {false}
            value={otraMarca}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
          <Button
            type="button"
            className="mb-4 ml-2"
            onClick={() => handleAddBrand(otraMarca)}>
            +
          </Button>
        </div>
      </div>
    </>
  )
}

export default GeneralInfo
