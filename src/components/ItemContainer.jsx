import { LocalShipping } from '@mui/icons-material'

import PropTypes from 'prop-types'

const ItemContainer = ({
  img,
  name,
  price,
  fullPrice,
  freeShipping = false,
}) => {
  const discountPercentage = ((fullPrice - price) / fullPrice) * 100

  return (
    <a
      className="flex flex-col justify-center max-w-[200px] hover:cursor-pointer group"
      href="https://www.youtube.com"
    >
      <img src={img} className="max-w-[200px]" />
      <p className="my-2 group-hover:text-primary font-medium">{name}</p>
      <div className="flex flex-wrap text-xl font-bold relative mt-3 items-center">
        {fullPrice && (
          <span className="absolute text-red-500 line-through text-sm text-left -top-3">
            ${fullPrice}
          </span>
        )}
        ${price}
        <span className="text-sm text-primary ml-2">
          {discountPercentage}% OFF
        </span>
      </div>
      <div>
        {freeShipping && (
          <p className="text-sm text-white bg-green-600 py-1 px-2 rounded-md font-semibold w-fit mt-2">
            <LocalShipping fontSize="small" className="mr-2" />
            Envío gratis
          </p>
        )}
      </div>
    </a>
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
