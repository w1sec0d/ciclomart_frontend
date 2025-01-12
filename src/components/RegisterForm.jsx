import Input from './Input'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { setNotification } from '../store/slices/notificationSlice'
import apiService from '../services/apiService'
import logo from '../assets/logo.png'
import Checkbox from './Checkbox'
import Button from './Button'

const RegisterForm = () => {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const request = await apiService.createUsuario(data)
    if (request) {
      dispatch(
        setNotification({
          title: 'Usuario creado',
          text: `El usuario ha sido creado`,
          icon: 'success',
        })
      )
      reset() // Clear form
    }
  }
  return (
    <>
      <img src={logo} alt="Logo de CicloMart" className="w-14 h-14 mb-5" />
      <h1 className="font-black text-5xl">Únete a CicloMart</h1>
      <p>Crea una cuenta gratuita o inicia sesión</p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Input
          id="email"
          label="Correo electrónico"
          type="email"
          {...register('email', { required: true })}
        />
        <div className="flex gap-4">
          <Input
            id="name"
            label="Nombres"
            className="w-1/2"
            {...register('nombre', { required: true })}
          />
          <Input
            id="surname"
            label="Apellidos"
            className="w-1/2"
            {...register('apellido', { required: true })}
          />
        </div>
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
        <div>
          <Checkbox id="terms" {...register('terms', { required: true })}>
            Acepto los <a href="/">Términos y condiciones</a>
          </Checkbox>
          <Button type="submit">Registrarse</Button>
        </div>
      </form>
    </>
  )
}

export default RegisterForm
