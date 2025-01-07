import PropTypes from 'prop-types'

// component based on tailwind labs video https://www.youtube.com/watch?v=nJzKi6oIvBA
// changed some styles, generic props for customization

const Input = ({
  label = 'Placeholder here',
  type = 'text',
  id,
  className = '', // custom class for container
  required = true,
  ...props
}) => {
  return (
    <div className={`mt-5 relative ${className} group`}>
      <input
        id={id}
        type={type}
        name={id}
        className="peer h-10 w-full border-b-[1.5px] border-gray border-opacity-75 text-gray-900 placeholder-transparent focus:border-primary focus:outline-none bg-inherit"
        placeholder={label}
        required={required}
        {...props}
      />
      <label
        htmlFor={id}
        className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm"
      >
        {label}
      </label>
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  required: PropTypes.bool,
}

export default Input
