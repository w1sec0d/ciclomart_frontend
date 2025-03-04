//-> Utilidades
import { setShowModal } from '../../../store/slices/showModalSlice.js'
import { useDispatch } from 'react-redux'

//-> Componentes
import CardButton from '../CardButton.jsx'

//-> Iconos
import SettingsIcon from '@mui/icons-material/TuneOutlined'
import Security from '@mui/icons-material/GppGoodOutlined'
import CardIcon from '@mui/icons-material/BadgeOutlined'

const Settings = () => {
  const dispatch = useDispatch()

  const handleModalShow = (index) => {
    /*Utiliza las utilidades del DOM-API para ocultar la barra scroll*/
    // document.body.style.overflow = 'hidden'
    /*Hábilita al modal (index) para mostrarse*/
    dispatch(setShowModal({ activeModal: index }))
  }

  return (
    <div className=" mt-8 md:mx-[105px] bg-lgray h-80 w-auto shadow-2xl rounded-3xl ">
      <ul className="h-full">
        {/*Grupo de botones para configuraciones*/}
        <li className="h-1/2">
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
        <li className="h-1/2">
          <CardButton
            arrow="2"
            className="h-full border-t hover:rounded-b-3xl"
            onClick={() => handleModalShow(2)}
          >
            <Security className="ml-8" style={{ fontSize: '3.5rem' }} />
            <div className="flex flex-col w-full">
              <b className="flex flex-col w-full">Seguridad</b>
              <p>Configuración de inicio de sesión</p>
            </div>
          </CardButton>
        </li>
      </ul>
    </div>
  )
}

export default Settings
