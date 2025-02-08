import RatingView from '../components/RatingView'
import Button from '../components/Button'
import { get, useForm } from 'react-hook-form'
import { FaStar, FaUpload } from 'react-icons/fa'
import Input from '../components/Input'
import { useState, useRef, useEffect } from 'react'
import StarRating from '../components/StarRating'
import { setNotification } from '../store/slices/notificationSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import ratingService from '../services/ratingService'
import axios from 'axios'
import Loading from '../components/Loading'

const ProductRating = (props) => {
  const { register, handleSubmit, reset } = useForm()
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)
  const [image, setImage] = useState(null)
  const [error, setError] = useState('')
  const [commentList, setCommentList] = useState([])
  const [newCommentAdded, setNewCommentAdded] = useState(false)
  const [avgRating, setAvgRating] = useState(0)
  const fileInputRef = useRef(null)
  const dispatch = useDispatch()

  //el id del Documento producto es necesario pasarlo por la prop

  const idDoc = 2;

  //Obteniendo el id del usuario logueado

  const authUser = useSelector((state) => state.auth.authUser)

  //Verifica si un usuario ya ha realizado un compra del producto
  const checkPurchase = async () => {
    try {
      if (!authUser || !authUser.idUsuario) return <Loading />

      const idUsuario = authUser.idUsuario

      const request = await ratingService.checkUserPurchase({
        idComprador: idUsuario,
        idDocProducto: idDoc,
      })

      if (request.results.length > 0) {
        return { success: true, idVendedor: request.results[0].idVendedor }
      }
      dispatch(
        setNotification({
          title: '¡UPS!',
          text: 'Todavia no has adquirido el producto para poder calificarlo',
          icon: 'error',
          timer: 3000,
        })
      )
      return { success: false }
    } catch (error) {
      console.error('Ocurrio un error ', error)
    }
  }

  //Valida si se introdujo un comentario y se marco alguna estrella
  const validateFields = (Comment, Rating) => {
    if (!Comment || !Rating) {
      dispatch(
        setNotification({
          title: '¡UPS!',
          text: 'Califica con algúna estrella',
          icon: 'error',
          timer: 3000,
        })
      )
      return -1
    }
    return 0
  }

  //Carga la imagen
  const ImageUpload = (e) => {
    const file = e.target.files[0]
    if (file && file.type.startsWith('image/')) {
      setImage(file)
      setError('')
    } else {
      dispatch(
        setNotification({
          title: '¡UPS!',
          text: 'Selecciona un archivo de imagen válido',
          icon: 'error',
          timer: 3000,
        })
      )
    }
  }

  // Obtiene todos las calificaciones del producto es necesario cambiar el valor por la prop
  const getProductRating = async () => {
    try {
      const request = await ratingService.getRatingProduct(idDoc)
      setCommentList(request.results)
      getAvgRating()
    } catch (error) {
      console.error('Error al obtener las calificaciones', error)
    }
  }

  //Actualiza el componente cada vez que se agrega un comentario
  useEffect(() => {
    getProductRating()
  }, [newCommentAdded])

  // Envia la calificación al backend
  const onSubmit = async (data) => {
    try {
      const isPurcharse = await checkPurchase()
      const idUsuario = authUser.idUsuario

      if (
        validateFields(data.calificacion, rating) === 0 &&
        isPurcharse.success === true
      ) {
        if (!image) {
          const request = await ratingService.createRating({
            idUsuarioComprador: idUsuario,
            idDocumentoProducto: idDoc,
            idUsuarioVendedor: isPurcharse.idVendedor,
            comentario: data.calificacion,
            nota: rating,
          })

          setNewCommentAdded(true)
          dispatch(
            setNotification({
              title: 'Comentario',
              text: 'Tú comentario se ha añadio con éxito',
              icon: 'success',
              timer: 3000,
            })
          )
          return
        }

        const formData = new FormData()
        formData.append('file', image)
        formData.append('upload_preset', 'cicloMart')

        const response = await axios.post(
          'https://api.cloudinary.com/v1_1/dg354wdzy/image/upload', // Reemplaza con tu cloud name
          formData
        )

        const request = await ratingService.createRating({
          idUsuarioComprador: idUsuario,
          idDocumentoProducto: idDoc,
          idUsuarioVendedor: isPurcharse.idVendedor,
          comentario: data.calificacion,
          foto: response.data.secure_url,
          nota: rating,
        })

        setNewCommentAdded(true)

        dispatch(
          setNotification({
            title: 'Comentario',
            text: 'Tú comentario se ha añadio con éxito',
            icon: 'success',
            timer: 3000,
          })
        )
      }
    } catch (error) {
      console.error(error.response.data)
      setNewCommentAdded(false)
      dispatch(
        setNotification({
          title: '¡UPS!',
          text: 'Ocurrio un error. Vuelve a intentarlo',
          icon: 'error',
          timer: 3000,
        })
      )
    } finally {
      setImage(null)
      setRating(null)
      reset()
    }
  }

  //Obtiene el promedio de las calificaciones de un producto
  const getAvgRating = async () => {
    try {
      const request = await ratingService.getAvgRatingProduct(idDoc)
      setAvgRating(request.results[0].avg_calificacion)
    } catch (error) {
      console.error('Error al obtener el promedio de las calificaciones', error)
    }
  }

  const StartGenerate = () => {
    return (
      <div className="Calificacion_Start items-center flex-col flex mt-0">
        <div className="flex">
          {[...Array(5)].map((start, index) => {
            const currentRating = index + 1
            return (
              <label className="inline-block" key={index}>
                <input
                  type="radio"
                  name="rating"
                  value={currentRating}
                  onClick={() => setRating(currentRating)}
                  className="hidden"
                />
                <FaStar
                  className="StartRating cursor-pointer"
                  size={30}
                  color={
                    currentRating <= (hover || rating) ? '#ffc107' : '#e4e5e9'
                  }
                  onMouseEnter={() => setHover(currentRating)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            )
          })}
        </div>
        <div>
          <p className="mt-1">Tu calificación es {rating}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-screen-minus-navbar px-8 py-12 overflow-auto">
      <h2 className="font-black text-2xl"> Opiniones del producto</h2>
      <div className="mt-4">
        <div className="flex  items-start space-x-12">
          <div className="flex space-x-5 items-center">
            <div className="text-7xl font-bold text-blue-500">
              {(avgRating || 0).toFixed(1)}
            </div>
            <div className="flex flex-col">
              {!avgRating ? (
                <StarRating rating={0} size="star-large" />
              ) : (
                <StarRating rating={avgRating} size="star-large" />
              )}
              <p className="text-sm ">{commentList.length} comentario(s)</p>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            {commentList.length === 0 ? (
              <p>No hay comentarios disponibles.</p>
            ) : (
              commentList.map((val, key) => (
                <div key={val.idCalificacion}>
                  <RatingView
                    description={val.comentario}
                    date={new Date(val.fecha).toLocaleDateString()}
                    rating={val.nota}
                    image={val.foto}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <h2 className="py-2 font-black text-2xl">¿Tienes dudas del producto?</h2>
      <p>Puedes iniciar chat con el vendedor</p>
      <div className="py-4">
        <Button
          type="button"
          className="text-center py-1 px-2 bg-blue-500 text-white rounded"
          to="/login"
        >
          Iniciar chat
        </Button>
      </div>
      <div className="py-1">
        <h2 className="py-2 font-black text-2xl">Deja tú comentario</h2>
        <div className="flex flex-col justify-center items-center ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full max-w-4xl gap-3"
          >
            <div className="flex flex-row ml-32 gap-2">
              <div className="flex-grow">
                <textarea
                  id="calificacion"
                  placeholder="Escribe aquí tu comentario"
                  {...register('calificacion', { required: false })}
                  rows="4"
                  maxLength="45"
                  className="mt-1 block w-full p-2 border border-blue-500 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div className="relative flex items-center justify-center">
                <div
                  className="bg-gray-200 rounded-full cursor-pointer h-36 w-36 flex items-center justify-center"
                  onClick={() => fileInputRef.current.click()}
                >
                  {image ? (
                    <img
                      src={URL.createObjectURL(image)}
                      className="transition duration-200 ease-in-out hover:scale-110 hover:opacity-80 hover:cursor-pointer w-36 h-36 rounded-full object-cover"
                    />
                  ) : (
                    <span className="text-center  flex items-center">
                      <FaUpload className="mr-2" size={20} /> Subir Imagen
                    </span>
                  )}
                  <input
                    type="file"
                    onChange={ImageUpload}
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                  />
                </div>
              </div>
            </div>
            <div className="mt-0">
              <StartGenerate />
            </div>
            <div className="flex items-center justify-center">
              <Button
                type="submit"
                className="text-center bg-blue-500 text-white py-2 px-7  rounded-full"
              >
                Enviar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ProductRating
