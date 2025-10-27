// Icons
import CompareArrows from '@mui/icons-material/CompareArrows'

//Utilidades
import { useSelector, useDispatch } from 'react-redux'
import { twMerge } from 'tailwind-merge'
import {
  setComparisonItem,
  removeComparisonItem,
} from '../../store/slices/comparisonSlice'
import { useTranslation } from 'react-i18next'

const ComparisonButton = ({ idProducto, className }) => {
  const { t } = useTranslation()
  const idProduct1 = useSelector((state) => state.comparison.idProduct1)
  const idProduct2 = useSelector((state) => state.comparison.idProduct2)
  const dispatch = useDispatch()

  const handleComparison = (event) => {
    event.stopPropagation()
    event.preventDefault()

    if (idProduct1 === idProducto) {
      dispatch(removeComparisonItem('idProduct1'))
    } else if (idProduct2 === idProducto) {
      dispatch(removeComparisonItem('idProduct2'))
    } else if (idProduct1 === 0) {
      dispatch(setComparisonItem({ key: 'idProduct1', value: idProducto }))
    } else if (idProduct2 === 0 || idProduct2 > 0) {
      dispatch(setComparisonItem({ key: 'idProduct2', value: idProducto }))
    }
  }
  return (
    //Modifica el color del botón de acuerdo al número del producto seleccionado
    <button
      className={twMerge(
        `px-4 rounded-bl-full absolute top-0 right-0 flex flex-row duration-200 ease-in-out hover:scale-105 opacity-0 group-hover:opacity-100
        ${idProduct1 === idProducto ? 'bg-secondary opacity-100' : idProduct2 === idProducto ? 'bg-tertiary opacity-100' : 'bg-secondary'}`,
        className
      )}
      onClick={handleComparison}
    >
      <b className="mr-2">{t('comparison.compare')}</b>
      <CompareArrows />
    </button>
  )
}

export default ComparisonButton
