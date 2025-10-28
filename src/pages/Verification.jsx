import Input from '../components/Input'
import { useForm } from 'react-hook-form'
import Button from '../components/Button'

import { setNotification } from '../store/slices/notificationSlice'
import { useDispatch } from 'react-redux'
import authService from '../services/authService'
import { clearLoading, setLoading } from '../store/slices/loadingSlice'
import { useTranslation } from 'react-i18next'

import background1 from '../assets/background1.webp'

const VerificationPage = () => {
  const { t, i18n } = useTranslation()
  const dispatch = useDispatch()

  const { register, handleSubmit, reset } = useForm()

  const onSubmit = async (data) => {
    try {
      dispatch(setLoading(true))
      const request = await authService.sendResetPasswordEmail(
        data.email,
        i18n.language || 'es'
      )

      if (request.status === 200) {
        dispatch(clearLoading(true))
        dispatch(
          setNotification({
            title: t('errors.success'),
            text: t('errors.emailSent'),
            icon: 'success',
          })
        )
        reset()
      } else if (request.status === 401) {
        dispatch(
          setNotification({
            title: t('errors.oops'),
            text: t('errors.emailNotRegistered'),
            icon: 'error',
          })
        )
      }
    } catch (error) {
      dispatch(clearLoading(true))

      if (error.response && error.response.status === 401) {
        dispatch(
          setNotification({
            title: t('errors.oops'),
            text: t('errors.emailNotRegistered'),
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
    <div className="flex items-center justify-center py-20 lg:py-0 lg:min-h-screen bg-gray-100">
      <img
        src={background1}
        alt={t('products.backgroundAlt')}
        className="absolute object-cover -z-10 blur-sm "
      />
      <div className="bg-white p-8 rounded shadow-md w-400 max-w-4xl lg:-translate-y-9">
        <h1 className="font-black text-5xl text-center">
          {t('auth.verification')}
        </h1>
        <p className="text-center mt-3"> {t('auth.enterRegistrationEmail')} </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            id="email"
            label={t('auth.email')}
            type="email"
            {...register('email', { required: true })}
          />
          <div className="flex items-center justify-center mt-5">
            <Button
              type="submit"
              className="text-center bg-blue-500 text-white py-2 px-7 rounded-full"
            >
              {t('auth.verifyButton')}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default VerificationPage
