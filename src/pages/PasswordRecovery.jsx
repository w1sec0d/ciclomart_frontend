import Input from '../components/Input'
import { useForm } from 'react-hook-form'
import Button from '../components/Button'

import { setNotification } from '../store/slices/notificationSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import authService from '../services/authService'
import { useTranslation } from 'react-i18next'
import background1 from '../assets/background1.webp'

const PasswordRecovery = () => {
  const { t, i18n } = useTranslation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { token } = useParams()
  const authUser = useSelector((state) => state.auth.authUser)

  const { register, handleSubmit, reset } = useForm()

  const onSubmit = async (data) => {
    try {
      if (data.password === data['password-confirm']) {
        const request = await authService.recoveryPassword(
          data.password,
          token,
          i18n.language || 'es'
        )
        if (request.status === 200) {
          dispatch(
            setNotification({
              title: t('errors.success'),
              text: t('errors.passwordUpdated'),
              icon: 'success',
            })
          )

          setTimeout(() => {
            authUser ? navigate('/profile') : navigate('/login')
          }, 2000)
        } else {
          dispatch(
            setNotification({
              title: t('errors.oops'),
              text: t('errors.errorTryAgain'),
              icon: 'error',
            })
          )

          authUser ? navigate('/profile') : navigate('/login')
        }
      } else {
        dispatch(
          setNotification({
            title: t('errors.oops'),
            text: t('errors.passwordsDontMatch'),
            icon: 'error',
          })
        )

        reset()
      }
    } catch (error) {
      dispatch(
        setNotification({
          title: t('errors.oops'),
          text: `${t('errors.errorTryAgain')} ${error.message}`,
          icon: 'error',
        })
      )
      authUser ? navigate('/profile') : navigate('/login')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen by-gray-100">
      <img
        src={background1}
        alt={t('products.backgroundAlt')}
        className="absolute object-cover -z-10 blur-sm "
      />
      <div className="bg-white p-8 rounded shadow-md w-full max-w-4xl">
        <h1 className="font-black text-5xl text-center">
          {' '}
          {t('auth.passwordRecovery')}{' '}
        </h1>
        <p className="text-center mt-3">{t('auth.enterNewPassword')}</p>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <Input
            id="password"
            label={t('auth.password')}
            type="password"
            {...register('password', { required: true })}
          />
          <Input
            id="password-confirm"
            label={t('auth.confirmPassword')}
            type="password"
            {...register('password-confirm', { required: true })}
          />
          <div className="flex items-center justify-center">
            <Button
              type="submit"
              className="text-center bg-blue-500 text-white py-2 px-7 rounded-full"
            >
              {t('auth.changePassword')}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PasswordRecovery
