import { useParams, Link } from 'react-router-dom'
import background1 from '../assets/background1.webp'
import { CheckCircle, Cancel } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'

const RequestResult = ({ message, success = true, subtitle, children }) => {
  const { t } = useTranslation()

  // Set default message if not provided
  if (!message) {
    message = t('requestResult.operationSuccessful')
  }

  // Check the request type to show the appropriate message
  const { type, idProducto } = useParams()
  switch (type) {
    case 'purchaseComplete':
      message = t('requestResult.purchaseComplete')
      children = (
        <p>
          {t('requestResult.purchaseCompleteMessage')}{' '}
          <Link to="/profile" className="text-primary font-bold">
            {t('requestResult.goToYourProfile')}
          </Link>{' '}
          {t('requestResult.toViewThePurchase')}
        </p>
      )
      subtitle = t('requestResult.purchaseCompleteSubtitle')
      success = true
      break
    case 'purchaseFailed':
      message = t('requestResult.purchaseFailed')
      children = <p>{t('requestResult.pleaseTryAgainLater')}</p>
      success = false
      break
    case 'sellerRegistrationSuccess':
      message = t('requestResult.sellerRegistrationSuccess')
      children = (
        <p>
          {t('requestResult.purchaseCompleteMessage')}{' '}
          <Link to="/publish" className="text-primary font-bold">
            {t('requestResult.publishYourFirstProduct')}
          </Link>{' '}
          {t('requestResult.now')}
        </p>
      )
      subtitle = t('requestResult.sellerRegistrationSubtitle')
      success = true
      break
    case 'publishSuccess':
      message = t('requestResult.publishSuccess')
      success = true
      children = (
        <p>
          {t('requestResult.viewYourProducts')}{' '}
          <Link to="/profile" className="text-primary font-bold">
            {t('requestResult.here')}
          </Link>{' '}
        </p>
      )
      subtitle = t('requestResult.publishSuccessSubtitle')
      success = true
  }

  const textColor = success ? 'text-green-500' : 'text-red-500'

  return (
    <div className="flex items-center justify-center h-screen-minus-navbar text-center">
      <img
        src={background1}
        alt={t('requestResult.backgroundAlt')}
        className="absolute object-cover -z-10 blur-sm "
      />
      <div className="bg-white bg-opacity-90 p-10 rounded-lg shadow-lg flex flex-col justify-between w-1/2 max-w-[900px] h-full max-h-[300px]">
        <span>
          {success ? (
            <CheckCircle
              className={`text-5x ${textColor} mx-auto`}
              sx={{ fontSize: '5em' }}
            />
          ) : (
            <Cancel
              className={`text-5x ${textColor} mx-auto`}
              sx={{ fontSize: '5em' }}
            />
          )}
          <h1 className={`text-3xl font-bold ${textColor}`}>{message}</h1>
          {subtitle && <h2 className="text-sm font-light">{subtitle}</h2>}
        </span>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  )
}

export default RequestResult
