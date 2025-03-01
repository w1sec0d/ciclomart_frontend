import React, { useEffect, useState } from 'react'
import ProductForm from '../components/Publish/ProductForm'
import ProductSelection from '../components/Publish/ProductSelection'
import Verification from '../components/Publish/Verification'
import publicationService from '../services/publicationService'
import ExpositionPage from '../components/Exposure/ExpositionPage'

import axios from 'axios'

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
    const productData = { ...general, ...product }
    setProductData(productData)
    if (productType === 'bicicleta') {
      setStep('verification')
    } else {
      handleFinalSubmit(productData)
    }
  }

  const handleFinalSubmit = (product) => {
    publicationService
      .publishProduct(product)
      .then((data) => {
        console.log('Product Data:', data)
        const id = data.dProducto
        setIdProducto(id)
        publicationService
          .uploadImage(id, product.imagenes[0])
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

  const handleVerification = async (tarjeta) => {
    const validTypes = ['image/jpeg', 'image/png', 'application/pdf']
    if (!validTypes.includes(tarjeta.type)) {
      dispatch(
        setNotification({
          title: 'Tipo de archivo no válido',
          text: 'Por favor, sube una imagen (JPEG, PNG) o un PDF',
          icon: 'error',
          timer: 3000,
        })
      )
      return
    }
    const formData = new FormData()
    formData.append('file', tarjeta)
    formData.append('upload_preset', 'ciclomart')

    const response = await axios.post(
      'https://api.cloudinary.com/v1_1/drfmpnhaz/image/upload', // Reemplaza con tu cloud name
      formData
    )
    const updateProduct = { ...productData, tarjeta: response.data.secure_url }
    setProductData(updateProduct)
    console.log('Product Data:', updateProduct)
    handleFinalSubmit(updateProduct)
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
