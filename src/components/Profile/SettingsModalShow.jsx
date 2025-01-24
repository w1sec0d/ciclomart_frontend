//-> Utils
import { useSelector } from 'react-redux'

// -> Modals
import InfoModal from './Modals/InfoModal'
import PrefModal from './Modals/PrefModal'
import SecurityModal from './Modals/SecurityModal'

const SettingsModalShow = ({ activeModalIndex, setActiveModalIndex }) => {
  /*Cierra el modal abierto */
  const handleModalClose = () => {
    document.body.style.overflow = 'auto'
    setActiveModalIndex(0)
  }

  const authUser = useSelector((state) => state.auth.authUser)

  /*Abre el modal de acuerdo al indice seleccionado*/
  return activeModalIndex === 1 ? (
    <InfoModal data={[authUser]} onClose={handleModalClose} />
  ) : activeModalIndex === 2 ? (
    <SecurityModal onClose={handleModalClose} />
  ) : activeModalIndex === 3 ? (
    <PrefModal onClose={handleModalClose} />
  ) : null
}

export default SettingsModalShow
