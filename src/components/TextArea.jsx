import { forwardRef, useRef, useImperativeHandle } from 'react'
import { twMerge } from 'tailwind-merge'
import PropTypes from 'prop-types'

const Textarea = forwardRef(
  (
    {
      label = 'Placeholder here',
      id,
      className = '', // custom class for container
      required = true,
      ...props
    },
    ref
  ) => {
    const internalRef = useRef(null) // internal reference for textarea element

    useImperativeHandle(ref, () => internalRef.current) // expose internal reference to parent component

    return (
      <div className={twMerge('mt-5 relative group', className)}>
        <textarea
          id={id}
          name={id}
          className="peer h-20 w-full border-b-[1.5px] border-gray border-opacity-75 text-gray-900 placeholder-transparent focus:border-primary focus:outline-none bg-inherit py-2"
          placeholder={label}
          required={required}
          ref={internalRef}
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

Textarea.displayName = 'Textarea'

Textarea.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  required: PropTypes.bool,
}

export default Textarea
