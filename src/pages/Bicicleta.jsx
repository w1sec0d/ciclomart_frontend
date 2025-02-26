//Componentes
import ItemContainer from '../components/ItemContainer'

//Utilidades
import { useQuery } from 'react-query'
import { useDispatch } from 'react-redux'
import { setLoading, clearLoading } from '../store/slices/loadingSlice'

//Servicios
import { getBicicletas, getProducts } from '../services/productService'

const Bicicleta = () => {
  const dispatch = useDispatch()
  const {
    data: bicicletas,
    isError,
    isLoading,
  } = useQuery(['productos'], getProducts)

  if (isLoading) {
    dispatch(setLoading())
    return
  } else if (bicicletas) {
    dispatch(clearLoading())
  }
  if (isError) return <p>Error: {isError.message}</p>

  return (
    <div className="bg-lgray pb-8">
      <div>
        <h1 className="font-bold text-3xl bg-secondary w-full h-20 mb-10 shadow-xl flex items-center justify-center">
          ¡Encuentra tu próxima bicicleta!
        </h1>
      </div>
      <div className="px-9">
        <div className="grid grid-cols-5">
          {bicicletas.map((bicicleta) => (
            <ItemContainer
              {...bicicleta}
              key={bicicleta.idBicicleta}
              className={'mt-2'}
              envioGratis={bicicleta['método de envio'] === 'gratis'}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Bicicleta
