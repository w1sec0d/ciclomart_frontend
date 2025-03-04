// -> Componentes
import Button from '../../../Button'
import UserData from '../UserData'
import randomId from '../../../../utils/randomId'
import { useSelector } from 'react-redux'

const InfoModal = ({ data }) => {
  // Parametros de la aplicacion en Mercado Pago
  const client_id = import.meta.env.VITE_MP_CLIENT_ID
  const redirect_uri = import.meta.env.VITE_MP_REDIRECT_URI
  const randomIdValue = randomId()
  const rolUsuario = useSelector((state) => state.auth.authUser.rol)
  const idUsuario = useSelector((state) => state.auth.authUser.idUsuario)
  const state = `${randomIdValue},${idUsuario}`

  // Codificar el state
  const encodedState = encodeURIComponent(state)
  console.log('encodedState', encodedState)

  // Datos del usuario
  const { nombre, apellido, edad, rol, telefono, username, correo, direccion } =
    data

  return (
    <>
      {data.length != 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          <UserData title="Nombre:" dataItem={nombre} />
          <UserData title="Apellido:" dataItem={apellido} />
          <UserData className="md:border-l" title="Edad:" dataItem={edad} />
          <UserData title="Rol:" dataItem={rol} />
          <UserData title="Telefono:" dataItem={telefono} />
          <UserData title="Usuario:" dataItem={username} />
          <UserData
            className="col-span-1 md:col-span-3"
            title="Correo:"
            dataItem={correo}
          />
          <UserData
            className="col-span-1 md:col-span-3 md:border-b-0"
            title="Dirección:"
            dataItem={direccion}
          />
          {rolUsuario === 'comprador' && (
            <Button
              to={`https://auth.mercadopago.com/authorization?client_id=${client_id}&response_type=code&platform_id=mp&state=${encodedState}&redirect_uri=${redirect_uri}`}
              className="col-span-1 md:col-span-3"
            >
              Registrarme como vendedor
            </Button>
          )}
        </div>
      ) : null}
    </>
  )
}

export default InfoModal
