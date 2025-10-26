import React from 'react'
import IndividualProduct from '../../components/IndividualProduct'
import { useTranslation } from 'react-i18next'

const ProductGrid = ({ filteredBikes, bicicletas }) => {
  const { t } = useTranslation()
  const bikesToShow = filteredBikes.length > 0 ? filteredBikes : bicicletas

  return (
    <div className="w-full p-2 md:w-3/4 md:p-0">
      <IndividualProduct
        products={bikesToShow}
        title={t('products.findYourNextBike')}
        columns={{ base: 1, md: 4 }}
        itemsPerPage={8}
      />
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm bg-gray-200 px-2 py-1 rounded">
          {filteredBikes.length > 0
            ? `${filteredBikes.length} ${filteredBikes.length === 1 ? t('products.bicycleFound') : t('products.bicyclesFound')}`
            : `${bicicletas.length} ${bicicletas.length === 1 ? t('products.bicycleAvailable') : t('products.bicyclesAvailable')}`}
        </span>
      </div>
    </div>
  )
}

export default ProductGrid
