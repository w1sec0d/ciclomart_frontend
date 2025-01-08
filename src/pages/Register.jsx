// State
import { setNotification } from '../store/slices/notificationSlice'
import { useDispatch } from 'react-redux'
// Images
import registerImage from '../assets/register.png'
import logo from '../assets/logo.png'
// Components
import Input from '../components/Input'
import Button from '../components/Button'
import Checkbox from '../components/Checkbox'
// Forms
import { useForm } from 'react-hook-form'
// Services
import apiService from '../services/apiService'

const Register = () => {
  const dispatch = useDispatch()

  dispatch(
    setNotification({
      title: 'Hola Redux!',
      text: 'Esto es una notificación',
      icon: 'info',
    })
  )

  const {
    register,
    handleSubmit,
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
    }
  }

  return (
    <section className="flex flex-col md:flex-row">
      <div className="bg-white md:w-3/5 p-8">
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
      </div>
      <div className="bg-primary md:w-2/5">
        <img
          src={registerImage}
          alt="Imagen de una persona sonriendo en una bicicleta y saludando"
        />
      </div>
    </section>
  )
}

export default Register
