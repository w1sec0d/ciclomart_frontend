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

  //index 1 = Infomodal, index2 = SecModal, index3 = PrefModal
  const [ActiveModalIndex, setActiveModalIndex] = useState(0)

  const handleModalShow = (index) => {
    /*Utiliza las utilidades del DOM-API para ocultar la barra scroll*/
    document.body.style.overflow = 'hidden'
    /*Hábilita al modal (index) para mostrarse*/
    setActiveModalIndex(index)
  }

  return (
    <div className=" mt-8 mx-[105px] bg-lgray h-80 w-auto shadow-2xl rounded-3xl ">
      <ul className="h-full">
        {/*Grupo de botones para configuraciones*/}
        <li className="h-1/3">
          <CardButton
            arrow="2"
            className=" flex h-full hover:rounded-t-3xl"
            onClick={() => handleModalShow(1)}
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
            onClick={() => handleModalShow(2)}
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
            onClick={() => handleModalShow(3)}
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

      {ActiveModalIndex === 1 ? (
        <InfoModal data={[authUser]} setShowInfoModal={setShowInfoModal} />
      ) : ActiveModalIndex === 2 ? (
        <SecurityModal setShowSecurityModal={setShowSecurityModal} />
      ) : ActiveModalIndex === 3 ? (
        <PrefModal setShowPrefModal={setShowPrefModal} />
      ) : null}
    </div>
  )
}

export default Settings
