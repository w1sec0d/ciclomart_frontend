import { useParams, Link } from 'react-router-dom'
import background1 from '../assets/background1.webp'
import { CheckCircle, Cancel } from '@mui/icons-material'

const RequestResult = ({
  message = 'Operación realizada con éxito',
  success = true,
  subtitle,
  children,
}) => {
  // chequea el tipo de petición para mostrar el mensaje adecuado
  const { type, idProducto } = useParams()
  switch (type) {
    case 'purchaseComplete':
      message = '¡Compra exitosa!'
      children = (
        <p>
          Puedes{' '}
          <Link to="/profile" className="text-primary font-bold">
            ir a tu perfil
          </Link>{' '}
          para ver la compra
        </p>
      )
      subtitle = 'Gracias por confiar en CicloMart'
      success = true
      break
    case 'purchaseFailed':
      message = 'Ocurrió un error en la compra :('
      children = <p>Porfavor, inténtalo de nuevo más tarde</p>
      success = false
      break
    case 'sellerRegistrationSuccess':
      message = '¡Registro como vendedor exitoso!'
      children = (
        <p>
          Puedes{' '}
          <Link to="/publish" className="text-primary font-bold">
            publicar tu primer producto
          </Link>{' '}
          ahora.
        </p>
      )
      subtitle = 'Gracias por unirte a CicloMart como vendedor'
      success = true
      break
    case 'publishSuccess':
      message = '!Tu producto ha sido publicado!'
      success = true
      children = (
        <p>
          Puedes ver tus productos publicados{' '}
          <Link to="/profile" className="text-primary font-bold">
            aquí
          </Link>{' '}
        </p>
      )
      subtitle = 'Tu procto ahora puede encontrarse en CicloMart'
      success = true
  }

  const textColor = success ? 'text-green-500' : 'text-red-500'

  return (
    <div className="flex items-center justify-center h-screen-minus-navbar text-center">
      <img
        src={background1}
        alt="Fondo de bicicletas"
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
