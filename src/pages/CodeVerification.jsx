import Input from '../components/Input'
import { useForm } from 'react-hook-form'
import Button from '../components/Button'
import { useEffect } from 'react'
import { setNotification } from '../store/slices/notificationSlice'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import loginService from '../services/loginService'
import apiService from '../services/apiService'

const CodeVerification = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { token } = useParams()

  const { register, handleSubmit, reset } = useForm()

  const onSubmit = async (data) => {
    try {
      const request = await loginService.validateCode(data, token)
      if (request.status === 200) {
        const registro = await apiService.createUsuario({
          nombre: request.data.nombre,
          apellido: request.data.apellido,
          email: request.data.correo,
          password: request.data.password,
        })

        if (registro) {
          dispatch(
            setNotification({
              title: 'Usuario creado',
              text: `El usuario ha sido creado`,
              icon: 'success',
            })
          )

          setTimeout(() => {
            navigate('/login')
          }, 2000)
        }
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        dispatch(
          setNotification({
            title: '¡ups!',
            text: 'No coinciden los código.',
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
    <div className="flex items-center justify-center min-h-screen by-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-400 max-w-4xl">
        <h1 className="font-black text-5xl text-center">
          {' '}
          Verificación código{' '}
        </h1>
        <p className="text-center mt-3">
          {' '}
          Ingresa el código que se le envio al correo{' '}
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            id="code"
            label="codigo verificacion"
            type="number"
            {...register('code', { required: true })}
          />
          <div className="flex items-center justify-center mt-5">
            <Button
              type="submit"
              className="text-center bg-blue-500 text-white py-2 px-7 rounded-full"
            >
              verificar
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CodeVerification
