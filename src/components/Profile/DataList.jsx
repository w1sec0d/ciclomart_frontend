/*Utils*/
import PropTypes from 'prop-types'

/*typeContent = 1 = Puchases
typeContent = 2 = Sales
typeContent = 3 = Stores*/

const Title = ({ typeContent }) => {
  return (
    <div className="w-full flex justify-center">
      <b className="text-primary border-b border-lgray">
        {typeContent === 1
          ? 'Tus Compras'
          : typeContent === 2
            ? 'Tus Ventas'
            : 'Nuestras Tiendas'}
      </b>
    </div>
  )
}

const DataList = ({ data = [], typeContent = 1, onShowModal = () => {} }) => {
  //Obtiene las instrucciones para mostrar datos en los botones del sidebar
  const getInstructions = () => {
    if (typeContent === 3) {
      return { firstKey: 'nombre', secondKey: 'telefono' }
    }
    return { firstKey: 'fecha', secondKey: 'precio_unitario' }
  }

  //Formatea la fecha para mostrar un formato más abreviado
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString()
  }

  const { firstKey, secondKey } = getInstructions()

  if (!data) return <p>No hay datos que mostrar</p>
  return (
    <div className="w-full h-full overflow-auto">
      <Title typeContent={typeContent} />
      <div>
        {data.length != 0 ? (
          data.map((item, index) => {
            return (
              <div
                className={`pl-1 pt-2 flex flex-row  items-center border-b border-lgray ${index === 0 ? 'mt-2' : ''}`}
                key={index}
              >
                <b
                  className="text-secondary mr-2 break-all line-clamp-1 w-2/3 hover:cursor-pointer hover:underline"
                  title={item[firstKey]}
                  onClick={onShowModal}
                >
                  {typeContent < 3
                    ? formatDate(item[firstKey])
                    : item[firstKey]}
                </b>
                <p className="text-sm ml-auto break-all">{item[secondKey]}</p>
              </div>
            )
          })
        ) : (
          <p>No hay datos que mostrar</p>
        )}
      </div>
    </div>
  )
}

DataList.propTypes = {
  typeContent: PropTypes.number,
}

export default DataList
