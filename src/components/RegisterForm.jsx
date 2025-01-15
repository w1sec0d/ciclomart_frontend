import Input from './Input'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { setNotification } from '../store/slices/notificationSlice'
import apiService from '../services/apiService'
import Checkbox from './Checkbox'
import Button from './Button'
import loginService from '../services/loginService'

const RegisterForm = () => {
  const navigate = useNavigate()

  const [state, setState] = useState({
    errors: {},
  })

  const dispatch = useDispatch()
  const { register, handleSubmit, reset } = useForm()

  const sendEmail = async (values) => {
    //const email = values.email

    const request = await loginService.sendCodeRegister(values)
    if (request.status === 200) {
      return true
    }
    return false
  }

  const verifyEmail = async (values) => {
    const email = values.email
    const request = await loginService.verifyEmail(email)
    if (request.data.message) {
      return true
    }
    return false
  }

  const validation = (values) => {
    let error = {}
    error.email = ''
    error.password = ''
    error.invalid = ''

    if (values.password != values['password-confirm']) {
      error.invalid = 'Las contraseñas no coinciden'
    }

    // Expresión regular para validar el correo electrónico
    let emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
    if (!emailRegex.test(values.email)) {
      error.email = 'Correo electronico no valido'
    }

    //La contraseña debe tener al menos 8 caracteres, una letra mayuscula, una letra minuscula y un número
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    if (!passwordRegex.test(values.password)) {
      error.password =
        'La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número.'
    }

    return error
  }

  const onSubmit = async (data) => {
    const errors = validation(data)

    setState({
      ...state,
      errors: errors,
    })

    if (
      errors.email === '' &&
      errors.password === '' &&
      errors.invalid === ''
    ) {
      const validateEmail = await sendEmail(data)
      const verifirEmail = await verifyEmail(data)

      if (verifirEmail) {
        dispatch(
          setNotification({
            title: '¡Ya existe un usuairo!',
            text: 'Ya existe un usuario con este correo.',
            icon: 'error',
          })
        )
      } else {
        if (validateEmail) {
          alert('Hola te enviamos un código para terminar el registro.')
          dispatch(
            setNotification({
              title: '¡Éxito!',
              text: 'Hola te enviamos un código para terminar el registro.',
              icon: 'success',
            })
          )
          reset()
        }
      }

      /*const request = await apiService.createUsuario(data)
      if (request) {
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
      }*/
    }
    // Clear form
  }
  return (
    <>
      <h1 className="font-black text-5xl">Únete a CicloMart</h1>
      <p>Crea una cuenta gratuita o inicia sesión</p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Input
          id="email"
          label="Correo electrónico"
          type="email"
          {...register('email', { required: true })}
        />
        {state.errors.email && (
          <span className="text-red-500 text-xs">{state.errors.email}</span>
        )}
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
        {state.errors.password && (
          <span className="text-red-500 text-xs">{state.errors.password}</span>
        )}
        <Input
          id="password-confirm"
          label="Confirmar contraseña"
          type="password"
          {...register('password-confirm', { required: true })}
        />
        {state.errors.invalid && (
          <span className="text-red-500 text-xs">{state.errors.invalid}</span>
        )}
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
