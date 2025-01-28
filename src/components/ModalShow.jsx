//-> Utils
import { useSelector } from 'react-redux'
import { cleanShowModal } from '../store/slices/showModalSlice'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

// -> Modals
import InfoModal from './Profile/Modals/InfoModal'
import PrefModal from './Profile/Modals/PrefModal'
import SecurityModal from './Profile/Modals/SecurityModal'

const ModalShow = () => {
  const authUser = useSelector((state) => state.auth.authUser)
  const activeModal = useSelector((state) => state.showModal.activeModal)
  const [modalComponent, setModalComponent] = useState(null)
  const dispatch = useDispatch()
  /*Cierra el modal abierto */
  const handleModalClose = () => {
    document.body.style.overflow = 'auto'
    dispatch(cleanShowModal())
  }

  console.log(activeModal)
  /*Abre el modal de acuerdo al indice seleccionado*/
  useEffect(() => {
    activeModal === 1
      ? setModalComponent(
          <InfoModal data={authUser} onClose={handleModalClose} />
        )
      : activeModal === 2
        ? setModalComponent(<SecurityModal onClose={handleModalClose} />)
        : activeModal === 3
          ? setModalComponent(<PrefModal onClose={handleModalClose} />)
          : setModalComponent(null)
  }, [activeModal])

  return modalComponent
}

export default ModalShow
