import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'
import { useNavigate } from 'react-router'

//-> Icons
import ArrowDown from '@mui/icons-material/KeyboardArrowDownOutlined'
import ArrowRight from '@mui/icons-material/KeyboardArrowRightOutlined'

const CardButton = ({
  arrow = 1,
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
      className={twMerge(
        'flex flex-row  items-center w-full h-16 hover:bg-dgray hover:animate-pulse',
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
      {arrow == 1 ? (
        <ArrowDown className="ml-auto mr-2" />
      ) : (
        <ArrowRight
          className="ml-auto mr-2 text-2xl"
          style={{ fontSize: '3rem' }}
        />
      )}
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
