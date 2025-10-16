import React, { useEffect, useState } from 'react'
import ProductForm from '../components/Publish/ProductForm'
import ProductSelection from '../components/Publish/ProductSelection'
import Verification from '../components/Publish/Verification'
import publicationService from '../services/publicationService'
import ExpositionPage from '../components/Exposure/ExpositionPage'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'

import { useDispatch, useSelector } from 'react-redux'
import { setNotification } from '../store/slices/notificationSlice'

const Publish = () => {
  const navigate = useNavigate()
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

  useEffect(() => {
    if (step === 'complete' && idProducto) {
      navigate(`/exposure/${idProducto}`)
    }
  }, [step, idProducto, navigate])

  // const getModels = async (type, id) => {
  //   await publicationService.getModels(type, id).then((data) => {
  //     const modelNames = data.models.map(
  //       model => ({
  //         value: model.nombre,
  //         label: model.nombre}))
  //     setModels({options: modelNames})
  //   }).catch((error) => {
  //     console.error(error)
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
        const id = data.results.idProducto
        setIdProducto(id)
        publicationService
          .uploadImage(id, product.imagenes[0])
          .then(() => {
            setStep('complete')
          })
          .catch((error) => {
            console.error('Error:', error)
          })
      })
      .catch((error) => {
        ;(dispatch(
          setNotification({
            title: 'Ingresa todos los datos',
            icon: 'error',
          })
        ),
          console.error(error))
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
      'https://api.cloudinary.com/v1_1/drfmpnhaz/image/upload',
      formData
    )
    const updateProduct = { ...productData, tarjeta: response.data.secure_url }
    setProductData(updateProduct)
    handleFinalSubmit(updateProduct)
  }

  return (
    <div>
      {step === 'selection' && <ProductSelection onSelect={handleSelect} />}
      {step === 'form' && (
        <ProductForm
          type={productType}
          onSubmit={handleProductSubmit}
          models={models}
          brands={brands}
          getBrands={getBrand}
        />
      )}
      {step === 'verification' && (
        <Verification onVerify={handleVerification} />
      )}
    </div>
  )
}

export default Publish
