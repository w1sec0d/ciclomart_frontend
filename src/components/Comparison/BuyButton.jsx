import { twMerge } from 'tailwind-merge'
import ShoppingCar from '@mui/icons-material/ShoppingCartOutlined'

const BuyButton = ({ valor, className, children }) => {
  return (
    <button
      className={twMerge(
        'bg-tertiary h-full w-96 rounded-br-[3rem] rounded-tl-3xl z-20 drop-shadow-md flex items-center justify-center',
        className
      )}
    >
      <ShoppingCar className="mr-2" style={{ fontSize: '1.7rem' }} />
      <b>${children}</b>
    </button>
  )
}

export default BuyButton
