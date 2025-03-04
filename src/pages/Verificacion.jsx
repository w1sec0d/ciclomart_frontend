import Input from '../components/Input'
import { useForm } from 'react-hook-form'
import Button from '../components/Button'

import { setNotification } from '../store/slices/notificationSlice'
import { useDispatch } from 'react-redux'
import loginService from '../services/loginService'
import { clearLoading, setLoading } from '../store/slices/loadingSlice'

import background1 from '../assets/background1.webp'

const Verificacion = () => {
  const dispatch = useDispatch()

  const { register, handleSubmit, reset } = useForm()

  const onSubmit = async (data) => {
    try {
      dispatch(setLoading(true))
      const request = await loginService.sendResetPasswordEmail(data.email)

      if (request.status === 200) {
        dispatch(clearLoading(true))
        dispatch(
          setNotification({
            title: '¡Éxito!',
            text: 'Hemos enviado un correo para recuperar la contraseña.',
            icon: 'success',
          })
        )
        reset()
      } else if (request.status === 401) {
        dispatch(
          setNotification({
            title: '¡ups!',
            text: 'El correo debe ser el que registraste en la app.',
            icon: 'error',
          })
        )
      }
    } catch (error) {
      dispatch(clearLoading(true))

      if (error.response && error.response.status === 401) {
        dispatch(
          setNotification({
            title: '¡ups!',
            text: 'El correo debe ser el que registraste en la app.',
            icon: 'error',
          })
        )
      } else {
        console.error('Error:', error.message)
        dispatch(
          setNotification({
            title: 'Error',
            text: `Ocurrió un error: ${error.message}`,
            icon: 'error',
          })
        )
      }
    }
  }

  return (
    <div className="flex items-center justify-center py-20 lg:py-0 lg:min-h-screen bg-gray-100">
      <img
        src={background1}
        alt="Fondo de bicicletas"
        className="absolute object-cover -z-10 blur-sm "
      />
      <div className="bg-white p-8 rounded shadow-md w-400 max-w-4xl lg:-translate-y-9">
        <h1 className="font-black text-5xl text-center"> Verificación</h1>
        <p className="text-center mt-3">
          {' '}
          Ingresa el correo que usaste para registrarte{' '}
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            id="email"
            label="Correo electrónico"
            type="email"
            {...register('email', { required: true })}
          />
          <div className="flex items-center justify-center mt-5">
            <Button
              type="submit"
              className="text-center bg-blue-500 text-white py-2 px-7 rounded-full"
            >
              Verificar
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Verificacion
