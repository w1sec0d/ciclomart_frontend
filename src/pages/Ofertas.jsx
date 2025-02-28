//Ofertas
import IndividualProduct from '../components/IndividualProduct'

//Utilidades
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useQuery } from 'react-query'
import { setLoading, clearLoading } from '../store/slices/loadingSlice'

//Servicios
import { getOfertas } from '../services/productService'

const Ofertas = () => {
  const dispatch = useDispatch()

  //Trae bicicletas
  const {
    data: ofertas,
    isError,
    isLoading,
  } = useQuery(['ofertas'], getOfertas)

  useEffect(() => {
    if (isLoading) {
      dispatch(setLoading())
    } else {
      dispatch(clearLoading())
    }
  }, [isLoading, dispatch])

  if (isLoading) return null
  if (isError) return <p>Error: {isError.message}</p>

  return (
    <IndividualProduct
      products={ofertas}
      title={'¡Consulta nuestras principales ofertas!'}
    />
  )
}

export default Ofertas
