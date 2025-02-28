import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from '../Button'	

const Verification = ({ onVerify }) => {
  const [document, setDocument] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    onVerify(document)
  }

  const handleImageChange = (e) => {
    e.preventDefault()
    setDocument(e.target.files[0])
  }

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gradient-to-t from-primary/95 to-zinc-100 from-50% to-50%">
      <div
        className=" flex flex-col items-center justify-center w-full max-w-4xl pb-6 bg-zinc-100
        rounded-lg mt-4 mb-8 shadow-lg shadow-black/35"
      >
        <div className="w-full h-14 bg-primary rounded-t-lg flex items-center justify-center drop-shadow-lg">
          <h1 className="text-2xl font-bold my-4">
            Verificar propiedad de la bicicleta
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="max-w-500 my-4">
          <div className="mb-4 w-full">
            <label className="block mb-1">
              Por favor sube aquí la tarjeta de propiedad de la bicicleta
            </label>
            <input
            type="file"
            id="imagenes"
            onChange={handleImageChange}
            multiple
            className="mt-4 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <Button
            type="submit"
            className="w-full"
          >
            Enviar
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Verification
