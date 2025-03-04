import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import BycicleForm from './BycicleForm'
import SparePartForm from './SparePartForm'
import GeneralInfo from './GeneraInfo'
import AvailabilityForm from './AvailabilityForm'

import Button from '../Button'
import ExpositionPage from '../Exposure/ExpositionPage'
import publicationService from '../../services/publicationService'
import { useSelector } from 'react-redux'

const ProductForm = ({ type, onSubmit, models, brands, getBrands }) => {
  const authUser = useSelector((state) => state.auth.authUser)
  const [step, setStep] = useState(1)
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      nombre: '',
      tipo: type,
      exposicion: 0,
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
      tarjeta: '',
      idVendedor: authUser.idUsuario,
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
        tarjeta: '',
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

  const handleAddBrand = async (brand) => {
    await publicationService.addBrand(brand)
    getBrands()
  }

  const handleNext = () => {
    setStep(step + 1)
  }

  const handlePrevious = () => {
    setStep(step - 1)
  }

  return (
    <div className="flex items-center justify-center w-full lg:min-h-screen bg-gradient-to-t from-primary/95 to-zinc-100 from-50% to-50%">
      <div
        className="flex flex-col items-center justify-center w-full max-w-4xl pb-6 bg-zinc-100
        rounded-lg mt-4 mb-8 shadow-lg shadow-black/35"
      >
        <div className="w-full h-14 bg-primary rounded-t-lg flex items-center justify-center drop-shadow-lg">
          <h1 className="text-2xl font-bold">Publicar {type}</h1>
        </div>

        <div className="w-full px-4 md:px-20">
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
                handleAddBrand={handleAddBrand}
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
          <div className="flex justify-between mt-4">
            {step > 1 && (
              <Button
                type="button"
                onClick={handlePrevious}
                className="justify-center mr-2"
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
    </div>
  )
}

export default ProductForm
