//-> Components
import CardButton from './CardButton'

//-> Icons
import SettingsIcon from '@mui/icons-material/TuneOutlined'
import Security from '@mui/icons-material/GppGoodOutlined'
import Card from '@mui/icons-material/BadgeOutlined'

//-> Utils
import { useState } from 'react'

const Settings = () => {
  const [showInfoModal, setShowInfoModal] = useState(false)
  const [showSecurityModal, setShowSecurityModal] = useState(false)
  const [showPrefModal, setShowPrefModal] = useState(false)

  const handlerShowData = (TypeModal) => {
    if (TypeModal === '1') {
      /*Activate Modal*/
      setShowInfoModal(true)
      console.log('funciona')
    } else if (TypeModal === '2') {
      setShowSecurityModal(true)
    } else if (TypeModal === '3') {
      setShowPrefModal(true)
    }
  }

  return (
    <div className=" mt-8 mx-[105px] bg-lgray h-80 w-auto shadow-2xl rounded-3xl ">
      <ul className="h-full">
        <li className="h-1/3">
          <CardButton
            arrow="2"
            className=" flex h-full hover:rounded-t-3xl"
            onClick={() => {
              handlerShowData('1')
              /*Using DOM-API utilities for disable scrollbar temporaly*/
              document.body.classList.add('overflow-hidden')
            }}
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
            <SettingsIcon className="ml-8" style={{ fontSize: '3.5rem' }} />
            <div className="flex flex-col w-full">
              <b className="flex flex-col w-full">Preferencias</b>
              <p>Personaliza el funcionamiento de la aplicación</p>
            </div>
          </CardButton>
        </li>
      </ul>
      {showInfoModal ? (
        /*Interesant opacity Tailwindcss documentation https://tailwindcss.com/docs/upgrade-guide#new-opacity-modifier-syntax*/
        <div
          className="flex items-center justify-center absolute inset-0 left-0 h-full w-full z-10 bg-gray/60 "
          onClick={() => {
            setShowInfoModal(false)
          }}
        >
          <div className="w-[800px] h-[400px] bg-white z-10 rounded-3xl -translate-y-8 shadow-2xl">
            <div className="flex items-center h-[64px] w-full border-b border-lgray px-4">
              <b className="text-2xl">Información personal</b>
            </div>
            <div className="border-b border-lgray h-[272px] overflow-auto">
              <p className="px-4 py-4">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Settings
