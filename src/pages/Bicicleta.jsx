//Componentes
import Loading from '../components/Loading'

//Utilidades
import { useQuery } from 'react-query'
import { useDispatch } from 'react-redux'
import { setLoading, clearLoading } from '../store/slices/loadingSlice'

//Servicios
import { getBicicletas } from '../services/productService'

const Bicicleta = () => {
  const dispatch = useDispatch()
  const {
    data: bicicletas,
    isError,
    isLoading,
  } = useQuery(['bicicletas'], getBicicletas)

  if (isLoading) {
    dispatch(setLoading())
    return
  } else if (bicicletas) {
    dispatch(clearLoading())
  }
  if (isError) return <p>Error: {isError.message}</p>

  return (
    <div>
      {bicicletas.map((bicicleta) => (
        <p key={bicicleta.idBicicleta}>{bicicleta.precio}</p>
      ))}
    </div>
  )
}

export default Bicicleta
