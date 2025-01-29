import PropTypes from 'prop-types'

//This component is used to display the selector of each filter in the search page.

const Selector = (props) => {
  const handleChange = (event) => {
    if (props.onFilterChange) {
      props.onFilterChange(props.label, event.target.value)
    }
  }

  return (
    <div className="flex flex-col items-start">
      <label className="text-sm font-semibold text-gray-600 mb-1">
        {props.label}
      </label>
      <select
        className="px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 w-full"
        onChange={handleChange}
        value={props.value}
      >
        <option value="" disabled>
          Seleccionar
        </option>
        {props.options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

Selector.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onFilterChange: PropTypes.func.isRequired,
}

export default Selector
