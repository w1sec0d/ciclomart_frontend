//-> Utils
import { useSelector } from 'react-redux'
import { cleanShowModal } from '../../store/slices/showModalSlice'
import { useDispatch } from 'react-redux'

// -> Modals
import InfoModal from './Modals/InfoModal'
import PrefModal from './Modals/PrefModal'
import SecurityModal from './Modals/SecurityModal'

const SettingsModalShow = () => {
  const authUser = useSelector((state) => state.auth.authUser)
  const activeModal = useSelector((state) => state.showModal.activeModal)
  const dispatch = useDispatch()
  /*Cierra el modal abierto */
  const handleModalClose = () => {
    document.body.style.overflow = 'auto'
    dispatch(cleanShowModal())
  }

  /*Abre el modal de acuerdo al indice seleccionado*/
  return activeModal === 1 ? (
    <InfoModal data={authUser} onClose={handleModalClose} />
  ) : activeModal === 2 ? (
    <SecurityModal onClose={handleModalClose} />
  ) : activeModal === 3 ? (
    <PrefModal onClose={handleModalClose} />
  ) : null
}

export default SettingsModalShow
