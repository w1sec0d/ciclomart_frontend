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
  const [idProducto, setIdProducto] = useState()
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
        const brandNames = data.results.map((brand) => ({
          id: brand.idMarca,
          value: brand.nombre,
          label: brand.nombre,
        }))
        setBrands({ options: brandNames })
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  useEffect(() => {
    getBrand()
  }, [])

  const handleProductSubmit = (general, product) => {
    if(productType === 'bicicleta') {
      setStep('verification')
    }
    else{
      handleFinalSubmit(general, product)
    }
  }

  const handleFinalSubmit = (general, product) => {
    const finalProduct = { ...general, ...product }
    setProductData(finalProduct)
    console.log('Final Product:', finalProduct)
    publicationService
      .publishProduct(finalProduct)
      .then((data) => {
        console.log('Product Data:', data)
        const id = data.dProducto
        setIdProducto(id)
        publicationService
          .uploadImage(id, finalProduct.imagenes[0])
          .then((data) => {
            console.log('Image Data:', data)
            setStep('complete')
          })
          .catch((error) => {
            console.error('Error:', error)
          })
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

  const handleVerification = (general, product) => {
    console.log('Verification Code:')
    handleFinalSubmit(general, product)
  }
  console.log('step', step)
  return (
    <div>
      {step === 'selection' && <ProductSelection onSelect={handleSelect} />}
      {step === 'form' && (
        <ProductForm
          type={productType}
          onSubmit={handleProductSubmit}
          models={models}
          brands={brands}
        />
      )}
      {step === 'verification' && (
        <Verification onVerify={handleVerification} />
      )}
      {step === 'complete' && <ExpositionPage idProduct={idProducto} />}
    </div>
  )
}

export default Publish
