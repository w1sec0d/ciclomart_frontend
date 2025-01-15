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
    formState: { errors },
  } = useForm()

  const sendEmail = async (values) => {
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

  console.log('errors', errors)
  const onSubmit = async (data) => {
    // if (
    //   errors.email === '' &&
    //   errors.password === '' &&
    //   errors.invalid === ''
    // ) {
    //   const validateEmail = await sendEmail(data)
    //   const verifirEmail = await verifyEmail(data)
    //   if (verifirEmail) {
    //     dispatch(
    //       setNotification({
    //         title: '¡Ya existe un usuairo!',
    //         text: 'Ya existe un usuario con este correo.',
    //         icon: 'error',
    //       })
    //     )
    //   } else {
    //     if (validateEmail) {
    //       dispatch(
    //         setNotification({
    //           title: '¡Éxito!',
    //           text: 'Hola te enviamos un código para terminar el registro.',
    //           icon: 'success',
    //         })
    //       )
    //       reset() // Clear form
    //     }
    //   }
    // }
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
          id="password-confirm"
          label="Confirmar contraseña"
          type="password"
          {...register('passwordConfirm', {
            required: 'Password is required',
            pattern: {
              value: passwordRegex,
              message:
                'La contraseña debe tener al menos 6 caracteres, una letra mayúscula, una letra minúscula y un número.',
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
