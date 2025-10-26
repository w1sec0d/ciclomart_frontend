// Components
import OptionSelector from '../OptionSelector'

// Icons
import ChangePassword from '@mui/icons-material/LockResetOutlined'
import LogOut from '@mui/icons-material/ExitToAppOutlined'

// Utils
import logOut from '../../../../utils/logOut'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { cleanShowModal } from '../../../../store/slices/showModalSlice'
import loginService from '../../../../services/loginService'
import { setNotification } from '../../../../store/slices/notificationSlice'
import { clearLoading, setLoading } from '../../../../store/slices/loadingSlice'
import { useTranslation } from 'react-i18next'

const SecurityModal = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const activeModal = useSelector((state) => state.showModal.activeModal)
  const authUser = useSelector((state) => state.auth.authUser)

  const handleChangePassword = async () => {
    if (window.confirm(t('profile.changePasswordConfirm'))) {
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
              title: t('profile.changePasswordSuccess'),
              text: t('profile.changePasswordSuccessText'),
              icon: 'success',
              timer: 5000,
            })
          )
        } else {
          dispatch(
            setNotification({
              title: t('profile.changePasswordError'),
              text: t('profile.changePasswordErrorText'),
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
        text={t('profile.changePassword')}
        onClick={handleChangePassword}
      >
        <ChangePassword
          className="opacity-50 ml-4 text-tertiary"
          style={{ fontSize: '4rem' }}
        ></ChangePassword>
      </OptionSelector>
      <OptionSelector
        text={t('profile.logOut')}
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
