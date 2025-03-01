import React from 'react'
import FilterContent from './FilterContent'

const FilterSidebar = ({
  filterFields,
  priceRange,
  dateRange,
  selectedFilters,
  roundedMinPrice,
  roundedMaxPrice,
  handleFilterChange,
  handlePriceChange,
  handleDateChange,
  resetFilters,
  bicicletas,
}) => {
  return (
    <div className="hidden md:block md:w-1/4 bg-gray-100 sticky top-4 max-h-screen overflow-y-auto">
      <FilterContent
        filterFields={filterFields}
        priceRange={priceRange}
        dateRange={dateRange}
        selectedFilters={selectedFilters}
        roundedMinPrice={roundedMinPrice}
        roundedMaxPrice={roundedMaxPrice}
        handleFilterChange={handleFilterChange}
        handlePriceChange={handlePriceChange}
        handleDateChange={handleDateChange}
        resetFilters={resetFilters}
        bicicletas={bicicletas}
      />
    </div>
  )
}

export default FilterSidebar
