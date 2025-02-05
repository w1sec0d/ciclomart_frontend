import React from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../services/productService'
import { useQuery } from 'react-query'
import Loading from '../components/Loading'

const ProductPage = ({ product }) => {
  // get product id from URL
  const { id } = useParams()
  // fetch product data from API using react query
  const {
    data: producto,
    isLoading,
    isError,
  } = useQuery(['productos', id], () => getProductById(id))
  console.log('id', id)
  console.log('producto', producto)

  const handleBuy = async () => {
    // try {
    //   const response = await apiService.createMercadoPagoPreference({
    //     items: [
    //       {
    //         title: product.name,
    //         unit_price: product.price,
    //         quantity: 1,
    //       },
    //     ],
    //   })
    //   window.location.href = response.init_point
    // } catch (error) {
    //   console.error('Error creating MercadoPago preference:', error)
    // }
  }

  if (isLoading) return <Loading />
  if (isError) return <p>Error: {isError.message}</p>
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* <img
        className="w-full h-64 object-cover"
        // src={product.image}
        // alt={product.name}
      /> */}
      <div className="p-4">
        <h1 className="text-2xl font-bold">{producto.nombre}</h1>
        <p className="text-xl text-gray-700">${producto.precio}</p>
        <button
          onClick={handleBuy}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Comprar
        </button>
      </div>
    </div>
  )
}

export default ProductPage
