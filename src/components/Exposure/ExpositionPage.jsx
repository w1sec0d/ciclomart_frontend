//Componentes
import ExposurePrice from './ExposurePrice'
import { setLoading, clearLoading } from '../../store/slices/loadingSlice'

//Utilidades
import { Link } from 'react-router-dom'
import { useState } from 'react'
import mercadoPago from '../../services/mercadoPago'
import { useSelector } from 'react-redux'

const ExpositionPage = ({ product }) => {
  const [selected, setSelected] = useState()
  const exposure = useSelector((state) => state.exposure)
  const authUser = useSelector((state) => state.auth.authUser)

  const handleBuy = async () => {
    dispatch(setLoading())
    if (!authUser) {
      dispatch(
        setNotification({
          title: 'Debes iniciar sesión para comprar',
          icon: 'error',
        })
      )
      dispatch(clearLoading())
      return
    }
    const { paymentURL } = await mercadoPago.sendBuyExposureRequest(
      exposure,
      authUser.idUsuario
    )
    window.location.href = paymentURL
    setTimeout(() => {
      dispatch(clearLoading())
    }, 5000)
  }

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gradient-to-t from-primary/95 to-zinc-100 from-50% to-50% mt-[64px]">
      <div
        className=" flex flex-col items-center justify-center w-full max-w-4xl pb-6 bg-zinc-100
      rounded-lg mt-4 mb-8 shadow-lg shadow-black/35"
      >
        <div className="w-full h-14 bg-primary rounded-t-lg flex items-center justify-center drop-shadow-lg">
          <h1 className="text-2xl font-bold ">
            Selecciona tu grado de exposición
          </h1>
        </div>
        <div className="w-full m-15 px-20 ">
          <div className="mb-6">
            <p className="mb-6 mx-[-40px] text-center mt-4">
              {' '}
              Aquí podras seleccionar el nivel de exposición para tu producto,{' '}
              <b>por defecto se establecerá en 0</b>, sin embargo puedes
              utilizar alguna de las siguientes opciones, de acuerdo a tu
              necesidad.
              <Link
                className="inline-block text-primary font-bold"
                to={'/ExposureInfo'}
                target="_blank"
              >
                Click aquí para mayor información
              </Link>
            </p>

            <div className="grid grid-cols-2 gap-4 ">
              <ExposurePrice
                grade={1}
                price={product.precio}
                setSelected={setSelected}
                selected={selected}
              />
              <ExposurePrice
                grade={2}
                price={product.precio}
                setSelected={setSelected}
                selected={selected}
              />
              <ExposurePrice
                grade={3}
                price={product.precio}
                setSelected={setSelected}
                selected={selected}
              />
              <ExposurePrice
                grade={4}
                price={product.precio}
                setSelected={setSelected}
                selected={selected}
              />
            </div>
            <p className="mt-4 text-center text-tertiary font-bold">
              Solo se te cobrara una vez publiques el producto
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpositionPage
