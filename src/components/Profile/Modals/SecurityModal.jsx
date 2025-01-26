// -> Componentes
import ModalHeader from './ModalHeader'
import OptionSelector from './OptionSelector'

// -> Iconos
import ChangePassword from '@mui/icons-material/LockResetOutlined'
import ChangeEmail from '@mui/icons-material/EmailOutlined'
import LogOut from '@mui/icons-material/ExitToAppOutlined'

const SecurityModal = ({ onClose }) => {
  return (
    <div
      className="flex items-center justify-center absolute inset-0 left-0 h-full w-full z-10 bg-gray/60 "
      onClick={onClose}
    >
      <div
        className="w-[800px] h-[400px] bg-white  rounded-3xl -translate-y-8 shadow-2xl z-20 mx-4"
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <ModalHeader title="Preferencias" onClose={onClose} />

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
      </div>
    </div>
  )
}

export default SecurityModal
