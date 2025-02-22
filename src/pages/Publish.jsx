import React, { useEffect, useState } from 'react'
import ProductForm from '../components/Publish/ProductForm'
import ProductSelection from '../components/Publish/ProductSelection'
import Verification from '../components/Publish/Verification'
import publicationService from '../services/publicationService'
import { get } from 'react-hook-form'

const Publish = () => {
  const [step, setStep] = useState('selection')
  const [productType, setProductType] = useState('')
  const [productData, setProductData] = useState(null)
  const [models, setModels] = useState([])
  const [brands, setBrands] = useState({})

  const handleSelect = async (type) => {
    await getBrand()
    setProductType(type)
    setStep('form')
  }

  // const getModels = async (type, id) => {
  //   await publicationService.getModels(type, id).then((data) => {
  //     console.log('Models:', data)
  //     const modelNames = data.models.map(
  //       model => ({
  //         value: model.nombre,
  //         label: model.nombre}))
  //     setModels({options: modelNames})
  //   }).catch((error) => {
  //     console.log('Error:', error)
  //   })
  // }

  const getBrand = async () => {
    await publicationService
      .getBrands()
      .then((data) => {
        console.log('Brands:', data)
        const brandNames = data.results.map((brand) => ({
          id: brand.idMarca,
          value: brand.nombre,
          label: brand.nombre,
        }))
        setBrands({ options: brandNames })
      })
      .catch((error) => {
        console.log('Error:', error)
      })
  }

  useEffect(() => {
    getBrand()
  }, [])

  const handleFormSubmit = (general, product) => {
    const finalProduct = { ...general, ...product }
    setProductData(finalProduct)
    console.log('Final Product:', finalProduct)
    setStep('complete')
    publicationService
      .publishProduct(finalProduct)
      .then((data) => {
        console.log('Product Data:', data)
      })
      .catch((error) => {
        console.log('Error:', error)
      })
  }

  const handleVerification = (code) => {
    console.log('Verification Code:', code)
    setStep('complete')
  }

  return (
    <div>
      {step === 'selection' && <ProductSelection onSelect={handleSelect} />}
      {step === 'form' && (
        <ProductForm
          type={productType}
          onSubmit={handleFormSubmit}
          models={models}
          brands={brands}
        />
      )}
      {step === 'verification' && (
        <Verification onVerify={handleVerification} />
      )}
      {step === 'complete' && (
        <div className="flex flex-col w-full items-center justify-center h-screen bg-gray-100">
          <h1 className="text-2xl font-bold mb-4">Publicación Completada!</h1>
          <p className="text-gray-700">
            Tu {productType} {productData?.title} ha sido publicado
            correctamente.
          </p>
        </div>
      )}
    </div>
  )
}

export default Publish
