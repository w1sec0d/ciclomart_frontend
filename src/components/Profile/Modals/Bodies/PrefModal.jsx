// Components
import OptionSelector from '../OptionSelector'

// Icons
import VisionMode from '@mui/icons-material/Brightness6'

// Utils
import { useTranslation } from 'react-i18next'

const PrefModal = () => {
  const { t } = useTranslation()

  return (
    <div className="grid grid-cols-1 gap-0 h-full">
      <OptionSelector text={t('profile.toggleDarkMode')}>
        <VisionMode
          className="opacity-50 ml-4 text-primary"
          style={{ fontSize: '4rem' }}
        ></VisionMode>
      </OptionSelector>
    </div>
  )
}

export default PrefModal
