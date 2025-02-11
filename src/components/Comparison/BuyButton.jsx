import { twMerge } from 'tailwind-merge'
import ShoppingCar from '@mui/icons-material/ShoppingCartOutlined'
import { useSelector, useDispatch } from 'react-redux'
import { setLoading, clearLoading } from '../../store/slices/loadingSlice'
import mercadoPago from '../../services/mercadoPago'
import { useNavigate } from 'react-router-dom'

const BuyButton = ({ producto, className, children }) => {
  const authUser = useSelector((state) => state.auth.authUser)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleBuy = async () => {
    if (authUser) {
      dispatch(setLoading())
      const { paymentURL } = await mercadoPago.sendBuyRequest(
        producto,
        authUser.idUsuario
      )
      window.location.href = paymentURL
      setTimeout(() => {
        dispatch(clearLoading())
      }, 5000)
    } else {
      navigate('/login')
    }
  }

  return (
    <button
      className={twMerge(
        'bg-tertiary h-full w-96 rounded-br-[3rem] rounded-tl-3xl z-20 drop-shadow-md flex items-center justify-center',
        className
      )}
      onClick={handleBuy}
    >
      <ShoppingCar className="mr-2" style={{ fontSize: '1.7rem' }} />
      <b>${children}</b>
    </button>
  )
}

export default BuyButton
