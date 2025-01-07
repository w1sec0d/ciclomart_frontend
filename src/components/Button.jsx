import PropTypes from 'prop-types'

const Button = ({
  type = 'submit',
  onClick = () => {},
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      type={type}
      onClick={onClick}
      className="py-2 px-4 bg-primary"
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
}

export default Button
