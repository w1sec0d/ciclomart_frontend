import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

const animatedComponents = makeAnimated()

const Filters = ({ label, results, onChange }) => {

  console.log(results[0])
  const getOptions = () => {
    let options = []
    results.forEach((result) => {
      if (result[label]) {
        options.push({ value: result[label], label: result[label] })
      }
    })
    
    return options
  }
    
  return (
    <div>
      <label className="text-slate-50 text-lg font-bold">{label}</label>
      <Select
        components={animatedComponents}
        options={getOptions()}
        onChange={onChange}
        placeholder="Filtrar por..."></Select>
    </div>
  )
}



export default Filters
