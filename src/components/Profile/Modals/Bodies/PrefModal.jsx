// -> Components
import OptionSelector from '../OptionSelector'

// -> Icons
import VisionMode from '@mui/icons-material/Brightness6'

const PrefModal = () => {
  return (
    <div className="grid grid-cols-1 gap-0 h-full">
      <OptionSelector text={'Alterna entre modo oscuro y modo claro'}>
        <VisionMode
          className="opacity-50 ml-4 text-primary"
          style={{ fontSize: '4rem' }}
        ></VisionMode>
      </OptionSelector>
    </div>
  )
}

export default PrefModal
