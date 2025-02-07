import { Children } from 'react'
import { twMerge } from 'tailwind-merge'

const BuyButton = ({ valor, className, children }) => {
  return (
    <button
      className={
        'bg-tertiary h-full w-64 rounded-br-[3rem] rounded-tl-3xl z-10 drop-shadow-md'
      }
    >
      <b>${children}</b>
    </button>
  )
}

export default BuyButton
