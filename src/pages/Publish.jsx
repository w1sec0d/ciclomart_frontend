import React, { useEffect, useState } from 'react'
import ProductForm from '../components/Publish/ProductForm'
import ProductSelection from '../components/Publish/ProductSelection'
import Verification from '../components/Publish/Verification'
import publicationService from '../services/publicationService'
import ExpositionPage from '../components/Exposure/ExpositionPage'

import { useDispatch } from 'react-redux'
import { setNotification } from '../store/slices/notificationSlice'

const Publish = () => {
  const dispatch = useDispatch()
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
    publicationService
      .publishProduct(finalProduct)
      .then((data) => {
        console.log('Product Data:', data)
        setStep('complete')
      })
      .catch((error) => {
        dispatch(
          setNotification({
            title: 'Ingresa todos los datos',
            icon: 'error',
          })
        ),
          console.log('Error:', error)
      })
  }

  const handleVerification = (code) => {
    console.log('Verification Code:', code)
    setStep('complete')
  }
  console.log('step', step)
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
      {step === 'complete' && <ExpositionPage product={productData} />}
    </div>
  )
}

export default Publish
