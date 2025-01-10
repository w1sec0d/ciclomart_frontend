import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'
import { useNavigate } from 'react-router'

//-> Icons
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const CardButton = ({
  modal = 1,
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
      className={twMerge('flex flex-row', className)}
      onClick={handleClick}
      {...props}
    >
      {children}
      <ArrowForwardIosIcon />
    </button>
  )
}

CardButton.propTypes = {
  modal: PropTypes.number,
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default CardButton
