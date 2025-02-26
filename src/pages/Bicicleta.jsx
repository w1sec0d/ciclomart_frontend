//Componentes
import Loading from '../components/Loading'

//Utilidades
import { useQuery } from 'react-query'

//Servicios
import { getBicicletas } from '../services/productService'

const Bicicleta = () => {
  const {
    data: bicicletas,
    isError,
    isLoading,
  } = useQuery(['bicicletas'], getBicicletas)

  if (isLoading) {
    return <Loading />
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
