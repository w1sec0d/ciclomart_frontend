/*-> Icons*/
import Quit from '@mui/icons-material/ClearOutlined'
import ChangePassword from '@mui/icons-material/LockResetOutlined'
import { colors } from '@mui/material'

const SecurityModal = ({ setShowSecurityModal = () => {} }) => {
  return (
    <div
      className="flex items-center justify-center absolute inset-0 left-0 h-full w-full z-10 bg-gray/60 "
      onClick={() => {
        setShowSecurityModal(false)
        document.body.classList.remove('overflow-hidden')
      }}
    >
      <div
        className="w-[800px] h-[400px] bg-white  rounded-3xl -translate-y-8 shadow-2xl z-20 mx-4"
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <div className="flex items-center h-[64px] w-full border-b border-lgray px-4">
          <b className="w-1/3 text-2xl">Seguridad</b>
          <div className="flex flex-row-reverse items-center w-2/3 h-full  ">
            <Quit
              className="hover:rounded-full hover:cursor-pointer transition duration-200 ease-in-out hover:scale-125"
              onClick={() => {
                setShowSecurityModal(false)
                document.body.classList.remove('overflow-hidden')
              }}
            ></Quit>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-0 border-b border-lgray h-[272px] overflow-auto">
          <div className="border-b border-lgray flex flex-row items-center grow-0 hover:cursor-pointer hover:bg-lgray">
            <ChangePassword
              className="opacity-30 ml-4"
              style={{ fontSize: '4rem' }}
            ></ChangePassword>
            <b className="text-2xl ml-52">Cambia tu contraseña</b>
          </div>
          <div>
            <ChangePassword
              className="opacity-30 ml-4"
              style={{ fontSize: '4rem' }}
            ></ChangePassword>
            <b className="text-2xl ml-52">Cambia tu Correo Electrónico</b>
          </div>
          <div>
            <ChangePassword
              className="opacity-30 ml-4"
              style={{ fontSize: '4rem' }}
            ></ChangePassword>
            <b className="text-2xl ml-20">Cerrar sesión</b>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecurityModal
