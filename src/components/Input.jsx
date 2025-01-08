import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import PropTypes from 'prop-types'

const Input = forwardRef(
  (
    {
      label = 'Placeholder here',
      type = 'text',
      id,
      className = '', // custom class for container
      required = true,
      ...props
    },
    ref
  ) => {
    return (
      <div className={twMerge('mt-5 relative group', className)}>
        <input
          id={id}
          type={type}
          name={id}
          className="peer h-10 w-full border-b-[1.5px] border-gray border-opacity-75 text-gray-900 placeholder-transparent focus:border-primary focus:outline-none bg-inherit"
          placeholder={label}
          required={required}
          ref={ref}
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
)

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  required: PropTypes.bool,
}

Input.displayName = 'Input'

export default Input
