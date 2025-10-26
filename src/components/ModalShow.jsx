//-> Utils
import { useSelector } from 'react-redux'
import { cleanShowModal } from '../store/slices/showModalSlice'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

// -> Bodies
import InfoModal from './Profile/Modals/Bodies/InfoModal'
import PrefModal from './Profile/Modals/Bodies/PrefModal'
import SecurityModal from './Profile/Modals/Bodies/SecurityModal'
import DireccionForm from './DireccionForm'
import AddressPrompt from './AddressPrompt'

//-> Modal
import Modal from './Profile/Modals/Modal'
import { t } from 'i18next'

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
  // TODO: Refactor logic and removed unused code

  /*Abre el modal de acuerdo al indice seleccionado*/
  useEffect(() => {
    activeModal === 1
      ? setModalComponent(
          <Modal
            onClose={handleModalClose}
            title={t('profile.personalInformation')}
          >
            <InfoModal data={authUser} />
          </Modal>
        )
      : activeModal === 2
        ? setModalComponent(
            <Modal onClose={handleModalClose} title={t('profile.security')}>
              <SecurityModal />
            </Modal>
          )
        : activeModal === 3
          ? setModalComponent(
              <Modal
                onClose={handleModalClose}
                title={t('profile.preferences')}
              >
                <PrefModal />
              </Modal>
            )
          : activeModal === 4
            ? setModalComponent(
                <Modal
                  onClose={handleModalClose}
                  title={t('profile.registerAddress')}
                >
                  <AddressPrompt />
                </Modal>
              )
            : activeModal === 5
              ? setModalComponent(
                  <Modal
                    onClose={handleModalClose}
                    title={t('profile.registerAddress')}
                  >
                    <DireccionForm />
                  </Modal>
                )
              : setModalComponent(null)
  }, [activeModal])

  return modalComponent
}

export default ModalShow
