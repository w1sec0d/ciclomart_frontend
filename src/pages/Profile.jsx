//-> Components
import CardButton from '../components/CardButton'

//-> Icons
import ShoppingBag from '@mui/icons-material/LocalMallOutlined'
import Store from '@mui/icons-material/StorefrontOutlined'
import Tag from '@mui/icons-material/LocalOfferOutlined'
import Settings from '@mui/icons-material/TuneOutlined'
import Security from '@mui/icons-material/GppGoodOutlined'
import Card from '@mui/icons-material/BadgeOutlined'

//->Images
import Photo from '../assets/userPhoto.png'
import Logo from '../assets/logoVector.svg'

//->Utils
import { useState } from 'react'

const Profile = () => {
  const [hoverPhoto, setHoverPhoto] = useState(false)

  console.log(hoverPhoto)
  return (
    <section className="flex flex-row h-screen">
      {/* Side Bar */}
      <div className="bg-lgray w-1/6 h-full shadow-2xl flex flex-col">
        <ul>
          <li>
            <CardButton>
              <ShoppingBag className="ml-2" />
              <b className="flex flex-col w-full">Compras</b>
            </CardButton>
            <hr />
          </li>
          <li>
            <CardButton>
              <Tag className="ml-2" />
              <b className="flex flex-col w-full">Ventas</b>
            </CardButton>
            <hr />
          </li>
          <li>
            <CardButton>
              <Store className="ml-2" />
              <b className="flex flex-col w-full">Ventas</b>
            </CardButton>
            <hr />
          </li>
        </ul>
        <div className="h-full flex justify-center">
          <img
            src={Logo}
            className="w-[160px] h-[140px] mt-8 px-1 opacity-60 grayscale"
          />
        </div>
      </div>
      {/* Main Content */}
      <div className="flex flex-col w-5/6 h-full">
        {/*General Information*/}
        <div
          className="flex items-center mt-8 mx-[170px] bg-lgray h-44 w-auto 
          rounded-l-[16rem]  rounded-r-[16rem] shadow-sm pl-5 on"
        >
          <div className="flex relative h-5/6">
            <img
              src={Photo}
              className="h-full transition duration-200 ease-in-out hover:scale-110 hover:opacity-80 hover:cursor-pointer"
              onMouseEnter={() => setHoverPhoto(true)}
              onMouseOut={() => setHoverPhoto(false)}
            />
            {hoverPhoto ? (
              <b className="pointer-events-none absolute top-1/2 left-1/2 text-lg -translate-x-1/2 -translate-y-1/2 ">
                Editar
              </b>
            ) : null}
          </div>
          <div className="flex flex-col items-center lg:ml-[132px]">
            <b className="text-4xl">¡Hola Usuario!</b>
            <p className="text-2xl">usuario@correo.com</p>
            <p className="text-xl">Eres un ciclomáster</p>
            <p className="text-lg">Te uniste el 20/10/24</p>
          </div>
        </div>

        {/*Settings*/}
        <div className="mt-8 mx-[105px] bg-lgray h-80 w-auto shadow-2xl rounded-3xl ">
          <ul className="h-full">
            <li className="h-1/3">
              <CardButton
                arrow="2"
                className=" flex h-full hover:rounded-t-3xl"
              >
                <Card className="ml-8" style={{ fontSize: '3.5rem' }} />
                <div className="flex flex-col w-full">
                  <b className="flex flex-col w-full">Información personal</b>
                  <p>Tus datos de identidad y contacto</p>
                </div>
              </CardButton>
            </li>
            <li className="h-1/3">
              <CardButton arrow="2" className="h-full border-y">
                <Security className="ml-8" style={{ fontSize: '3.5rem' }} />
                <div className="flex flex-col w-full">
                  <b className="flex flex-col w-full">Seguridad</b>
                  <p>Configuración de inicio de sesión</p>
                </div>
              </CardButton>
            </li>
            <li className="h-1/3">
              <CardButton arrow="2" className="h-full hover:rounded-b-3xl">
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
