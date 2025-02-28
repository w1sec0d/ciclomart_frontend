import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { setNotification } from '../store/slices/notificationSlice'
import Button from './Button'
import Input from './Input'
import direccionService from '../services/direccionService'
import { clearLoading, setLoading } from '../store/slices/loadingSlice'
import { cleanShowModal } from '../store/slices/showModalSlice'

const DireccionForm = () => {
  const dispatch = useDispatch()
  const authUser = useSelector((state) => state.auth.authUser)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      dispatch(setLoading())
      const response = await direccionService.updateDireccion(
        authUser.idUsuario,
        data
      )
      dispatch(clearLoading())
      dispatch(
        setNotification({
          title: '¡Éxito!',
          text: response.message,
          icon: 'success',
        })
      )
      dispatch(cleanShowModal())
    } catch (error) {
      dispatch(clearLoading())
      dispatch(
        setNotification({
          title: '¡Error!',
          text: error.response.data.message ?? 'Ha ocurrido un error',
          icon: 'error',
        })
      )
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Input
        id="direccionNombre"
        label="Nombre de la dirección"
        {...register('direccionNombre', { required: true })}
      />
      {errors.direccionNombre && (
        <span className="text-red-500 text-xs">Este campo es requerido</span>
      )}
      <Input
        id="direccionNumero"
        label="Número de la dirección"
        {...register('direccionNumero', { required: true })}
      />
      {errors.direccionNumero && (
        <span className="text-red-500 text-xs">Este campo es requerido</span>
      )}
      <Input
        id="codigoPostal"
        label="Código Postal"
        {...register('codigoPostal', { required: true })}
      />
      {errors.codigoPostal && (
        <span className="text-red-500 text-xs">Este campo es requerido</span>
      )}
      <Input
        id="direccionCiudad"
        label="Ciudad"
        {...register('direccionCiudad', { required: true })}
      />
      {errors.direccionCiudad && (
        <span className="text-red-500 text-xs">Este campo es requerido</span>
      )}
      <Input
        id="direccionApartamento"
        label="Apartamento (opcional)"
        {...register('direccionApartamento')}
      />
      <Input
        id="direccionPiso"
        label="Piso (opcional)"
        {...register('direccionPiso')}
      />
      <Button type="submit">Actualizar Dirección</Button>
    </form>
  )
}

export default DireccionForm
