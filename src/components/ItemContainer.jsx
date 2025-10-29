import PropTypes from 'prop-types'
import { LocalShipping } from '@mui/icons-material'
import colombianPrice from '../utils/colombianPrice'
import { Link } from 'react-router-dom'
import Img from './Img'
import { twMerge } from 'tailwind-merge'
import { FaRegAddressCard } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

import ComparisonButton from './Comparison/ComparisonButton'
import { useSelector } from 'react-redux'

const ItemContainer = ({
  idProducto,
  imagenURL,
  nombre, // API field name
  precio, // API field name
  precioCompleto,
  costoEnvio,
  className,
  ...props
}) => {
  const { t } = useTranslation()
  const discountPercentage = Math.floor(
    ((precioCompleto - precio) / precioCompleto) * 100
  )

  const idProduct1 = useSelector((state) => state.comparison.idProduct1)
  const idProduct2 = useSelector((state) => state.comparison.idProduct2)
  const selectedClass =
    idProduct1 === idProducto
      ? 'border-4 border-secondary border-dashed'
      : idProduct2 === idProducto
        ? 'border-4 border-tertiary border-dashed'
        : ''

  return (
    <Link
      className={twMerge(
        `flex flex-col items-center lg:h-[320px] lg:w-[250px] hover:cursor-pointer group p-2 bg-white rounded-md shadow-a relative mx-4 -translate-x-3
        ${selectedClass}`,
        className
      )}
      to={`/product/${idProducto}`}
    >
      {/* Display if product has property card */}
      {props.tarjeta && (
        <FaRegAddressCard
          className="absolute top-0 left-0 mt-4 ml-4 text-primary "
          title={t('products.hasPropertyCard')}
        />
      )}
      {/* Images and name section */}
      <div className="w-[150px] h-[150px] sm:w-[175px] sm:h-[175px] md:w-[200px] md:h-[200px] mx-auto flex items-center justify-center">
        <Img src={imagenURL} />
      </div>

      {/* Comparison button on hover */}
      <ComparisonButton idProducto={idProducto} />

      {/* Prices and name section */}
      <div className="flex flex-wrap text-xl font-bold relative items-center justify-start my-auto">
        <p className="group-hover:text-primary font-medium text-base w-full">
          {nombre}
        </p>
        <div className={`relative ${precioCompleto ? 'mt-3' : ''} w-full`}>
          {precioCompleto && (
            <span className="absolute text-red-500 line-through text-sm text-left -top-3">
              {colombianPrice(precioCompleto)}
            </span>
          )}
          {colombianPrice(precio)}
          {precioCompleto && (
            <span className="text-sm text-primary ml-2">
              {discountPercentage}% {t('products.discount')}
            </span>
          )}
        </div>

        {/* Free shipping and extra tags section */}

        {costoEnvio === 0 && (
          <p className="text-sm text-white bg-green-600 py-1 px-2 rounded-md font-semibold w-fit my-2">
            <LocalShipping fontSize="small" className="mr-2" />
            {t('products.freeShipping')}
          </p>
        )}
      </div>
    </Link>
  )
}
ItemContainer.propTypes = {
  idProducto: PropTypes.number.isRequired,
  imagenURL: PropTypes.string,
  nombre: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  precioCompleto: PropTypes.number,
  envioGratis: PropTypes.bool,
}

export default ItemContainer
