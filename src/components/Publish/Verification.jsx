import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from '../Button'	

const Verification = ({ onVerify }) => {
  const [verificationCode, setVerificationCode] = useState('')
  const [document, setDocument] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    onVerify()
  }

  const handleImageChange = (e) => {
    e.preventDefault()
    setDocument(e.target.files[0])
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">
        Verificar propiedad de la bicicleta
      </h1>
      <form onSubmit={handleSubmit} className="w-80">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Por favor sube aquí la tarjeta de propiedad de la bicicleta
          </label>
          <input
          type="file"
          id="imagenes"
          onChange={handleImageChange}
          multiple
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
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
  )
}

export default Verification
