// src/components/ProductForm.js
import React, { useState } from 'react'
import BycicleForm from './BycicleForm'
import SparePartForm from './SparePartForm'
import GeneralInfo from './GeneraInfo'
import AvailabilityForm from './AvailabilityForm'
import Button from '../Button'

const ProductForm = ({ type, onSubmit }) => {
  console.log(type)
  const [step, setStep] = useState(1)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [product, setProduct] = useState({
    type: type,
    title: '',
    description: '',
    price: '',
    images: [],
    brand: '',
    model: '',
    availability: '',
    retire: false,
    sendPrice: '',
    state: '',
  });

  const [bycicle, setBycicle] = useState({
    tipo: '',
    color: '',
    genero: '',
    edad: '',
    tamanoMarco: '',
    materialMarco: '',
    modeloMarco: '',
    modeloRuedas: '',
    tamanoRuedas: '',
    tipoFrenos: '',
    modeloFrenos: '',
    tipoManubrio: '',
    modeloManubrio: '',
    tipoSuspension: '',
    velocidades: '',
    transmision: '',
    tipoPedales: '',
    modeloPedales: '',
    modeloCassette: '',
    modeloSillin: '',
    modeloCadena: '',
    extras: '',
  })

  const [componentData, setComponentData] = useState({
    compatibilidad: '',
    modelo:'',
    categoria: '',
    marca: '',
  })
  
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault()
    if (type === 'bicicleta') {
      onSubmit(product, bycicle)
    }
    else if (type === 'repuesto') {
      onSubmit(product, componentData)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setProduct({ ...product, images: files });

    const previews = files.map(file => URL.createObjectURL(file));
    setImagePreviews(previews);
  };

  const handleComponentChange = (e) => {
    const { name, value } = e.target
    setComponentData({ ...formData, [name]: value })
  }

  const handleBycicleChange = (event) => {
    const { id, value } = event.target
    setBycicle({ ...bycicle, [id]: value })
  }

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full max-w-4xl p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Publicar {type}</h1>
        <div className="w-full m-15 px-20 ">
          <form onSubmit={handleSubmit} className="w-full space-y-5 p-4">
            
            {step === 1 && (
              <GeneralInfo 
                product={product}
                handleChange={handleChange}
                handleImageChange={handleImageChange}
                imagePreviews={imagePreviews}/>
            )}
            
            {step === 2 && (
              <>
              {type === 'bicicleta' && 
                <BycicleForm 
                  bycicle={bycicle}
                  handleChange={handleBycicleChange}/>}
              {type === 'repuesto' && 
                <SparePartForm 
                  componentData={componentData}
                  handleChange={handleComponentChange}/>}
              </>
            )}
            
            {step === 3 && (
              <AvailabilityForm 
                product={product}
                handleChange={handleChange}/>
            )}
            {/* {type === 'bicicleta' && <BycicleForm onSubmit={onSubmit} />}
            {type === 'repuesto' && <SparePartForm onSubmit={onSubmit} />} */}
          </form>
          {step > 1 && (
            <Button
              type="button"
              onClick={handlePrevious}
              className='justify-center'
            >
              Anterior
            </Button>
          )}

          {step < 3 ? (
            <Button
              type="button"
              onClick={handleNext}
              className='justify-center'
            >
              Siguiente
            </Button>
          ): (
            <Button
              type="submit"
              onClick={handleSubmit}
              className='justify-center'
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
