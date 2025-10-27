// Utilities
import PropTypes from 'prop-types'
import colombianPrice from '../../utils/colombianPrice'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { setExposure, cleanExposure } from '../../store/slices/exposureSlice'
import { useDispatch } from 'react-redux'
import { parse } from 'postcss'
import { useTranslation } from 'react-i18next'

const Button = ({ onClick = () => {}, children }) => {
  return (
    <button
      type="button"
      className="bg-primary w-2/3 mb-6 h-8 rounded-xl font-bold border-black
       hover:bg-primary/90 ease-in-out hover:scale-105 duration-100"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

const ExposurePrice = ({ grade, children, price, setSelected, selected }) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // Percentages to display in the information window and to calculate final price
  const percentages = {
    1: { fixed: 15000, percentage: 0, max: 15000 },
    2: { fixed: 15000, percentage: 1.5, max: 30000 },
    3: { fixed: 15000, percentage: 2.5, max: 50000 },
    4: { fixed: 15000, percentage: 3.5, max: 100000 },
  }

  const gradePrice = Math.min(
    Math.round(
      percentages[grade].fixed + (price * percentages[grade].percentage) / 100
    ),
    percentages[grade].max
  )

  const handleSelect = () => {
    if (grade === selected) {
      setSelected(0)
      dispatch(cleanExposure())
    } else {
      dispatch(setExposure({ key: 'precio', value: gradePrice }))
      dispatch(setExposure({ key: 'grade', value: grade }))
      setSelected(grade)
    }
  }

  return (
    <div
      className={`${selected === grade ? 'border-dashed border-2 border-primaryDark' : ''} bg-white h-60 w-full rounded-xl flex flex-col items-center shadow-xl`}
    >
      <div className="w-full bg-primary h-28   rounded-t-xl flex items-center justify-center mb-4 drop-shadow-lg">
        <h3 className="font-bold">
          {t('exposure.grade')} {grade}
        </h3>
      </div>
      {/* Used to calculate price or to display the percentage */}
      <div className="h-full w-full flex flex-col justify-center items-center pt-2">
        <b className="text-primary text-2xl mb-3">
          {price ? (
            `${colombianPrice(gradePrice)} COP`
          ) : grade > 1 ? (
            <p className="text-center mb-2">
              ${percentages[grade].fixed} + {percentages[grade].percentage}%{' '}
              {t('exposure.onBaseValue')} ${percentages[grade].max}
            </p>
          ) : (
            <p className="text-center mb-2">
              ${percentages[grade].fixed} {t('exposure.fixedPerUnit')}
            </p>
          )}
        </b>
        <p className="text-center mb-2">
          {t('exposure.exposureLevelDescription', { grade })}
        </p>
        {children}
      </div>
      <div className="w-full flex justify-center">
        {price ? (
          <Button onClick={handleSelect}>{t('exposure.selectIt')}</Button>
        ) : (
          <Button onClick={() => navigate('/publish')}>
            {t('exposure.tryIt')}
          </Button>
        )}
      </div>
    </div>
  )
}

ExposurePrice.propTypes = {
  grade: PropTypes.number.isRequired,
  price: PropTypes.number,
}

export default ExposurePrice
