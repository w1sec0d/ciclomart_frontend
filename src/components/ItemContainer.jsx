import PropTypes from 'prop-types'
import { LocalShipping } from '@mui/icons-material'
import colombianPrice from '../utils/colombianPrice'
import { Link } from 'react-router-dom'
import Img from './Img'

import ComparisonButton from './Comparison/ComparisonButton'
import { useState } from 'react'

const ItemContainer = ({
  idProducto,
  imagen,
  nombre,
  precio,
  precioCompleto,
  envioGratis = false,
}) => {
  const discountPercentage = Math.floor(
    ((precioCompleto - precio) / precioCompleto) * 100
  )

  return (
    <Link
      className={`flex flex-col justify-evenly w-[225px] h-[350px] hover:cursor-pointer group p-2 bg-white rounded-md shadow-a relative`}
      to={`/product/${idProducto}`}
    >
      {/* Seccion de imágenes y nombre */}
      <div className="w-[200px] h-[200px] mx-auto flex items-center justify-center opac">
        <Img src={imagen} />
      </div>

      {/*Botón de comparación en hover*/}
      <ComparisonButton />

      {/* Seccion de precios y nombre */}
      <div className="flex flex-wrap text-xl font-bold relative items-center justify-start mt-2">
        <p className="group-hover:text-primary font-medium text-base w-full">
          {nombre}
        </p>

        <div className={`relative ${precioCompleto ? 'mt-3' : ''}`}>
          {precioCompleto && (
            <span className="absolute text-red-500 line-through text-sm text-left -top-3">
              {colombianPrice(precioCompleto)}
            </span>
          )}
          {colombianPrice(precio)}
          {precioCompleto && (
            <span className="text-sm text-primary ml-2">
              {discountPercentage}% OFF
            </span>
          )}
        </div>

        {/* Seccion de envio gratis y etiquetas extra */}

        {envioGratis && (
          <p className="text-sm text-white bg-green-600 py-1 px-2 rounded-md font-semibold w-fit my-2">
            <LocalShipping fontSize="small" className="mr-2" />
            Envío gratis
          </p>
        )}
      </div>
    </Link>
  )
}
ItemContainer.propTypes = {
  idProducto: PropTypes.number.isRequired,
  imagen: PropTypes.string,
  nombre: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  precioCompleto: PropTypes.number,
  envioGratis: PropTypes.bool,
}

export default ItemContainer
