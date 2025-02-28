import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useCallback, useEffect, useState } from 'react'

// componentes
import Loading from '../../components/Loading'
import Button from '../../components/Button'
import Img from '../../components/Img'
import { FavoriteBorder } from '@mui/icons-material'
import ProductRating from '../ProductRating'
import { setNotification } from '../../store/slices/notificationSlice'
import Input from '../../components/Input'
import GalleryImages from '../GalleryImages'

// servicios
import { getProductById } from '../../services/productService'
import mercadoPago from '../../services/mercadoPago'
import shoppingCart from '../../services/cartService'
import questionService from '../../services/questionService'

// utils
import colombianPrice from '../../utils/colombianPrice'
import { clearLoading, setLoading } from '../../store/slices/loadingSlice'
import capitalize from '../../utils/capitalize'

import { addItem } from '../../store/slices/cartSlice'

const ProductPage = () => {
  // Obtiene el id del producto de los parámetros de la URL
  const { id } = useParams()
  const dispatch = useDispatch()
  const authUser = useSelector((state) => state.auth.authUser)
  const cartItems = useSelector((state) => state.cart.items)
  const [cantidad, setCantidad] = useState(1)
  const [preguntas, setPreguntas] = useState([])

  // Hace fetch del producto con react-query
  const {
    data: producto,
    isLoading,
    isError,
  } = useQuery(['productos', id], () => getProductById(id))

  const getQuestions = useCallback(async (id) => {
    const preguntasObtenidas = await questionService.getQuestions(id)
    console.log('preguntasObtenidas', preguntasObtenidas.results)
    setPreguntas(preguntasObtenidas.results)
    return preguntasObtenidas
  }, [])

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
    console.log('producto', producto)
    const { paymentURL } = await mercadoPago.sendBuyRequest(
      producto,
      authUser.idUsuario
    )
    window.location.href = paymentURL
    setTimeout(() => {
      dispatch(clearLoading())
    }, 5000)
  }

  const handleAddToCart = async () => {
    // Verificar si el usuario está autenticado

    if (!authUser) {
      dispatch(
        setNotification({
          title: '¡UPS!',
          text: 'Debes iniciar sesión primero para poder agregar al carrito',
          icon: 'error',
          timer: 3000,
        })
      )

      return
    }

    const idUsuario = authUser.idUsuario
    const idProducto = producto.idProducto

    //Verificar que la cantidad de producto en el carrito no exceda la cantidad disponible

    const existingItem = cartItems.find((item) => item.id === idProducto)
    const existingQuantity = existingItem ? existingItem.cantidad : 0
    const totalQuantity = existingQuantity + cantidad

    if (totalQuantity > producto.cantidad) {
      dispatch(
        setNotification({
          title: '¡UPS!',
          text: `No puedes agregar más de ${producto.cantidad} unidades de este producto.`,
          icon: 'error',
          timer: 3000,
        })
      )
      return
    }

    // Agregar el producto al carrito

    const item = {
      id: producto.idProducto,
      nombre: producto.nombre,
      cantidad: cantidad,
      precio_unitario: producto.precio,
    }

    dispatch(addItem(item))
    await shoppingCart.addProductToCart(idUsuario, idProducto, cantidad)

    // Sync the cart with localStorage
    const updatedCart = [...cartItems, item]
    localStorage.setItem('cart', JSON.stringify(updatedCart))

    dispatch(
      setNotification({
        title: '¡Éxito!',
        text: 'Producto agregado al carrito',
        icon: 'success',
        timer: 3000,
      })
    )
  }

  const handleQuestion = async () => {
    event.preventDefault()

    if (!authUser) {
      dispatch(
        setNotification({
          title: '¡UPS!',
          text: 'Debes iniciar sesión para realizar una pregunta',
          icon: 'error',
          timer: 3000,
        })
      )
      return
    }

    const idUsuario = authUser.idUsuario
    const idProducto = producto.idProducto
    const pregunta = document.getElementById('pregunta').value

    console.log('pregunta', pregunta)

    await questionService.addQuestions(idUsuario, idProducto, pregunta)
  }

  const setDefaultQuestion = (question) => {
    document.getElementById('pregunta').value = question
  }

  useEffect(() => {
    if (producto) {
      getQuestions(producto.idProducto)
    }
  }, [producto, getQuestions])

  if (isLoading) return <Loading />
  if (isError) return <p>Error: {isError.message}</p>

  return (
    <section className="px-10 bg-lgray h-full flex flex-col">
      <div className=" bg-white  rounded-xl  my-4 ">
        {/* <div className="w-full h-auto py-2 flex items-center justify-center rounded-t-xl bg-primary/5 shadow-xl ">
          <h1 className="font-bold text-2xl">Información del producto</h1>
        </div> */}
        <div className="px-6">
          <div className="flex justify-evenly items-center py-10">
            {/* <Img
          src={producto.imagenURL}
          alt={'Imagen del producto: ' + producto.nombre}
          className="max-w-[500px] max-h-[500px]"
          /> */}

            <div className="w-3/5 h-auto bg-wite shadow-xl border-primary border rounded-xl py-2 px-2 ">
              <GalleryImages />
            </div>
            <div className="p-4 w-2/5 border rounded-xl  border-primary">
              <div className="flex items-center">
                <div>
                  <h1 className="text-2xl font-bold tracking-wide">
                    {producto.nombre}
                  </h1>
                  <p className="text-2xl text-gray-700 tracking-wide">
                    {colombianPrice(producto.precio)}
                  </p>
                </div>
                <FavoriteBorder
                  sx={{ fontSize: 40, color: 'gray', marginLeft: 4 }}
                />
              </div>
              {/* Detalles del producto */}
              <div className="my-2 tracking-wide">
                <p>
                  <b>Marca</b>: {producto.nombreMarca ?? 'Genérica'}
                </p>
                <p>
                  <b>Tipo</b>: {capitalize(producto.tipo)}
                </p>
                <p>
                  <b>Estado</b>:{' '}
                  {producto.disponibilidad === 'disponible'
                    ? 'Disponible'
                    : 'No Disponible'}
                </p>
                <p>
                  <b>Publicado el: </b>
                  {new Date(producto.fechaPublicacion).toLocaleDateString()}
                </p>
              </div>
              <div className="flex items-center flex-row">
                <Input
                  type="number"
                  label="Cantidad"
                  id="cantidad"
                  name="cantidad"
                  value={cantidad}
                  onChange={(e) => setCantidad(Number(e.target.value))}
                  min="1"
                  max={producto.cantidad}
                  className="mt-1 my-4 block w-1/3"
                />
                <Button className="mx-3" onClick={handleAddToCart}>
                  🛒+{' '}
                </Button>
                <Button className="mx-3" onClick={handleBuy}>
                  Comprar
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-lgray py-4">
            <b className="font-bold text-2xl">Descripción:</b>
            <p>
              {producto.descripcionModelo ||
                'Este producto no tiene descripción aún.'}
            </p>
          </div>
          <div>
            <div className="w-full h-auto  flex justify-center items-center bg-white  border-y border-lgray">
              <h2 className="py-2  font-black text-2xl  ">Preguntas</h2>
            </div>

            <p className="py-2 font-secondary text-xl font-bold mt-4">
              ¿Qué quieres saber?
            </p>

            <div className="flex flex-row gap-4">
              <Button
                className="bg-slate-100 border-primary text-primary hover:bg-slate-50"
                onClick={() =>
                  setDefaultQuestion('¿Cuál es la garantía del producto?')
                }
              >
                Garantía
              </Button>
              <Button
                className="bg-slate-100 border-primary text-primary hover:bg-slate-50"
                onClick={() =>
                  setDefaultQuestion('¿Cómo funcionan las devoluciones gratis?')
                }
              >
                Devoluciones gratis
              </Button>
              <Button
                className="bg-slate-100 border-primary text-primary hover:bg-slate-50"
                onClick={() => setDefaultQuestion('¿El precio es negociable?')}
              >
                Precio
              </Button>
            </div>

            <p className=" my-4 font-bold text-xl ">Pregúntale al vendedor</p>

            <div className="flex flex-row gap-4">
              <form
                onSubmit={handleQuestion}
                className="flex flex-col w-full max-w-4xl gap-3"
              >
                <div className="flex flex-row gap-2 justify-start">
                  <textarea
                    id="pregunta"
                    placeholder="Escribe aquí tu pregunta"
                    rows="1"
                    maxLength="45"
                    className=" block w-full p-2 border border-primary rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                  />
                  <Button
                    type="submit"
                    className="text-center bg-primary text-white py-2 px-7  rounded-xl h-full"
                  >
                    Preguntar
                  </Button>
                </div>
              </form>
            </div>

            <p className="py-2 pt-5 font-bold text-xl"> Últimas realizadas </p>

            <div className="flex flex-col gap-4">
              {preguntas.length > 0 ? (
                preguntas.map((pregunta, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <p className="font-bold text-primary">
                      {pregunta.descripcion}
                    </p>
                    <p>{pregunta.respuesta}</p>
                  </div>
                ))
              ) : (
                <p>No hay preguntas aún</p>
              )}
            </div>

            <ProductRating />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductPage
