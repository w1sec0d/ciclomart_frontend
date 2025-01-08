// filepath: /e:/ciclomart/CicloMart_front/src/components/Button.jsx
import { twMerge } from 'tailwind-merge'
import PropTypes from 'prop-types'

const Button = ({
  type = 'submit',
  onClick = () => {},
  children,
  className = '',
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={twMerge(
        'appearance-none py-2 px-4 bg-primary rounded-md text-white font-medium outline-none transition-transform duration-150',
        'active:bg-primary-dark active:outline active:outline-2 active:outline-black',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Button
