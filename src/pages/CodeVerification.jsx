import Input from '../components/Input'
import { useForm } from 'react-hook-form'
import Button from '../components/Button'
import { setNotification } from '../store/slices/notificationSlice'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import loginService from '../services/loginService'
import apiService from '../services/apiService'
import { clearLoading, setLoading } from '../store/slices/loadingSlice'
import background1 from '../assets/background1.webp'



const CodeVerification = () => {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const code = searchParams.get('code') // Get the 'code' query parameter

  const { token } = useParams()
  const { register, handleSubmit, reset } = useForm()



  const onSubmit = async (data) => {
  
    try {
      dispatch(setLoading())
      const request = await loginService.validateCode(data, token)
      if (request.status === 200) {
        const registro = await apiService.createUsuario({
          nombre: request.data.nombre,
          apellido: request.data.apellido,
          email: request.data.correo,
          password: request.data.password,
        })

        if (registro) {
          dispatch(clearLoading())
          dispatch(
            setNotification({
              title: 'Usuario creado',
              text: `El usuario ha sido creado`,
              icon: 'success',
            })
          )

          navigate('/login')
        }
      }
    } catch (error) {
      dispatch(clearLoading())
      if (error.response && error.response.status === 400) {
        dispatch(
          setNotification({
            title: '¡ups!',
            text: 'No coinciden los códigos',
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

  /*if (code) {
    // Si el usuario hizo click en el link de verificación
    onSubmit({ code }) // Llamar a la función onSubmit con el código
  }*/



  return (
    <div className="flex items-center justify-center h-screen-minus-navbar">
      <img
        src={background1}
        alt="Fondo de bicicletas"
        className="absolute object-cover -z-10 blur-sm "
      />
      <div className="bg-white p-8 rounded shadow-md w-400 max-w-4xl">
        <h1 className="font-black text-5xl text-center">
          {' '}
          Verificación de cuenta{' '}
        </h1>
        <p className="text-center mt-3">
          {' '}
          Ingresa el código de confirmación que se envió a tu correo{' '}
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            id="code"
            label="Código"
            type="number"
            {...register('code', { required: true })}
          />
          <div className="flex items-center justify-center mt-5">
            <Button
              type="submit"
              className="text-center bg-tertiary text-white py-2 px-7 rounded-full"
            >
              Continuar
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CodeVerification
