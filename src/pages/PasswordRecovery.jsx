import Input from '../components/Input'
import { useForm } from 'react-hook-form'
import Button from '../components/Button'

import { setNotification } from '../store/slices/notificationSlice'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import loginService from '../services/loginService'

const PasswordRecovery = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { token } = useParams()

  const { register, handleSubmit, reset } = useForm()

  const onSubmit = async (data) => {
    try {
      //const request = await loginService.recoveryPassword(data,token);
      if (data.password === data['password-confirm']) {
        const request = await loginService.recoveryPassword(
          data.password,
          token
        )
        if (request.status === 200) {
          dispatch(
            setNotification({
              title: '¡Exito!',
              text: 'Su contraseña se ha actualizado correctamente',
              icon: 'success',
            })
          )

          setTimeout(() => {
            navigate('/login')
          }, 2000)
        } else {
          dispatch(
            setNotification({
              title: '¡Ups!',
              text: 'Occurrio un error. Vuelva a intentarlo',
              icon: 'error',
            })
          )
          navigate('/login')
        }
      } else {
        dispatch(
          setNotification({
            title: '¡Ups!',
            text: 'Las contraseñas no coinciden',
            icon: 'error',
          })
        )

        reset()
      }
    } catch (error) {
      dispatch(
        setNotification({
          title: '¡Ups!',
          text: `Occurrio un error. Vuelva a intentarlo ${error.message}`,
          icon: 'error',
        })
      )
      navigate('/login')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen by-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-4xl">
        <h1 className="font-black text-5xl text-center">
          {' '}
          Recuperación de contraseña{' '}
        </h1>
        <p className="text-center mt-3">
          Por favor ingresa tu nueva contraseña
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <Input
            id="password"
            label="Contraseña"
            type="password"
            {...register('password', { required: true })}
          />
          <Input
            id="password-confirm"
            label="Confirmar contraseña"
            type="password"
            {...register('password-confirm', { required: true })}
          />
          <div className="flex items-center justify-center">
            <Button
              type="submit"
              className="text-center bg-blue-500 text-white py-2 px-7 rounded-full"
            >
              Cambiar Contraseña
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PasswordRecovery
