// -> Components
import OptionSelector from '../OptionSelector'

// -> Icons
import ChangePassword from '@mui/icons-material/LockResetOutlined'
import ChangeEmail from '@mui/icons-material/EmailOutlined'
import LogOut from '@mui/icons-material/ExitToAppOutlined'

const PrefModal = () => {
  return (
    <div className="grid grid-cols-1 gap-0 border-b border-lgray h-[272px] overflow-auto">
      <OptionSelector text={'Cambia tu contraseña'}>
        <ChangePassword
          className="opacity-50 ml-4 text-tertiary"
          style={{ fontSize: '4rem' }}
        ></ChangePassword>
      </OptionSelector>
      <OptionSelector text={'Cambia tu correo Electrónico'}>
        <ChangeEmail
          className="opacity-50 ml-4 text-primary"
          style={{ fontSize: '4rem' }}
        ></ChangeEmail>
      </OptionSelector>
      <OptionSelector
        text={'Cerrar sesión'}
        className={'hover:border-red-400  hover:bg-red-200'}
      >
        <LogOut
          className="opacity-30 ml-4 text-red-950"
          style={{ fontSize: '4rem' }}
        ></LogOut>
      </OptionSelector>
    </div>
  )
}

export default PrefModal
