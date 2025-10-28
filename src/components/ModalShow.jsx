//-> Utils
import { useSelector, useDispatch } from 'react-redux'
import { cleanShowModal } from '../store/slices/showModalSlice'
import { useEffect, useState, useCallback } from 'react'
import { t } from 'i18next'

// -> Bodies
import InfoModal from './Profile/Modals/Bodies/InfoModal'
import PrefModal from './Profile/Modals/Bodies/PrefModal'
import SecurityModal from './Profile/Modals/Bodies/SecurityModal'
import DireccionForm from './DireccionForm'
import AddressPrompt from './AddressPrompt'

//-> Modal
import Modal from './Profile/Modals/Modal'

const ModalShow = () => {
  const authUser = useSelector((state) => state.auth.authUser)
  const activeModal = useSelector((state) => state.showModal.activeModal)
  const [modalComponent, setModalComponent] = useState(null)
  const dispatch = useDispatch()

  const handleModalClose = useCallback(() => {
    document.body.style.overflow = 'auto'
    dispatch(cleanShowModal())
  }, [dispatch])

  useEffect(() => {
    const getModalContent = () => {
      switch (activeModal) {
        case 1:
          return <InfoModal data={authUser} />
        case 2:
          return <SecurityModal />
        case 3:
          return <PrefModal />
        case 4:
          return <AddressPrompt />
        case 5:
          return <DireccionForm />
        default:
          return null
      }
    }

    const getModalTitle = () => {
      switch (activeModal) {
        case 1:
          return t('profile.personalInformation')
        case 2:
          return t('profile.security')
        case 3:
          return t('profile.preferences')
        case 4:
        case 5:
          return t('profile.registerAddress')
        default:
          return ''
      }
    }

    const content = getModalContent()
    const title = getModalTitle()

    setModalComponent(
      activeModal ? (
        <Modal onClose={handleModalClose} title={title}>
          {content}
        </Modal>
      ) : null
    )
  }, [activeModal, authUser, handleModalClose])

  return modalComponent
}

export default ModalShow
