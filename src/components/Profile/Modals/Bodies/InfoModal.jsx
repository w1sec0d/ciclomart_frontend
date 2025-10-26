// Components
import Button from '../../../Button'
import UserData from '../UserData'
import randomId from '../../../../utils/randomId'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

const InfoModal = ({ data }) => {
  const { t } = useTranslation()

  // Mercado Pago application parameters
  const client_id = import.meta.env.VITE_MP_CLIENT_ID
  const redirect_uri = import.meta.env.VITE_MP_REDIRECT_URI
  const randomIdValue = randomId()
  const rolUsuario = useSelector((state) => state.auth.authUser.rol)
  const idUsuario = useSelector((state) => state.auth.authUser.idUsuario)
  const state = `${randomIdValue},${idUsuario}`

  // Encode the state
  const encodedState = encodeURIComponent(state)

  // User data
  const { nombre, apellido, edad, rol, telefono, username, correo, direccion } =
    data

  return (
    <>
      {data.length != 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          <UserData title={t('profile.name')} dataItem={nombre} />
          <UserData title={t('profile.lastName')} dataItem={apellido} />
          <UserData
            className="md:border-l"
            title={t('profile.age')}
            dataItem={edad}
          />
          <UserData title={t('profile.role')} dataItem={rol} />
          <UserData title={t('profile.phone')} dataItem={telefono} />
          <UserData title={t('profile.username')} dataItem={username} />
          <UserData
            className="col-span-1 md:col-span-3"
            title={t('profile.email')}
            dataItem={correo}
          />
          <UserData
            className="col-span-1 md:col-span-3 md:border-b-0"
            title={t('profile.addressLabel')}
            dataItem={direccion}
          />
          {rolUsuario === 'comprador' && (
            <Button
              to={`https://auth.mercadopago.com/authorization?client_id=${client_id}&response_type=code&platform_id=mp&state=${encodedState}&redirect_uri=${redirect_uri}`}
              className="col-span-1 md:col-span-3"
            >
              {t('profile.registerAsSeller')}
            </Button>
          )}
        </div>
      ) : null}
    </>
  )
}

export default InfoModal
