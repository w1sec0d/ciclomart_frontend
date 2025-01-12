import PropTypes from 'prop-types'

const ItemContainer = ({ img, name, price, fullPrice }) => {
  const discountPercentage = ((fullPrice - price) / fullPrice) * 100

  return (
    <div className="flex flex-col text-center items-center justify-center max-w-[200px] hover:cursor-pointer">
      <img src={img} className="max-w-[200px]" />
      <p className="my-2 text-base">{name}</p>
      <p className="flex flex-wrap text-xl font-bold mx-auto relative mt-3 items-center">
        {fullPrice && (
          <span className="absolute text-red-500 line-through text-sm text-left -top-3">
            ${fullPrice}
          </span>
        )}
        ${price}
        <span className="text-sm text-primary ml-2">
          {discountPercentage}% OFF
        </span>
      </p>
    </div>
  )
}
ItemContainer.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  fullPrice: PropTypes.number,
}

export default ItemContainer
