//Utilidades
import PropTypes from 'prop-types'
import colombianPrice from '../../utils/colombianPrice'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { setExposure, cleanExposure } from '../../store/slices/exposureSlice'
import { useDispatch } from 'react-redux'
import { parse } from 'postcss'

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
  const navigate = useNavigate()
  const dispatch = useDispatch()
  //Porcentajes para mostrar en la ventana de información y para
  //calcular precio final
  const percentages = {
    1: 3,
    2: 4.5,
    3: 6,
    4: 8,
  }
  const gradePrice = parseInt((parseInt(price) * percentages[grade]) / 100)

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
        <h3 className="font-bold">Grado {grade}</h3>
      </div>
      {/*Se usa para calcular precio o para hacer un display del porcentaje */}
      <div className="h-full w-full flex flex-col justify-center items-center pt-2">
        <b className="text-primary text-2xl mb-3">
          {price
            ? `${colombianPrice(gradePrice)} COP`
            : `${percentages[grade]}% del valor de tu producto`}
        </b>
        <p className="text-center mb-2">
          Nivel de exposición grado {grade} para bicicletas y repuestos en
          publicaciones y búsquedas.
        </p>
        {children}
      </div>
      <div className="w-full flex justify-center">
        {price ? (
          <Button onClick={handleSelect}>Seleccionalo</Button>
        ) : (
          <Button onClick={() => navigate('/publish')}>¡Pruebalo!</Button>
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
