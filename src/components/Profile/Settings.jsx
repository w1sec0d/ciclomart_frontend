//-> Components
import CardButton from '../CardButton'

//-> Icons
import SettingsIcon from '@mui/icons-material/TuneOutlined'
import Security from '@mui/icons-material/GppGoodOutlined'
import Card from '@mui/icons-material/BadgeOutlined'

const Settings = () => {
  return (
    <div className="mt-8 mx-[105px] bg-lgray h-80 w-auto shadow-2xl rounded-3xl ">
      <ul className="h-full">
        <li className="h-1/3">
          <CardButton arrow="2" className=" flex h-full hover:rounded-t-3xl">
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
              <b className="flex flex-col w-full">Información personal</b>
              <p>Personaliza el funcionamiento de la aplicación</p>
            </div>
          </CardButton>
        </li>
      </ul>
    </div>
  )
}

export default Settings
