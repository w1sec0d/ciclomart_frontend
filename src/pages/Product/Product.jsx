import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useQuery, useQueryClient } from 'react-query'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

// Components
import Loading from '../../components/Loading'
import Button from '../../components/Button'

import { CiCircleCheck } from 'react-icons/ci'

import ProductRating from '../ProductRating'
import { setNotification } from '../../store/slices/notificationSlice'
import Input from '../../components/Input'
import GalleryImages from '../GalleryImages'
import ItemsTable from '../../components/ItemsTable'
import Redirect from '../../components/Redirect'

// Services
import { getProductById } from '../../services/productService'
import mercadoPago from '../../services/mercadoPago'
import questionService from '../../services/questionService'

// Utils
import colombianPrice from '../../utils/colombianPrice'
import { clearLoading, setLoading } from '../../store/slices/loadingSlice'
import capitalize from '../../utils/capitalize'

import { setShowAddressModal } from '../../store/slices/showModalSlice'
import { getValueTranslationKey } from '../../utils/filterMappings'
import { ShoppingBag } from '@mui/icons-material'

const ProductPage = () => {
  const { t } = useTranslation()
  // Get product ID from URL parameters
  const { id } = useParams()
  const dispatch = useDispatch()
  const queryClient = useQueryClient()
  const authUser = useSelector((state) => state.auth.authUser)
  const [cantidad, setCantidad] = useState(1)
  const [showAll, setShowAll] = useState(false)
  const [preguntas, setPreguntas] = useState([])

  // Fetch product with react-query
  const {
    data: producto,
    isLoading,
    isError,
  } = useQuery(['productos', id], () => getProductById(id))

  const handleBuy = async () => {
    dispatch(setLoading())
    // Check if user is authenticated
    if (!authUser) {
      dispatch(
        setNotification({
          title: t('product.mustLoginToBuy'),
          icon: 'error',
        })
      )
      dispatch(clearLoading())
      return
    }

    // Check that user has a shipping address
    if (
      !authUser.direccionNombre ||
      !authUser.direccionNumero ||
      !authUser.codigoPostal
    ) {
      dispatch(setShowAddressModal(4)) // Show initial message
      dispatch(clearLoading())
      return
    }

    const request = await mercadoPago.createPreference(
      producto,
      1,
      authUser.idUsuario
    )
    console.log({ request })
    window.location.href = request.paymentURL
    setTimeout(() => {
      dispatch(clearLoading())
    }, 5000)
  }

  const handleQuestion = async () => {
    if (!authUser) {
      dispatch(
        setNotification({
          title: t('product.oops'),
          text: t('product.mustLoginToAsk'),
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
      const newQuestion = await questionService.addQuestions(
        idUsuario,
        idProducto,
        pregunta
      )

      // Ensure newQuestion has the same structure as existing questions
      setPreguntas((prevPreguntas) => [
        ...prevPreguntas,
        {
          idPregunta: newQuestion.idPregunta,
          descripcion: pregunta,
          respuesta: null,
        },
      ])

      // Invalidate product query to update in the background
      queryClient.invalidateQueries(['productos', id])

      document.getElementById('pregunta').value = ''
    } catch (error) {
      console.error('Error adding question:', error)
      dispatch(
        setNotification({
          title: 'Error',
          text: t('product.errorAddingQuestion'),
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

      // Update local state with the answer
      setPreguntas((prevPreguntas) =>
        prevPreguntas.map((pregunta) =>
          pregunta.idPregunta === idPregunta
            ? { ...pregunta, respuesta: respuesta }
            : pregunta
        )
      )

      document.getElementById(`respuesta-${idPregunta}`).value = ''
    } catch (error) {
      console.error('Error answering:', error)
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

  return (
    <section className="px-4 md:px-10 bg-lgray h-full flex flex-col">
      <div className="bg-white rounded-xl my-4">
        <div className="px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-evenly bg-lgray/30 items-center my-10 border rounded-xl border-primary">
            <div className="w-full md:w-3/5 h-auto bg-white shadow-xl border-r border-primary rounded-xl py-2 pl-2 pr-4">
              <GalleryImages
                imageProduct={producto.imagenURL}
                imagePropertyCard={producto.tarjeta}
              />
            </div>
            <div className="w-full md:w-2/5 h-full bg-white shadow-xl border-y border-primary mt-4 md:mt-0">
              <div className="flex items-center">
                <div className="flex justify-center flex-col items-center w-full py-2 shadow-md">
                  <h1 className="text-xl md:text-2xl font-bold tracking-wide">
                    {producto.nombre}
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-700 tracking-wide">
                    {colombianPrice(producto.precio)}
                  </p>
                </div>
              </div>
              <div className="tracking-wide px-4 py-4 w-full h-full flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 border-lgray md:border-r">
                  <p>
                    <b>{t('product.brand')}</b>:{' '}
                    {producto.nombreMarca ?? t('product.generic')}
                  </p>
                  <p>
                    <b>{t('product.type')}</b>:{' '}
                    {t(getValueTranslationKey('tipoProducto', producto.tipo)) ||
                      capitalize(producto.tipo)}
                  </p>
                  <p>
                    <b>{t('product.status')}</b>:{' '}
                    {producto.disponibilidad === 'disponible'
                      ? t('products.available')
                      : t('products.sold')}
                  </p>
                  <p>
                    <b>{t('product.publishedOn')} </b>
                    {new Date(producto.fechaPublicacion).toLocaleDateString()}
                  </p>
                  <p>
                    <b>{t('product.shippingCost')}</b>:{' '}
                    {colombianPrice(producto.costoEnvio)}
                  </p>
                  <p>
                    <Redirect
                      section={'section1'}
                      name={t('product.moreDetails')}
                      idProducto={producto.idProducto}
                    />
                  </p>
                </div>
                <div className="w-full md:w-1/2 px-4 mt-4 md:mt-0">
                  <Input
                    type="number"
                    label={t('product.quantity')}
                    id="cantidad"
                    name="cantidad"
                    value={cantidad}
                    onChange={(e) => setCantidad(Number(e.target.value))}
                    min="1"
                    max={producto.cantidad}
                    onKeyDown={(e) => e.preventDefault()}
                    className="font-bold py-2"
                    inputClassName="block w-full font-bold tracking-wide bg-lgray/20 rounded-lg px-2 border border-black/20"
                  />
                </div>
              </div>
              <div className="flex items-center flex-col px-6">
                <Button
                  className="mb-2 ease-in-out duration-100 transition hover:scale-105 font-bold"
                  onClick={handleBuy}
                >
                  <ShoppingBag className="mr-2" />
                  {t('product.buy')}
                </Button>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center w-full border-y border-lgray py-2">
              <h2 className="font-black text-xl md:text-2xl" id="section1">
                {t('product.details')}
              </h2>
            </div>
            {producto.tarjeta && (
              <div className="w-full bg-secondary/30 border-secondary flex flex-row border-dashed mt-2 py-4 px-2 items-center border-2">
                <CiCircleCheck className="text-5xl md:text-7xl mr-3 text-primary" />
                <div>
                  <b>{t('product.verified')}</b>
                  <p>{t('product.verifiedDescription')}</p>
                </div>
              </div>
            )}
            <div className="flex flex-col md:flex-row items-center w-full pt-4">
              <b className="font-bold text-lg md:text-xl mr-2">
                {t('product.description')}:
              </b>
              <p className="text-base md:text-lg w-full overflow-hidden break-words">
                {producto.descripcionModelo || t('product.noDescription')}
              </p>
            </div>
            <div
              className={`w-full h-full px-4 md:px-20 mb-4 ${
                !showAll && 'max-h-[300px]'
              } overflow-y-hidden`}
            >
              <ItemsTable data={[producto]} />
            </div>
            {/* TODO: Handle specific description and values of the product, that came from the db in spanish */}
            <div className="flex items-center justify-center w-full mb-2">
              <b
                className="text-primary font-bold flex items-center justify-center border-b hover:cursor-pointer"
                onClick={() => setShowAll(!showAll)}
              >
                {!showAll ? (
                  t('product.showComplete')
                ) : (
                  <Redirect
                    section={'section1'}
                    name={t('product.showLess')}
                    idProducto={producto.idProducto}
                  />
                )}
              </b>
            </div>
          </div>
          <div>
            <div className="w-full h-auto flex justify-center items-center bg-white border-y border-lgray">
              <h2 className="py-2 font-black text-xl md:text-2xl">
                {t('product.questions')}
              </h2>
            </div>
            <p className="py-2 font-secondary text-lg md:text-xl font-bold mt-4">
              {t('product.whatDoYouWantToKnow')}
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <Button
                className="bg-slate-100 border-primary text-primary hover:bg-slate-50"
                onClick={() =>
                  setDefaultQuestion(t('product.warrantyQuestion'))
                }
              >
                {t('product.warranty')}
              </Button>
              <Button
                className="bg-slate-100 border-primary text-primary hover:bg-slate-50"
                onClick={() =>
                  setDefaultQuestion(t('product.freeReturnsQuestion'))
                }
              >
                {t('product.freeReturns')}
              </Button>
              <Button
                className="bg-slate-100 border-primary text-primary hover:bg-slate-50"
                onClick={() =>
                  setDefaultQuestion(t('product.priceNegotiableQuestion'))
                }
              >
                {t('product.priceNegotiable')}
              </Button>
            </div>
            <p className="my-4 font-bold text-lg md:text-xl">
              {t('product.askTheSeller')}
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <form
                onSubmit={handleQuestion}
                className="flex flex-col w-full max-w-4xl gap-3"
              >
                <div className="flex flex-col md:flex-row gap-2 justify-start">
                  <textarea
                    id="pregunta"
                    placeholder={t('product.writeYourQuestion')}
                    rows="1"
                    maxLength="45"
                    className="block w-full p-2 border border-primary rounded-md shadow-sm focus:border-secondary sm:text-sm resize-none outline-none"
                  />
                  <Button
                    type="submit"
                    className="text-center bg-primary text-white py-2 px-7 rounded-xl h-full"
                  >
                    {t('product.ask')}
                  </Button>
                </div>
              </form>
            </div>
            <p className="py-2 pt-5 font-bold text-lg md:text-xl">
              {t('product.latestQuestions')}
            </p>
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
                      pregunta.respuesta == null && (
                        <form
                          onSubmit={(e) => handleAnswer(e, pregunta.idPregunta)}
                          className="flex flex-col w-full max-w-4xl gap-3"
                        >
                          <div className="flex flex-col md:flex-row gap-2 justify-start">
                            <textarea
                              id={`respuesta-${pregunta.idPregunta}`}
                              placeholder={t('product.writeYourAnswer')}
                              rows="1"
                              maxLength="45"
                              className="block w-full p-2 border border-primary rounded-md shadow-sm focus:border-secondary sm:text-sm resize-none outline-none"
                            />
                            <Button
                              type="submit"
                              className="text-center bg-primary text-white py-2 px-7 rounded-xl h-full"
                            >
                              {t('product.answer')}
                            </Button>
                          </div>
                        </form>
                      )}
                    <p>{pregunta.respuesta}</p>
                  </div>
                ))
              ) : (
                <p>{t('product.noQuestionsYet')}</p>
              )}
            </div>
            <ProductRating telefono={producto.telefonoVendedor} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductPage
