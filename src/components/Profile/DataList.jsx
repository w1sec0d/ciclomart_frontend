// Utils
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

// typeContent = 1 = Purchases
// typeContent = 2 = Sales
// typeContent = 3 = Stores

const Title = ({ typeContent }) => {
  const { t } = useTranslation()

  return (
    <div className="w-full flex justify-center">
      <b className="text-primary border-b border-lgray">
        {typeContent === 1
          ? t('profile.yourPurchases')
          : typeContent === 2
            ? t('profile.yourSales')
            : t('profile.ourStores')}
      </b>
    </div>
  )
}

const DataList = ({ data = [], typeContent = 1, onShowModal = () => {} }) => {
  const { t } = useTranslation()

  // Get instructions for displaying data in sidebar buttons
  const getInstructions = () => {
    if (typeContent === 3) {
      return { firstKey: 'nombre', secondKey: 'telefono' }
    }
    return { firstKey: 'fecha', secondKey: 'precio_unitario' }
  }

  // Format date to abbreviated format
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString()
  }

  const { firstKey, secondKey } = getInstructions()

  if (!data) return <p>{t('profile.noDataToShow')}</p>
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
          <p>{t('profile.noDataToShow')}</p>
        )}
      </div>
    </div>
  )
}

DataList.propTypes = {
  typeContent: PropTypes.number,
}

export default DataList
