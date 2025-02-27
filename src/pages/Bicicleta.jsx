//Componentes
import IndividualProduct from '../components/IndividualProduct'

//Utilidades
import { useQuery } from 'react-query'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setLoading, clearLoading } from '../store/slices/loadingSlice'

//Servicios
import { getBicicletas } from '../services/productService'

const Bicicleta = () => {
  const dispatch = useDispatch()

  //Trae bicicletas
  const {
    data: bicicletas,
    isError,
    isLoading,
  } = useQuery(['productos'], getBicicletas)

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
    //Genera vista completa de bicicletas
    <IndividualProduct
      products={bicicletas}
      title={'¡Encuentra tu próxima bicicleta!'}
    />
  )
}

export default Bicicleta
