import { useEffect, useCallback } from 'react'
import Input from '../components/Input'
import { useForm } from 'react-hook-form'
import Button from '../components/Button'
import { setNotification } from '../store/slices/notificationSlice'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import authService from '../services/authService'
import { createUser } from '../services/userService'
import { clearLoading, setLoading } from '../store/slices/loadingSlice'
import background1 from '../assets/background1.webp'
import { useTranslation } from 'react-i18next'

const CodeVerificationPage = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const codeFromUrl = searchParams.get('code')

  const { token } = useParams()
  const { register, handleSubmit, setValue } = useForm()

  const onSubmit = useCallback(
    async (data) => {
      const { code } = data
      try {
        dispatch(setLoading())
        const request = await authService.validateCode({ code }, token)
        if (request.status === 200) {
          const registro = await createUser({
            nombre: request.data.results.nombre,
            apellido: request.data.results.apellido,
            email: request.data.results.correo,
            password: request.data.results.password,
            telefono: request.data.results.telefono,
          })

          if (registro) {
            dispatch(clearLoading())
            dispatch(
              setNotification({
                title: t('errors.userCreated'),
                text: t('errors.userCreatedSuccess'),
                icon: 'success',
              })
            )
            navigate('/login')
          }
        }
      } catch (error) {
        dispatch(clearLoading())
        if (error.response && error.response.status === 400) {
          dispatch(
            setNotification({
              title: t('errors.oops'),
              text: t('errors.codesMismatch'),
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
    },
    [token, dispatch, navigate, t]
  )

  useEffect(() => {
    if (codeFromUrl) {
      setValue('code', codeFromUrl)
      handleSubmit(onSubmit)({ code: codeFromUrl })
    }
  }, [codeFromUrl, setValue, handleSubmit, onSubmit])

  return (
    <div className="flex items-center justify-center h-screen-minus-navbar">
      <img
        src={background1}
        alt={t('products.backgroundAlt')}
        className="absolute object-cover -z-10 blur-sm "
      />
      <div className="bg-white p-8 rounded shadow-md w-400 max-w-4xl">
        <h1 className="font-black text-5xl text-center">
          {' '}
          {t('auth.accountVerification')}{' '}
        </h1>
        <p className="text-center mt-3"> {t('auth.enterConfirmationCode')} </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            id="code"
            label={t('auth.code')}
            type="number"
            {...register('code', { required: true })}
          />
          <div className="flex items-center justify-center mt-5">
            <Button
              type="submit"
              className="text-center bg-tertiary text-white py-2 px-7 rounded-full"
            >
              {t('auth.continue')}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CodeVerificationPage
