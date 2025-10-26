import Input from '../components/Input'
import { useForm } from 'react-hook-form'
import Checkbox from '../components/Checkbox'
import Button from '../components/Button'
import background1 from '../assets/background1.webp'

import { setNotification } from '../store/slices/notificationSlice'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { setAuthUser, setIsLoggedIn } from '../store/slices/authSlice'
import loginService from '../services/loginService'
import { useTranslation } from 'react-i18next'

const Login = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { register, handleSubmit, reset } = useForm()

  const onSubmit = async (data) => {
    try {
      const request = await loginService.loginUser(data)

      if (request.status === 200) {
        const { token, user } = request.data.results

        dispatch(
          setNotification({
            title: t('errors.success'),
            text: t('errors.correctCredentials'),
            icon: 'success',
            timer: 1000,
          })
        )

        localStorage.setItem('token', token)
        dispatch(setIsLoggedIn(true))
        dispatch(
          setAuthUser({
            ...user,
            idUser: user.idUsuario,
            email: user.correo,
            nombre: user.nombre,
          })
        )
        reset()
        navigate('/')
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        dispatch(
          setNotification({
            title: t('errors.oops'),
            text: t('errors.invalidCredentials'),
            icon: 'error',
          })
        )
      } else {
        console.error('Error:', error.message)
        dispatch(
          setNotification({
            title: t('errors.error'),
            text: `${t('errors.errorOccurred')}: ${error.message}`,
            icon: 'error',
          })
        )
      }
    }
  }

  return (
    <div className="flex items-center justify-center md:h-screen-minus-navbar">
      <img
        src={background1}
        alt={t('products.backgroundAlt')}
        className="absolute object-cover -z-10 blur-sm "
      />
      <div className="bg-white p-8 rounded shadow-md w-full max-w-3xl">
        <h1 className="font-black text-5xl text-center">
          {' '}
          {t('auth.welcomeToCiclomart')}
        </h1>
        <p className="text-center mt-3">{t('auth.pleaseEnterYourData')}</p>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <Input
            id="email"
            label={t('auth.email')}
            type="email"
            {...register('email', { required: true })}
          />
          <Input
            id="password"
            label={t('auth.password')}
            type="password"
            {...register('password', { required: true })}
          />
          <div className="flex items-center justify-between">
            <Checkbox
              id="rememberMe"
              {...register('rememberMe', { required: false })}
            >
              {t('auth.rememberMe')}
            </Checkbox>
            <Link
              to="/verificacion"
              className="text-sm text-blue-500 hover:underline text-center"
            >
              {t('auth.forgotPassword')}
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <Button
              type="submit"
              className="text-center bg-blue-500 text-white py-2 px-7 rounded-full"
            >
              {t('auth.loginButton')}
            </Button>
          </div>
          <p className="text-center mt-3">
            {t('auth.noAccount')}{' '}
            <Link to="/register" className="text-blue-500 hover:underline">
              {t('auth.signUpLink')}
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
