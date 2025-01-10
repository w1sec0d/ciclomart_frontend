import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'
import { useNavigate } from 'react-router'

const CardButton = ({
  modal = '1',
  type = 'button',
  className = '',
  onClick = () => {},
  children,
  to = '',
  ...props
}) => {
  const navigate = useNavigate()
  const handleClick = (event) => {
    if (to) {
      event.preventDefault()
      navigate(to)
    } else {
      onClick(event)
    }
  }

  return (
    <button
      type={type}
      className={twMerge((className = ''), className)}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default CardButton
