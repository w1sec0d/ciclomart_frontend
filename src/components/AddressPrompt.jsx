import Button from './Button'
import { useDispatch } from 'react-redux'
import { setShowAddressModal } from '../store/slices/showModalSlice'
import { MapsHomeWork } from '@mui/icons-material'

const AddressPrompt = () => {
  const dispatch = useDispatch()

  const handleContinue = () => {
    dispatch(setShowAddressModal(5)) // Mostrar el formulario de dirección
  }

  return (
    <div className="flex flex-col items-center my-6">
      <p className="mb-4">
        ¡Hola! Debes{' '}
        <span className="semibold italic">registrar tu dirección</span> antes de
        continuar con la compra.
      </p>
      <Button onClick={handleContinue}>Continuar</Button>
    </div>
  )
}

export default AddressPrompt
