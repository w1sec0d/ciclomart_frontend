//Componentes
import IndividualProduct from '../components/IndividualProduct'

//Utilidades
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useQuery } from 'react-query'
import { setLoading, clearLoading } from '../store/slices/loadingSlice'

//Servicios
import { getComponentes } from '../services/productService'

const Componentes = () => {
  const dispatch = useDispatch()

  //Trae bicicletas
  const {
    data: componentes,
    isError,
    isLoading,
  } = useQuery(['componentes'], getComponentes)

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
      products={componentes}
      title={'¡Consigue el repuesto que necesitas!'}
    />
  )
}

export default Componentes
