import PropTypes from 'prop-types'
import ComparisonButton from '../Comparison/ComparisonButton'
import { useSelector } from 'react-redux'

//This component is used to display each product row in the table display of search page.

const ProductRow = (props) => {
  const idProduct1 = useSelector((state) => state.comparison.idProduct1)
  const idProduct2 = useSelector((state) => state.comparison.idProduct2)
  const selectedClass =
    idProduct1 === props.id
      ? 'border-4 border-secondary border-dashed'
      : idProduct2 === props.id
        ? 'border-4 border-tertiary border-dashed'
        : 'border-b'

  return (
    <div
      className={`grid grid-cols-4  py-4 px-4 items-center group relative h-auto ${selectedClass}`}
    >
      <ComparisonButton idProducto={props.id} />
      <div className="flex items-center">
        <img src={props.image} alt={props.title} className="h-20 w-20 mr-4" />
      </div>
      <div className="">
        <h3 className="text-sm font-bold">{props.description}</h3>
        <p className="text-xs text-gray-600">{props.brand}</p>
      </div>
      <span className="text-gray-800">{props.type}</span>
      <span className="text-gray-800">{props.price}</span>
    </div>
  )
}

ProductRow.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  brand: PropTypes.string,
  type: PropTypes.string,
  price: PropTypes.string,
}

export default ProductRow
