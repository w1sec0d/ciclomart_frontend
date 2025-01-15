import Input from './Input'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { setNotification } from '../store/slices/notificationSlice'
import Checkbox from './Checkbox'
import Button from './Button'
import loginService from '../services/loginService'

const RegisterForm = () => {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/

  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm()
  const password = watch('password') // Watch password input

  const sendRegisterCode = async (values) => {
    const request = await loginService.sendRegisterCode(values)
    if (request.status === 200) {
      return true
    }
    return false
  }

  const onSubmit = async (data) => {
    try {
      const validateEmail = await sendRegisterCode(data)
      if (validateEmail) {
        dispatch(
          setNotification({
            title: '¡Éxito!',
            text: 'Hola te enviamos un código para terminar el registro.',
            icon: 'success',
          })
        )
        // reset() // Clear form
      }
    } catch (error) {
      // check error http response
      if (error.status === 400) {
        dispatch(
          setNotification({
            title: '¡Error!',
            text: error.response.data.message ?? 'ha ocurrido un error',
            icon: 'error',
          })
        )
      }
    }
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
        {errors.email && (
          <span className="text-red-500 text-xs">{errors.email.message}</span>
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
          {...register('password', {
            required: 'Password is required',
            pattern: {
              value: passwordRegex,
              message:
                'La contraseña debe tener al menos 6 caracteres, una letra mayúscula, una letra minúscula y un número.',
            },
          })}
        />
        {errors.password && (
          <span className="text-red-500 text-xs">
            {errors.password.message}
          </span>
        )}
        <Input
          id="passwordConfirm"
          label="Confirmar contraseña"
          type="password"
          {...register('passwordConfirm', {
            required: 'Password is required',
            validate: (value) =>
              value === password ||
              'Las contraseñas no coinciden, verifica de nuevo',
            pattern: {
              value: passwordRegex,
              message:
                'La contraseña debe tener al menos 6 caracteres, una letra mayúcula, una letra minúscula y un número.',
            },
          })}
        />
        {errors.passwordConfirm && (
          <span className="text-red-500 text-xs">
            {errors.passwordConfirm.message}
          </span>
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
