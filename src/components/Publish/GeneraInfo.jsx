import { useState, useEffect } from 'react'
import Button from '../Button'
import Input from '../Input'
import Textarea from '../TextArea'
import CustomSelect from './Select'

// const ModelSelect = ({ models, brand, product, handleChange }) => {

//   return (
//     <CustomSelect
//       name="model"
//       label="Modelo"
//       options={ models.length > 0 ? models : { options:[{value: 'No hay modelos', label: 'No hay modelos'}] } }
//       value={product.model}
//       onChange={handleChange}
//     />
//   )
// }

const GeneralInfo = ({
  product,
  handleChange,
  handleImageChange,
  imagePreviews,
  models,
  brands,
  handleBrandChange,
}) => {
  const [localModels, setLocalModels] = useState([])

  return (
    <>
      <div>
        <Input
          id="nombre"
          label="Título"
          value={product.nombre}
          onChange={handleChange}
        />
      </div>

      <div className="">
        <Textarea
          id="descripcion"
          label="Descripción"
          value={product.descripcion}
          onChange={handleChange}
        />
      </div>

      <div>
        <Input
          type="number"
          id="precio"
          label="Precio"
          value={product.precio}
          onChange={handleChange}
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
            value={product.marca}
            onChange={handleBrandChange}
          />
        </div>
        <div>
          {/* <ModelSelect
                  models={localModels}
                  brand={product.modelo}
                  product={product}
                  handleChange={handleChange}
                /> */}
        </div>
      </div>
    </>
  )
}

export default GeneralInfo
