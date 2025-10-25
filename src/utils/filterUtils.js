// This file contains the utility functions for the filters
// It contains the functions to get the filter options, format the field name, get the price range, and apply the filters

import capitalize from '../utils/capitalize'
import {
  getFieldTranslationKey,
  getValueTranslationKey,
} from './filterMappings'

const colorNames = {
  '#FFFFFF': 'Blanco',
  '#000000': 'Negro',
  '#FF7F7B': 'Rojo',
  '#A2FF75': 'Verde',
  '#5A67FF': 'Azul',
  '#F5FF78': 'Amarillo',
  '#B471FF': 'Magenta',
  '#8BFFFF': 'Cian',
  '#808080': 'Gris',
  '#FFB760': 'Naranja',
  // Add more colors as needed
}

/**
 * Get unique filter options for a field
 * @param {string} field - Database field name (Spanish)
 * @param {Array} bikes - Array of bicycle data
 * @param {Function} t - Translation function from useTranslation hook
 * @returns {Array} - Array of {value, label} options with translated labels
 */
export const getFilterOptions = (field, bikes, t = null) => {
  if (!bikes) return []

  const options = [...new Set(bikes.map((bike) => bike[field]))].filter(Boolean)

  return options.map((option) => {
    let label = option

    // Check if it's a hex color
    if (typeof option === 'string' && option.startsWith('#')) {
      const colorName = colorNames[option.toUpperCase()] || option
      label = colorName
    }

    // Try to get translation if translation function is provided
    if (t) {
      const translationKey = getValueTranslationKey(field, option)
      if (translationKey) {
        label = t(translationKey)
      } else {
        // Fallback to capitalized Spanish value if no translation found
        label = capitalize(String(option))
      }
    } else {
      label = capitalize(String(option))
    }

    return { value: option, label }
  })
}

/**
 * Format field name for display with translation
 * @param {string} field - Database field name (Spanish)
 * @param {Function} t - Translation function from useTranslation hook
 * @returns {string} - Translated or formatted field name
 */
export const formatFieldName = (field, t = null) => {
  // Try to get translation if translation function is provided
  if (t) {
    const translationKey = getFieldTranslationKey(field)
    if (translationKey) {
      return t(translationKey)
    }
  }

  // Fallback to formatted field name
  return (
    field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')
  )
}

/**
 * Get minimum and maximum price range from bikes
 * @param {Array} bikes - Array of bicycle data
 * @returns {Array} - [minPrice, maxPrice]
 */
export const getPriceRange = (bikes) => {
  if (!bikes || bikes.length === 0) return [0, 10000]

  const prices = bikes
    .map((bike) => {
      return typeof bike.precio === 'string'
        ? parseInt(bike.precio.replace(/[^\d]/g, ''))
        : bike.precio
    })
    .filter((price) => !isNaN(price) && price > 0)

  if (prices.length === 0) return [0, 10000]

  return [Math.min(...prices), Math.max(...prices)]
}

/**
 * Apply all filters to the bikes array
 * @param {Array} bikes - Array of bicycle data
 * @param {Object} filters - Object with filter values
 * @param {Array} priceRange - [minPrice, maxPrice]
 * @param {Object} dateRange - {startDate, endDate}
 * @returns {Array} - Filtered bikes array
 */
export const applyFilters = (bikes, filters, priceRange, dateRange) => {
  if (!bikes) return []

  return bikes.filter((bike) => {
    // Check all property filters
    for (const [key, value] of Object.entries(filters)) {
      if (value && bike[key] !== value.value) {
        return false
      }
    }

    // Check price range
    const price =
      typeof bike.precio === 'string'
        ? parseInt(bike.precio.replace(/[^\d]/g, ''))
        : bike.precio

    if (isNaN(price)) return true // If no price, show anyway

    const priceMatch = price >= priceRange[0] && price <= priceRange[1]

    // Check date range (if set)
    let dateMatch = true
    if (dateRange.startDate || dateRange.endDate) {
      const createdDate = new Date(bike.fechaPublicacion)

      if (dateRange.startDate && createdDate < dateRange.startDate) {
        dateMatch = false
      }

      if (dateRange.endDate) {
        // Adjust end date to include the whole day
        const endOfDay = new Date(dateRange.endDate)
        endOfDay.setHours(23, 59, 59, 999)

        if (createdDate > endOfDay) {
          dateMatch = false
        }
      }
    }

    return priceMatch && dateMatch
  })
}
