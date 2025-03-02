import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useQuery, useQueryClient } from 'react-query'
import { useCallback, useEffect, useState } from 'react'

// componentes
import Loading from '../../components/Loading'
import Button from '../../components/Button'
import Img from '../../components/Img'

import { CiCircleCheck } from 'react-icons/ci'

import ProductRating from '../ProductRating'
import { setNotification } from '../../store/slices/notificationSlice'
import Input from '../../components/Input'
import GalleryImages from '../GalleryImages'
import ItemsTable from '../../components/ItemsTable'
import Redirect from '../../components/Redirect'

// servicios
import { getProductById } from '../../services/productService'
import mercadoPago from '../../services/mercadoPago'
import cartService from '../../services/cartService'
import questionService from '../../services/questionService'

// utils
import colombianPrice from '../../utils/colombianPrice'
import { clearLoading, setLoading } from '../../store/slices/loadingSlice'
import capitalize from '../../utils/capitalize'

import { addItem } from '../../store/slices/cartSlice'
import { setShowAddressModal } from '../../store/slices/showModalSlice'

const ProductPage = () => {
  // Obtiene el id del producto de los parámetros de la URL
  const { id } = useParams()
  const dispatch = useDispatch()
  const queryClient = useQueryClient()
  const authUser = useSelector((state) => state.auth.authUser)
  const cartItems = useSelector((state) => state.cart.items)
  const [cantidad, setCantidad] = useState(1)
  const [showAll, setShowAll] = useState(false)
  const [preguntas, setPreguntas] = useState([])
  const [respuestas, setRespuestas] = useState([])

  // Hace fetch del producto con react-query
  const {
    data: producto,
    isLoading,
    isError,
  } = useQuery(['productos', id], () => getProductById(id))
  console.log('producto', producto)

  const handleBuy = async () => {
    dispatch(setLoading())
    // Verifica si el usuario está autenticado
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

    // Verifica que el usuario tenga una dirección de envío
    if (
      !authUser.direccionNombre ||
      !authUser.direccionNumero ||
      !authUser.codigoPostal
    ) {
      dispatch(setShowAddressModal(4)) // Mostrar el mensaje inicial
      dispatch(clearLoading())
      return
    }

    const { paymentURL } = await mercadoPago.createPreference(
      producto,
      1,
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
    dispatch(addItem(producto))
    await cartService.addProductToCart(idUsuario, idProducto, cantidad)

    // Sync the cart with localStorage
    const updatedCart = [...cartItems, producto]
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
    try {
      const newQuestion = await questionService.addQuestions(idUsuario, idProducto, pregunta)
      
      // Asegúrate de que newQuestion tiene la misma estructura que las preguntas existentes
      setPreguntas(prevPreguntas => [...prevPreguntas, {
        idPregunta: newQuestion.idPregunta,
        descripcion: pregunta,
        respuesta: null
      }])
      
      // Invalida la consulta del producto para que se actualice en segundo plano
      queryClient.invalidateQueries(['productos', id])

      document.getElementById('pregunta').value = ''
    } catch (error) {
      console.error("Error al añadir pregunta:", error)
      dispatch(
        setNotification({
          title: 'Error',
          text: 'No se pudo agregar la pregunta',
          icon: 'error',
          timer: 3000,
        })
      )
    }
  }

  const handleAnswer = async (event, idPregunta) => {
    event.preventDefault()

    const idProducto = producto.idProducto
    const respuesta = document.getElementById(`respuesta-${idPregunta}`).value

    try {
      await questionService.answerQuestion(idPregunta, idProducto, respuesta)
      
      // Actualiza el estado local con la respuesta
      setPreguntas(prevPreguntas => 
        prevPreguntas.map(pregunta => 
          pregunta.idPregunta === idPregunta 
            ? { ...pregunta, respuesta: respuesta }
            : pregunta
        )
      )
      
      document.getElementById(`respuesta-${idPregunta}`).value = ''
    } catch (error) {
      console.error("Error al responder:", error)
    }
  }

  const setDefaultQuestion = (question) => {
    document.getElementById('pregunta').value = question
  }

  useEffect(() => {
    if (producto && producto.preguntas) {
      setPreguntas(producto.preguntas)
    }
  }, [producto])

  if (isLoading) return <Loading />
  if (isError) return <p>Error: {isError.message}</p>

  console.log('producto', producto)
  return (
    <section className="px-10 bg-lgray h-full flex flex-col">
      <div className=" bg-white  rounded-xl  my-4 ">
        {/* <div className="w-full h-auto py-2 flex items-center justify-center rounded-t-xl bg-primary/5 shadow-xl ">
          <h1 className="font-bold text-2xl">Información del producto</h1>
        </div> */}
        <div className="px-6">
          <div className="flex justify-evenly bg-lgray/30 items-center my-10 border rounded-xl border-primary">
            {/* <Img
          src={producto.imagenURL}
          alt={'Imagen del producto: ' + producto.nombre}
          className="max-w-[500px] max-h-[500px]"
          /> */}

            <div className="w-3/5 h-auto bg-white shadow-xl border-r border-primary rounded-xl  py-2 pl-2 pr-4 ">
              <GalleryImages
                imageProduct={producto.imagenURL}
                imagePropertyCard={producto.tarjeta}
              />
            </div>
            <div className="w-2/5   h-full bg-white shadow-xl border-y border-primary">
              <div className="flex items-center">
                <div className="flex justify-center flex-col items-center w-full py-2 shadow-md  ">
                  <h1 className="text-2xl font-bold tracking-wide">
                    {producto.nombre}
                  </h1>
                  <p className="text-2xl text-gray-700 tracking-wide">
                    {colombianPrice(producto.precio)}
                  </p>
                </div>
                {/* <FavoriteBorder
                  sx={{ fontSize: 40, color: 'gray', marginLeft: 4 }}
                /> */}
              </div>
              {/* Detalles del producto */}
              <div className="tracking-wide px-4 py-4 w-full h-full flex flex-row">
                <div className="w-1/2 border-lgray border-r">
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
                  <p>
                    <Redirect
                      section={'section1'}
                      name={'Más detalles'}
                      idProducto={producto.idProducto}
                    />
                  </p>
                </div>
                <div className="w-1/2 px-4">
                  <Input
                    type="number"
                    label="Cantidad: "
                    id="cantidad"
                    name="cantidad"
                    value={cantidad}
                    onChange={(e) => setCantidad(Number(e.target.value))}
                    min="1"
                    max={producto.cantidad}
                    onKeyDown={(e) => e.preventDefault()}
                    className="font-bold py-2"
                    inputClassName="block w-full font-bold tracking-wide bg-lgray/20 rounded-lg px-2 border border-black/20   "
                  />
                </div>
              </div>
              <div className="flex items-center flex-col px-6  ">
                <Button
                  className="h-full w-full mb-2 bg-white border-primary border text-black transition duration-100 ease-in-out hover:scale-105"
                  onClick={handleAddToCart}
                >
                  Añade al carrito 🛒
                </Button>
                <Button
                  className="w-full mb-2 ease-in-out duration-100 transition hover:scale-105"
                  onClick={handleBuy}
                >
                  Comprar
                </Button>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center w-full border-y border-lgray py-2">
              <h2 className="font-black text-2xl" id="section1">
                Detalles del producto
              </h2>
            </div>
            {producto.tarjeta && (
              <div className="w-full bg-secondary/30 border-secondary flex flex-row border-dashed  mt-2 py-4 px-2 items-center border-2">
                <CiCircleCheck className="text-7xl mr-3 text-primary" />
                <div>
                  <b>Este producto esta verificado</b>
                  <p>
                    ¡Lo que significa que puedes consultar su tarjeta de
                    propiedad!
                  </p>
                </div>
              </div>
            )}
            <div className="flex flex-row items-center w-full pt-4 ">
              <b className="font-bold text-xl mr-2 ">Descripción:</b>

              <p className="text-lg w-full overflow-hidden break-words">
                {producto.descripcionModelo ||
                  'Este producto no tiene descripción aún'}
              </p>
            </div>
            <div
              className={`w-full h-full px-20 mb-4 ${!showAll && 'max-h-[300px]'} overflow-y-hidden`}
            >
              <ItemsTable data={[producto]} />
            </div>

            <div className="flex items-center justify-center w-full mb-2">
              <b
                className="text-primary font-bold  flex items-center justify-center border-b hover:cursor-pointer"
                onClick={() => setShowAll(!showAll)}
              >
                {!showAll ? (
                  'Mostrar completo'
                ) : (
                  <Redirect
                    section={'section1'}
                    name={'Mostrar menos'}
                    idProducto={producto.idProducto}
                  />
                )}
              </b>
            </div>
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
                    className=" block w-full p-2 border border-primary rounded-md shadow-sm  focus:border-secondary sm:text-sm resize-none outline-none"
                  />
                  <Button
                    type="submit"
                    className="text-center bg-primary text-white py-2 px-7  rounded-xl h-full "
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
                    {authUser && 
                    authUser.rol === 'vendedor' && 
                    authUser.id === producto.idUsuario && 
                    pregunta.respuesta == null &&(
                      <form
                      onSubmit={(e) => handleAnswer(e, pregunta.idPregunta)}
                      className="flex flex-col w-full max-w-4xl gap-3"
                    >
                      <div className="flex flex-row gap-2 justify-start">
                        <textarea
                          id={`respuesta-${pregunta.idPregunta}`}
                          placeholder="Escribe aquí tu respuesta"
                          rows="1"
                          maxLength="45"
                          className=" block w-full p-2 border border-primary rounded-md shadow-sm  focus:border-secondary sm:text-sm resize-none outline-none"
                        />
                        <Button
                          type="submit"
                          className="text-center bg-primary text-white py-2 px-7  rounded-xl h-full "
                        >
                          Responder
                        </Button>
                      </div>
                    </form>
                    )}
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
