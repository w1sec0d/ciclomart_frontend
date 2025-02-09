import { useState } from 'react'
import Button from '../Button'
import Input from '../Input';
import Textarea from '../TextArea';

const GeneralInfo = ({ product, handleChange, handleImageChange, imagePreviews}) => {
    
      return (
        <>
          <div>
            <Input
              id="title"
              label="Título"
              value={product.title}
              onChange={handleChange}
            />
          </div>
    
          <div className=''>
            <Textarea
              id="description"
              label="Descripción"
              value={product.description}
              onChange={handleChange}
            />
          </div>
    
          <div>
            <Input
              type="number"
              id="price"
              label="Precio"
              value={product.price}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
    
          <div>
            <label className="block text-sm text-gray-600 font-medium">Imágenes</label>
            <input
              type="file"
              id="images"
              onChange={handleImageChange}
              multiple
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
            <div className="mt-2 grid grid-cols-3 gap-2">
              {imagePreviews.map((src, index) => (
                <div key={index} className="w-32 h-32 border rounded-md overflow-hidden">
                  <img src={src} alt={`preview-${index}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
    
          <div className="mt-2 grid grid-cols-2 gap-2">
            <div>
                <Input
                    type="text"
                    id="brand"
                    label="Marca"
                    value={product.brand}
                    onChange={handleChange}
                />
            </div>
            <div>
                <Input
                    type="text"
                    id="model"
                    label="Modelo"
                    value={product.model}
                    onChange={handleChange}
                />
            </div>
          </div>
        </>
      );
}

export default GeneralInfo