import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import PropTypes from 'prop-types'

const Checkbox = forwardRef(
  (
    {
      id,
      className = '', // custom class for container
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={twMerge(
          'my-5 relative group flex flex-row items-center',
          className
        )}
      >
        <input
          type="checkbox"
          id={id}
          className="mr-2 h-5 w-5 text-primary border-[1.5px] border-gray border-opacity-75 focus:ring-1 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white"
          ref={ref}
          {...props}
        />
        <label htmlFor={id}>{children}</label>
      </div>
    )
  }
)

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  required: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

Checkbox.displayName = 'Checkbox'

export default Checkbox
