import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

const animatedComponents = makeAnimated()

const Filters = (props) => (
  <div>
    {Array.isArray(props.filters[props.tipo]) &&
      props.filters[props.tipo]
        .slice(0, props.showAllFilters ? props.filters[props.tipo].length : 4)
        .map((filter, index) => (
          <div key={index} className="flex flex-col items-start py-2">
            <label className="text-sm font-semibold text-zinc-100 -600 mb-1">
              {filter.label}
            </label>
            <Select
              closeMenuOnSelect={true}
              components={animatedComponents}
              defaultValue={''}
              options={filter.options}
              onChange={(selected) =>
                props.handleFilterChange(filter.label, selected)
              }
              className="px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 w-full"
              isClearable={true}
            />
            {filter.label === 'Precio' && (
              <div className="flex flex-row items-center py-3">
                <input
                  type="text"
                  placeholder="Min"
                  className="flex-grow px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 w-full"
                />
                <span className="px-2 text-zinc-100">-</span>
                <input
                  type="text"
                  placeholder="Max"
                  className="flex-grow px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 w-full"
                />
              </div>
            )}
          </div>
        ))}
    {props.filters[props.tipo].length > 4 && (
      <div className="px-4">
        <button
          onClick={props.handleShowAllFilters}
          className="text-blue-500 hover:underline mt-2"
        >
          {props.showAllFilters
            ? 'Mostrar menos filtros'
            : 'Mostrar más filtros'}
        </button>
      </div>
    )}
  </div>
)
Filters.propTypes = {
  filters: PropTypes.object.isRequired,
  showAllFilters: PropTypes.bool.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
  handleShowAllFilters: PropTypes.func.isRequired,
  tipo: PropTypes.string.isRequired,
}

export default Filters
