// -> Componentes
import OptionSelector from '../OptionSelector'

// -> Iconos
import ChangePassword from '@mui/icons-material/LockResetOutlined'
import ChangeEmail from '@mui/icons-material/EmailOutlined'
import LogOut from '@mui/icons-material/ExitToAppOutlined'

//-> Utilidades
import logOut from '../../../../utils/logOut'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { cleanShowModal } from '../../../../store/slices/showModalSlice'
import loginService from '../../../../services/loginService'
import { setNotification } from '../../../../store/slices/notificationSlice'
import { clearLoading, setLoading } from '../../../../store/slices/loadingSlice'

const SecurityModal = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const activeModal = useSelector((state) => state.showModal.activeModal)
  const authUser = useSelector((state) => state.auth.authUser)

  const handleChangePassword = async () => {
    if (window.confirm('¿Estás seguro de que quieres cambiar tu contraseña?')) {
      try {
        dispatch(cleanShowModal())
        dispatch(setLoading(true))
        const request = await loginService.sendResetPasswordEmail(
          authUser.correo
        )
        if (request.status === 200) {
          dispatch(clearLoading(true))
          dispatch(
            setNotification({
              title: '¡Ya casi!',
              text: 'Hemos enviado un link de cambio de contraseña a tu dirección de correo electrónico',
              icon: 'success',
              timer: 5000,
            })
          )
        } else {
          dispatch(
            setNotification({
              title: 'Algo salio mal!',
              text: 'Algo ha fallado con tu solictud de cambio de contraseña, intentalo de nuevo más tarde',
              icon: 'error',
              timer: 5000,
            })
          )
        }
      } catch (error) {
        dispatch(clearLoading(true))
      }
    }
  }

  return (
    <div className="grid grid-cols-1 gap-0 h-full">
      <OptionSelector
        text={'Cambia tu contraseña'}
        onClick={handleChangePassword}
      >
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
        className={'border-0 hover:border-red-400  hover:bg-red-200'}
        onClick={() => logOut(dispatch, navigate, activeModal)}
      >
        <LogOut
          className="opacity-30 ml-4 text-red-950"
          style={{ fontSize: '4rem' }}
        ></LogOut>
      </OptionSelector>
    </div>
  )
}

export default SecurityModal
