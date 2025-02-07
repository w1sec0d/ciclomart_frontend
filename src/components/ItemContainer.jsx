import PropTypes from 'prop-types'
import { LocalShipping, PedalBike } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const ItemContainer = ({
  id,
  img,
  name,
  price,
  fullPrice,
  freeShipping = false,
}) => {
  const discountPercentage = ((fullPrice - price) / fullPrice) * 100

  return (
    <Link
      className="flex flex-col justify-evenly w-[225px] h-[350px] hover:cursor-pointer group p-2 bg-white rounded-md shadow-a"
      to={`/product/${id}`}
    >
      {/* Seccion de imágenes y nombre */}
      <div className="w-[200px] h-[200px] mx-auto flex items-center justify-center">
        {img ? (
          <img src={img} className="object-contain" />
        ) : (
          <PedalBike fontSize="large" color="disabled" />
        )}
      </div>
      {/* Seccion de precios y nombre */}
      <div className="flex flex-wrap text-xl font-bold relative items-center mt-2">
        <p className="group-hover:text-primary font-medium text-base w-full">
          {name}
        </p>
        <div className="relative mt-3">
          {fullPrice && (
            <span className="absolute text-red-500 line-through text-sm text-left -top-3">
              ${fullPrice}
            </span>
          )}
          ${price}
          {fullPrice && (
            <span className="text-sm text-primary ml-2">
              {discountPercentage}% OFF
            </span>
          )}
        </div>
      </div>
      {/* Seccion de envio gratis y etiquetas extra */}
      <div>
        {freeShipping && (
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
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  fullPrice: PropTypes.number,
  freeShipping: PropTypes.bool,
}

export default ItemContainer
