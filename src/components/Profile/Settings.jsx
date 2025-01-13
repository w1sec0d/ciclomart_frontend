//-> Components
import CardButton from './CardButton.jsx'
import InfoModal from './InfoModal.jsx'

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

  const user = [
    {
      idUsuario: 1,
      nombre: 'Carlos David',
      apellido: 'Ramírez Muñoz',
      edad: 29,
      rol: 'Comprador',
      correo: 'carlos.ramirez@gmail.com',
      direccion: 'Calle 45 #23-89, Bogotá',
      telefono: '3115678901',
      username: 'carlos.ramirez',
      password: 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6',
      fechaRegistro: '2024-01-10 14:35:22',
    },
  ]

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
        <InfoModal data={user} setShowInfoModal={setShowInfoModal} />
      ) : null}
    </div>
  )
}

export default Settings
