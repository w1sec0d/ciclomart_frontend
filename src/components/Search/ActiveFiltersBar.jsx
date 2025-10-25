import React from 'react'
import { formatFieldName } from '../../utils/filterUtils'
import { useTranslation } from 'react-i18next'

const ActiveFiltersBar = ({
  selectedFilters,
  priceRange,
  dateRange,
  roundedMinPrice,
  roundedMaxPrice,
  handleFilterChange,
  setDateRange,
  resetFilters,
}) => {
  const { t } = useTranslation()
  const activeFilterCount =
    Object.values(selectedFilters).filter(Boolean).length
  const isPriceRangeModified =
    priceRange[0] !== roundedMinPrice || priceRange[1] !== roundedMaxPrice
  const isDateRangeModified = dateRange.startDate || dateRange.endDate

  if (activeFilterCount === 0 && !isPriceRangeModified && !isDateRangeModified)
    return null

  return (
    <div className=" p-2 bg-primary">
      <div className="flex flex-wrap gap-2 items-center">
        <span className="text-sm font-medium text-slate-50">
          {t('products.activeFilters')}
        </span>
        {Object.entries(selectedFilters).map(([key, value]) => {
          if (!value) return null
          return (
            <div
              key={key}
              className="bg-secondary text-black px-2 py-1 text-sm flex items-center"
            >
              <span>
                {formatFieldName(key)}: {value.label}
              </span>
              <button
                className="ml-2 text-primary hover:text-blue-700"
                onClick={() => handleFilterChange(null, key)}
              >
                ×
              </button>
            </div>
          )
        })}
        {isPriceRangeModified && (
          <div className="bg-secondary text-black px-2 py-1 rounded text-sm">
            {t('products.price')}: ${priceRange[0].toLocaleString()} - $
            {priceRange[1].toLocaleString()}
          </div>
        )}
        {isDateRangeModified && (
          <div className="bg-secondary text-black px-2 py-1 rounded text-sm flex items-center">
            <span>
              {t('products.date')}:{' '}
              {dateRange.startDate
                ? dateRange.startDate.toLocaleDateString()
                : t('products.start')}
              {' - '}
              {dateRange.endDate
                ? dateRange.endDate.toLocaleDateString()
                : t('products.end')}
            </span>
            <button
              className="ml-2 text-blue-500 hover:text-blue-700"
              onClick={() => setDateRange({ startDate: null, endDate: null })}
            >
              ×
            </button>
          </div>
        )}
        <button
          className="ml-auto text-slate-50 hover:text-blue-900 text-sm"
          onClick={resetFilters}
        >
          {t('products.clearAll')}
        </button>
      </div>
    </div>
  )
}

export default ActiveFiltersBar
