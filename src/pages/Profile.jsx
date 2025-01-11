import CardButton from '../components/CardButton'

//-> Icons
import ShoppingBag from '@mui/icons-material/LocalMallOutlined'
import Store from '@mui/icons-material/StorefrontOutlined'
import Tag from '@mui/icons-material/LocalOfferOutlined'

import Settings from '@mui/icons-material/TuneOutlined'
import Security from '@mui/icons-material/GppGoodOutlined'
import Card from '@mui/icons-material/BadgeOutlined'

const Profile = () => {
  return (
    <section className="flex flex-row h-screen">
      {/* Side Bar */}
      <div className="bg-lgray w-1/6 h-full shadow-2xl">
        <ul>
          <li>
            <CardButton to="/register">
              <ShoppingBag className="ml-2" />
              <b className="flex flex-col w-full">Compras</b>
            </CardButton>
            <hr />
          </li>
          <li>
            <CardButton to="/register">
              <Tag className="ml-2" />
              <b className="flex flex-col w-full">Ventas</b>
            </CardButton>
            <hr />
          </li>
          <li>
            <CardButton to="/register">
              <Store className="ml-2" />
              <b className="flex flex-col w-full">Ventas</b>
            </CardButton>
            <hr />
          </li>
        </ul>
      </div>

      {/* Information */}
      <div className="flex flex-col w-5/6 h-full">
        <div className="mt-8 mx-[80px] bg-lgray h-44 w-auto"></div>

        {/*Settings*/}
        <div className="mt-8 mx-[95px] bg-lgray h-80 w-auto shadow-2xl rounded-md ">
          <ul className="h-full">
            <li className="h-1/3">
              <CardButton arrow="2" className="h-full mt-0">
                <Card className="ml-8" style={{ fontSize: '3.5rem' }} />
                <div className="flex flex-col w-full">
                  <b className="flex flex-col w-full">Información personal</b>
                  <p>Tus datos de identidad y contacto</p>
                </div>
              </CardButton>
              <hr className="c" />
            </li>
            <li className="h-1/3">
              <CardButton arrow="2" className="h-full mt-0">
                <Security className="ml-8" style={{ fontSize: '3.5rem' }} />
                <div className="flex flex-col w-full">
                  <b className="flex flex-col w-full">Seguridad</b>
                  <p>Configuración de inicio de sesión</p>
                </div>
              </CardButton>
              <hr />
            </li>
            <li className="h-1/3">
              <CardButton arrow="2" className="h-full mt-0">
                <Settings className="ml-8" style={{ fontSize: '3.5rem' }} />
                <div className="flex flex-col w-full">
                  <b className="flex flex-col w-full">Información personal</b>
                  <p>Personaliza el funcionamiento de la aplicación</p>
                </div>
              </CardButton>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
export default Profile
