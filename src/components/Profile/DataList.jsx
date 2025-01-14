/*Utils*/
import PropTypes from 'prop-types'

/*typeContent = 1 = Puchases
typeContent = 2 = Sales
typeContent = 3 = Stores*/
const DataList = ({
  data = [],
  typeContent = 1,
  firstExpression,
  secondExpression,
}) => {
  return (
    <div className="w-full h-full overflow-auto">
      <div className="w-full flex justify-center">
        <b className="text-primary border-b border-lgray">
          {typeContent === 1
            ? 'Tus Compras'
            : typeContent === 2
              ? 'Tus Ventas'
              : 'Nuestras Tiendas'}
        </b>
      </div>
      <div>
        {data.length != 0 ? (
          data.map((data, index) => {
            return (
              <div
                className={`pl-1 pt-2 flex flex-row  items-center border-b border-lgray ${index === 0 ? 'mt-2' : ''}`}
                key={index}
              >
                <b
                  className="text-secondary mr-2 break-all line-clamp-1 w-2/3 hover:cursor-pointer"
                  title={eval(firstExpression)}
                >
                  {eval(firstExpression)}
                </b>
                <p className="text-sm ml-auto break-all">
                  {eval(secondExpression)}
                </p>
              </div>
            )
          })
        ) : (
          <p>Loading</p>
        )}
      </div>
    </div>
  )
}

DataList.propTypes = {
  data: PropTypes.array.isRequired,
  typeContent: PropTypes.number,
  firstExpression: PropTypes.string.isRequired,
  secondExpression: PropTypes.string.isRequired,
}

export default DataList
