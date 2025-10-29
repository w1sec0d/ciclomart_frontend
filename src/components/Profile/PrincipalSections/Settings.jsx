// Utils
import { setShowModal } from '../../../store/slices/showModalSlice.js'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

// Components
import CardButton from '../CardButton.jsx'

// Icons
import Security from '@mui/icons-material/GppGoodOutlined'
import CardIcon from '@mui/icons-material/BadgeOutlined'

const Settings = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const handleModalShow = (index) => {
    // Use DOM-API utilities to hide scroll bar
    // document.body.style.overflow = 'hidden'
    // Enable modal (index) to be shown
    dispatch(setShowModal({ activeModal: index }))
  }

  return (
    <div className="bg-lgray h-80 w-full lg:w-1/2 shadow-2xl rounded-3xl">
      <ul className="h-full">
        {/* Settings button group */}
        <li className="h-1/2">
          <CardButton
            arrow="2"
            className=" flex h-full hover:rounded-t-3xl"
            onClick={() => handleModalShow(1)}
          >
            <CardIcon className="ml-8" style={{ fontSize: '3.5rem' }} />
            <div className="flex flex-col w-full">
              <b className="flex flex-col w-full">
                {t('profile.personalInformation')}
              </b>
              <p>{t('profile.identityAndContactData')}</p>
            </div>
          </CardButton>
        </li>
        <li className="h-1/2">
          <CardButton
            arrow="2"
            className="h-full border-t hover:rounded-b-3xl"
            onClick={() => handleModalShow(2)}
          >
            <Security className="ml-8" style={{ fontSize: '3.5rem' }} />
            <div className="flex flex-col w-full">
              <b className="flex flex-col w-full">{t('profile.security')}</b>
              <p>{t('profile.loginSettings')}</p>
            </div>
          </CardButton>
        </li>
      </ul>
    </div>
  )
}

export default Settings
