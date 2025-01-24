//-> Utilidades
import { useState } from 'react'
import { useSelector } from 'react-redux'

//-> Componentes
import CardButton from '../CardButton.jsx'
import InfoModal from '../Modals/InfoModal.jsx'
import SecurityModal from '../Modals/SecurityModal.jsx'
import PrefModal from '../Modals/PrefModal.jsx'

//-> Iconos
import SettingsIcon from '@mui/icons-material/TuneOutlined'
import Security from '@mui/icons-material/GppGoodOutlined'
import CardIcon from '@mui/icons-material/BadgeOutlined'

const Settings = () => {
  const authUser = useSelector((state) => state.auth.authUser)
  const [showInfoModal, setShowInfoModal] = useState(false)
  const [showSecurityModal, setShowSecurityModal] = useState(false)
  const [showPrefModal, setShowPrefModal] = useState(false)

  /*Allows modals show*/
  const handleModalShow = (TypeModal) => {
    /*Utiliza las utilidades del DOM-API para ocultar la barra scroll*/

    document.body.style.overflow = 'hidden'
    if (TypeModal === '1') {
      /*Activate Modal*/
      setShowInfoModal(true)
    } else if (TypeModal === '2') {
      setShowSecurityModal(true)
    } else if (TypeModal === '3') {
      setShowPrefModal(true)
    }
  }

  return (
    <div className=" mt-8 mx-[105px] bg-lgray h-80 w-auto shadow-2xl rounded-3xl ">
      <ul className="h-full">
        {/*Grupo de botones para configuraciones*/}
        <li className="h-1/3">
          <CardButton
            arrow="2"
            className=" flex h-full hover:rounded-t-3xl"
            onClick={() => {
              handleModalShow('1')
              /*Using DOM-API utilities for disable scrollbar temporaly*/
            }}
          >
            <CardIcon className="ml-8" style={{ fontSize: '3.5rem' }} />
            <div className="flex flex-col w-full">
              <b className="flex flex-col w-full">Información personal</b>
              <p>Tus datos de identidad y contacto</p>
            </div>
          </CardButton>
        </li>
        <li className="h-1/3">
          <CardButton
            arrow="2"
            className="h-full border-y"
            onClick={() => {
              handleModalShow('2')
            }}
          >
            <Security className="ml-8" style={{ fontSize: '3.5rem' }} />
            <div className="flex flex-col w-full">
              <b className="flex flex-col w-full">Seguridad</b>
              <p>Configuración de inicio de sesión</p>
            </div>
          </CardButton>
        </li>
        <li className="h-1/3">
          <CardButton
            arrow="2"
            className="h-full hover:rounded-b-3xl"
            onClick={() => {
              handleModalShow('3')
            }}
          >
            <SettingsIcon className="ml-8" style={{ fontSize: '3.5rem' }} />
            <div className="flex flex-col w-full">
              <b className="flex flex-col w-full">Preferencias</b>
              <p>Personaliza el funcionamiento de la aplicación</p>
            </div>
          </CardButton>
        </li>
      </ul>
      {/* Modals show*/}
      {showInfoModal ? (
        /*Interesant opacity Tailwindcss documentation https://tailwindcss.com/docs/upgrade-guide#new-opacity-modifier-syntax*/
        <InfoModal data={[authUser]} setShowInfoModal={setShowInfoModal} />
      ) : null}
      ,
      {showSecurityModal ? (
        <SecurityModal setShowSecurityModal={setShowSecurityModal} />
      ) : null}
      ,
      {showPrefModal ? <PrefModal setShowPrefModal={setShowPrefModal} /> : null}
    </div>
  )
}

export default Settings
