import Input from './Input'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { setNotification } from '../store/slices/notificationSlice'
import Checkbox from './Checkbox'
import Button from './Button'
import authService from '../services/authService'
import { Link, useNavigate } from 'react-router-dom'
import { clearLoading, setLoading } from '../store/slices/loadingSlice'
import { useTranslation } from 'react-i18next'

const RegisterForm = () => {
  const { t, i18n } = useTranslation()
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/
  const phoneRegex = /^[0-9]{10}$/

  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const password = watch('password')
  const navigate = useNavigate()

  const sendRegisterCode = async (values, language) => {
    const request = await authService.sendRegisterCode(values, language)
    if (request.status === 200) {
      return request.data.results
    }
    return false
  }

  const onSubmit = async (data) => {
    try {
      dispatch(setLoading())
      const validateEmail = await sendRegisterCode(data, i18n.language || 'es')

      if (validateEmail) {
        dispatch(clearLoading())
        navigate(`/verificationCode/${validateEmail.token}`)
      }
    } catch (error) {
      dispatch(clearLoading())
      // Check error http response
      if (error.status === 400) {
        dispatch(
          setNotification({
            title: t('errors.error'),
            text: error.response.data.message ?? t('errors.errorOccurred'),
            icon: 'error',
          })
        )
      } else if (error.status === 500) {
        dispatch(
          setNotification({
            title: t('errors.error'),
            text: t('errors.serverError'),
            icon: 'error',
          })
        )
      }
    }
  }
  return (
    <>
      <h1 className="font-black text-5xl">{t('auth.joinCiclomart')}</h1>
      <p>{t('auth.createAccountOrLogin')}</p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Input
          id="email"
          label={t('auth.email')}
          type="email"
          {...register('email', { required: true })}
        />
        {errors.email && (
          <span className="text-red-500 text-xs">{errors.email.message}</span>
        )}
        <div className="flex gap-4">
          <Input
            id="name"
            label={t('auth.names')}
            className="w-1/2"
            {...register('nombre', { required: true })}
          />
          <Input
            id="surname"
            label={t('auth.surnames')}
            className="w-1/2"
            {...register('apellido', { required: true })}
          />
        </div>
        <Input
          id="phone"
          label={t('auth.phone')}
          type="tel"
          {...register('telefono', {
            required: true,
            pattern: {
              value: phoneRegex,
              message: t('errors.invalidPhone'),
            },
          })}
        />
        {errors.telefono && (
          <span className="text-red-500 text-xs">
            {errors.telefono.message}
          </span>
        )}

        <Input
          id="password"
          label={t('auth.password')}
          type="password"
          {...register('password', {
            required: t('validation.passwordRequired'),
            pattern: {
              value: passwordRegex,
              message: t('validation.passwordRequirements'),
            },
          })}
        />

        {!errors.password ? (
          <p className="text-xs" style={{ color: '#A2C634' }}>
            {t('validation.passwordRequirements')}
          </p>
        ) : (
          <span className="text-red-500 text-xs">
            {errors.password.message}
          </span>
        )}
        <Input
          id="passwordConfirm"
          label={t('auth.confirmPassword')}
          type="password"
          {...register('passwordConfirm', {
            required: t('validation.passwordRequired'),
            validate: (value) =>
              value === password || t('errors.passwordsDontMatch'),
            pattern: {
              value: passwordRegex,
              message: t('validation.passwordRequirements'),
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
            {t('auth.acceptTerms')}{' '}
            <Link to="/terms" className="text-primary">
              {t('auth.termsLink')}
            </Link>{' '}
            {t('auth.and')}{' '}
            <Link to="/privacy" className="text-primary">
              {t('auth.privacyLink')}
            </Link>
            {errors.terms && (
              <span className="ml-5 text-red-500 text-xs">
                {t('errors.acceptTermsRequired')}
              </span>
            )}
          </Checkbox>

          <Button type="submit">{t('auth.registerButton')}</Button>
        </div>
      </form>
    </>
  )
}

export default RegisterForm
