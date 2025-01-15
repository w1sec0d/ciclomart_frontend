/*-> Icons*/
import Quit from '@mui/icons-material/ClearOutlined'
import ChangePassword from '@mui/icons-material/LockResetOutlined'
import ChangeEmail from '@mui/icons-material/EmailOutlined'
import LogOut from '@mui/icons-material/ExitToAppOutlined'

const PrefModal = ({ setShowPrefModal = () => {} }) => {
  return (
    <div
      className="flex items-center justify-center absolute inset-0 left-0 h-full w-full z-10 bg-gray/60 "
      onClick={() => {
        setShowPrefModal(false)
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
                setShowPrefModal(false)
                document.body.classList.remove('overflow-hidden')
              }}
            ></Quit>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-0 border-b border-lgray h-[272px] overflow-auto">
          <div className="border-b border-lgray flex flex-row items-center hover:border-b hover:border-t hover:border-black hover:cursor-pointer hover:bg-lgray hover:animate-pulse">
            <ChangePassword
              className="opacity-50 ml-4 text-tertiary"
              style={{ fontSize: '4rem' }}
            ></ChangePassword>
            <div className="h-full w-full flex flex-col justify-center items-center">
              <b className="text-2xl">Cambia tu contraseña</b>
            </div>
          </div>
          <div className="border-b border-lgray flex flex-row items-center hover:border-b hover:border-t hover:border-black hover:cursor-pointer hover:bg-lgray hover:animate-pulse">
            <ChangeEmail
              className="opacity-50 ml-4 text-primary"
              style={{ fontSize: '4rem' }}
            ></ChangeEmail>
            <div className="h-full w-full flex flex-col justify-center items-center">
              <b className="text-2xl">Cambia tu Correo Electrónico</b>
            </div>
          </div>
          <div className="border-b border-lgray flex flex-row items-center hover:border-b hover:border-t hover:border-red-400 hover:cursor-pointer hover:bg-red-200 hover:animate-pulse">
            <LogOut
              className="opacity-30 ml-4 text-red-950"
              style={{ fontSize: '4rem' }}
            ></LogOut>
            <div className="h-full w-full flex flex-col justify-center items-center">
              <b className="text-2xl ">Cerrar sesión</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrefModal
