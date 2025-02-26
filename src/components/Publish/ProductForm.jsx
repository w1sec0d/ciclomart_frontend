import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import BycicleForm from './BycicleForm'
import SparePartForm from './SparePartForm'
import GeneralInfo from './GeneraInfo'
import AvailabilityForm from './AvailabilityForm'
import Button from '../Button'

const ProductForm = ({ type, onSubmit, models, brands }) => {
  const [step, setStep] = useState(1)
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      nombre: '',
      tipo: type,
      descripcion: '',
      precio: '',
      imagenes: [],
      idMarca: '',
      modelo: '',
      disponibilidad: '',
      retiro: false,
      costoEnvio: '',
      estado: '',
      tipoBicicleta: '',
      color: '',
      genero: '',
      edad: '',
      tamañoMarco: '',
      materialMarco: '',
      modeloMarco: '',
      modeloRuedas: '',
      tamañoRueda: '',
      tipoFrenos: '',
      modeloFrenos: '',
      tipoManubrio: '',
      modeloManubrio: '',
      tipoSuspension: '',
      velocidades: '',
      transmision: '',
      tipoPedales: '',
      pesoBicicleta: '',
      pesoMaximo: '',
      modeloPedales: '',
      modeloCassette: '',
      modeloSillin: '',
      modeloCadena: '',
      extras: '',
      compatibilidad: '',
      categoria: '',
      marca: '',
    },
  })

  const product = watch()

  const onFormSubmit = (data) => {
    if (type === 'bicicleta') {
      onSubmit(data, {
        tipoBicicleta: data.tipoBicicleta,
        color: data.color,
        genero: data.genero,
        edad: data.edad,
        tamañoMarco: data.tamañoMarco,
        materialMarco: data.materialMarco,
        modeloMarco: data.modeloMarco,
        modeloRuedas: data.modeloRuedas,
        tamañoRueda: data.tamañoRueda,
        tipoFrenos: data.tipoFrenos,
        modeloFrenos: data.modeloFrenos,
        tipoManubrio: data.tipoManubrio,
        modeloManubrio: data.modeloManubrio,
        tipoSuspension: data.tipoSuspension,
        velocidades: data.velocidades,
        transmision: data.transmision,
        tipoPedales: data.tipoPedales,
        pesoBicicleta: data.pesoBicicleta,
        pesoMaximo: data.pesoMaximo,
        modeloPedales: data.modeloPedales,
        modeloCassette: data.modeloCassette,
        modeloSillin: data.modeloSillin,
        modeloCadena: data.modeloCadena,
        extras: data.extras,
      })
    } else if (type === 'componente') {
      onSubmit(data, {
        compatibilidad: data.compatibilidad,
        modelo: data.modelo,
        categoria: data.categoria,
        marca: data.marca,
      })
    }
  }

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files)
    setValue('imagenes', files)

    const previews = files.map((file) => URL.createObjectURL(file))
    setValue('imagePreviews', previews)
  }

  const handleBrandChange = (e) => {
    setValue('marca', e.target.value)
    setValue('idMarca', e.target.id)
  }

  const handleNext = () => {
    setStep(step + 1)
  }

  const handlePrevious = () => {
    setStep(step - 1)
  }

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full max-w-4xl p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Publicar {type}</h1>
        <div className="w-full m-15 px-20 ">
          <form
            onSubmit={handleSubmit(onFormSubmit)}
            className="w-full space-y-5 p-4"
          >
            {step === 1 && (
              <GeneralInfo
                product={product}
                register={register}
                handleImageChange={handleImageChange}
                brands={brands}
                handleBrandChange={handleBrandChange}
              />
            )}

            {step === 2 && (
              <>
                {type === 'bicicleta' && (
                  <BycicleForm bycicle={product} register={register} />
                )}
                {type === 'componente' && (
                  <SparePartForm componentData={product} register={register} />
                )}
              </>
            )}

            {step === 3 && (
              <AvailabilityForm product={product} register={register} />
            )}
          </form>
          {step > 1 && (
            <Button
              type="button"
              onClick={handlePrevious}
              className="justify-center"
            >
              Anterior
            </Button>
          )}

          {step < 3 ? (
            <Button
              type="button"
              onClick={handleNext}
              className="justify-center"
            >
              Siguiente
            </Button>
          ) : (
            <Button
              type="submit"
              onClick={handleSubmit(onFormSubmit)}
              className="justify-center"
            >
              Publicar
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductForm
