import React from 'react'
import Select from 'react-select'

const CustomSelect = React.forwardRef(
  ({ name, label, options, value, onChange, required }, ref) => {
    const customStyles = {
      control: (provided) => ({
        ...provided,
        borderColor: 'gray',
        '&:hover': { borderColor: 'gray' },
        boxShadow: 'none',
      }),
    }

    const handleChange = (selectedOption) => {
      onChange({
        target: {
          name,
          value: selectedOption ? selectedOption.value : '',
          id: selectedOption
            ? selectedOption.id
              ? selectedOption.id
              : null
            : null,
        },
      })
    }

    const formattedOptions = options.options.map((option) => ({
      id: option.id ? option.id : null,
      label: option.label,
      value: option.value,
    }))

    const formatOptionLabel = ({ value, label }) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            width: '20px',
            height: '20px',
            backgroundColor: value,
            border: '1px solid #ccc',
            marginRight: '10px',
          }}
        />
        <span>{label}</span>
      </div>
    )

    return (
      <div className="mt-5">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
        <Select
          id={name}
          name={name}
          value={formattedOptions.find((option) => option.value === value)}
          onChange={handleChange}
          options={formattedOptions}
          styles={customStyles}
          isClearable={!required}
          placeholder={`Selecciona un ${label}`}
          formatOptionLabel={name === 'color' ? formatOptionLabel : null}
          className="py-2"
          ref={ref}
        />
      </div>
    )
  }
)

CustomSelect.displayName = 'CustomSelect'

export default CustomSelect
