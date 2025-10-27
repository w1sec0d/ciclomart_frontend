import { twMerge } from 'tailwind-merge'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import {
  getFieldTranslationKey,
  getValueTranslationKey,
} from '../../utils/filterMappings'

const DiffsButton = ({ onClick }) => {
  const { t } = useTranslation()

  return (
    <button
      className="transition bg-tertiary rounded-xl 
   drop-shadow-2xl hover:bg-tertiary absolute right-4 px-4  duration-200 ease-in-out hover:scale-105"
      onClick={onClick}
    >
      <b className="text-xl">{t('comparison.highlightDifferences')}</b>
    </button>
  )
}

DiffsButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

const ComparisonSection = ({
  title,
  className1,
  className2,
  className3,
  coincidences = [],
  product1,
  product2,
  highlightDiffs = false,
}) => {
  const { t } = useTranslation()
  const [differences, setDifferences] = useState()

  // Set the differences, this handleDiffs is used
  // Only in the shared elements section, so the same coincidence is used
  // In case a value is different, the keys where it is different are returned
  const handleDiffs = (coincidences) => {
    if (differences) {
      setDifferences()
    } else {
      const newDifferences = coincidences.filter(
        (coincidence) => product1[coincidence] != product2[coincidence]
      )
      setDifferences(newDifferences)
    }
  }

  // Translate property name (field name) using existing mapping system
  const translateProperty = (property) => {
    const translationKey = getFieldTranslationKey(property)
    return translationKey ? t(translationKey) : property
  }

  // Translate value if it has a translation, otherwise return as-is
  const translateValue = (fieldName, value) => {
    const translationKey = getValueTranslationKey(fieldName, value)
    return translationKey ? t(translationKey) : value
  }

  return (
    <div>
      <div
        className={twMerge(
          'text-black h-10 border-y border-y-lgray w-full flex flex-row items-center justify-center  text-xl bg-lblue opacity-80 relative',
          className3
        )}
      >
        {/* Shows a button to highlight differences */}
        <b>{title}</b>
        {highlightDiffs ? (
          <DiffsButton onClick={() => handleDiffs(coincidences)} />
        ) : null}
      </div>
      <div className="h-auto max-h-72 flex flex-row w-full overflow-auto pr-0">
        <div className={twMerge('w-1/2 bg-white h-auto ', className1)}>
          {/* Shows all coincidences/discrepancies between products and removes those without value */}
          {coincidences.map((property, index) => {
            if (product1[property]) {
              return (
                <div
                  className={`h-12 ${index === coincidences.length - 1 ? '' : 'border-b'} 
                ${differences && differences.includes(property) ? 'bg-tertiary bg-opacity-35  border-b-tertiary' : 'bg-white'}
                flex items-center pl-3 border-lgray border-r  `}
                  key={index}
                >
                  <p>
                    <b className="text-zinc-500">
                      {translateProperty(property)}:{' '}
                    </b>{' '}
                    {translateValue(property, product1[property])}
                  </p>
                </div>
              )
            }
          })}
        </div>
        <div className={twMerge('w-1/2 h-auto bg-white ', className2)}>
          {/* Shows all coincidences/discrepancies between products and removes those without value */}
          {coincidences.map((property, index) => {
            if (product2[property]) {
              return (
                <div
                  className={`h-12 ${index === coincidences.length - 1 ? '' : 'border-b'} 
                ${differences && differences.includes(property) ? 'bg-tertiary bg-opacity-35 border-b-tertiary' : 'bg-white'}
                flex items-center pl-3 border-lgray border-r`}
                  key={index}
                >
                  <p>
                    <b className="text-zinc-500">
                      {translateProperty(property)}:{' '}
                    </b>{' '}
                    {translateValue(property, product2[property])}
                  </p>
                </div>
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}

ComparisonSection.propTypes = {
  title: PropTypes.string.isRequired,
  className1: PropTypes.string,
  className2: PropTypes.string,
  className3: PropTypes.string,
  coincidences: PropTypes.arrayOf(PropTypes.string),
  product1: PropTypes.object.isRequired,
  product2: PropTypes.object.isRequired,
  highlightDiffs: PropTypes.bool,
}

ComparisonSection.defaultProps = {
  className1: '',
  className2: '',
  className3: '',
  coincidences: [],
  highlightDiffs: false,
}

export default ComparisonSection
