import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { getComponents } from '../../services/productService'
import bikeIcon from '../../assets/bikeIcon.png'
import IndividualProduct from '../../components/IndividualProduct'
import InfoIcon from '@mui/icons-material/Info'

import { setLoading, clearLoading } from '../../store/slices/loadingSlice'

const ComponentFinderPage = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  // State for selected component
  const [selectedComponent, setSelectedComponent] = useState(null)
  // Bicycle components data
  const {
    data: components,
    isError,
    isLoading,
  } = useQuery(['components'], getComponents)

  useEffect(() => {
    if (isLoading) {
      dispatch(setLoading())
    } else {
      dispatch(clearLoading())
    }
  }, [isLoading, dispatch])

  if (isLoading) return null
  if (isError) return <p>Error: {isError.message}</p>

  // Function to handle component click
  const handleComponentClick = (componentId) => {
    setSelectedComponent(componentId)
  }

  const normalizeString = (string) =>
    string
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()

  const filteredComponents = selectedComponent
    ? components.filter(
        (component) =>
          component.categoria === selectedComponent ||
          normalizeString(component.categoria) ===
            normalizeString(selectedComponent)
      )
    : []

  return (
    <>
      <div className="bg-slate-100 flex flex-col md:flex-row w-full mx-auto">
        {/* Interactive image panel */}
        <div className="w-full md:w-1/3 stroke-black">
          {/* Instructions */}
          <h1 className="bg-tertiary text-3xl font-bold shadow-xl text-center w-full py-5 px-5">
            {t('products.findComponentsForBike')}
          </h1>
          <div className="m-1 h-full flex flex-col items-center pb-8 ">
            {/* Image container and hotspots */}
            <div className="relative w-full max-w-lg mx-auto p-3">
              {/* Bicycle image */}
              <img
                src={bikeIcon}
                alt={t('products.bicycles')}
                className="opacity-50 "
              ></img>

              {/* Interactive areas (hotspots) */}
              <button
                className={`absolute bottom-[30%] left-[12%] w-[20%] h-[20%] rounded-full ${selectedComponent === 'Ruedas' ? 'bg-tertiary opacity-60' : 'bg-tertiary opacity-40 hover:opacity-60'}`}
                onClick={() => handleComponentClick('Ruedas')}
                aria-label={t('products.wheelsFront')}
              />

              <button
                className={`absolute bottom-[30%] right-[12%] w-[20%] h-[20%] rounded-full ${selectedComponent === 'Ruedas' ? 'bg-tertiary opacity-60' : 'bg-tertiary opacity-40 hover:opacity-60'}`}
                onClick={() => handleComponentClick('Ruedas')}
                aria-label={t('products.wheelsRear')}
              />

              <button
                className={`absolute bottom-[50%] right-[23%] w-[10%] h-[10%] rounded-full ${selectedComponent === 'Suspensión' ? 'bg-tertiary opacity-60' : 'bg-tertiary opacity-40 hover:opacity-60'}`}
                onClick={() => handleComponentClick('Suspensión')}
                aria-label={t('products.suspensionComponent')}
              />

              <button
                className={`absolute top-[25%] right-[10%] -translate-x-1/2 w-[10%] h-[14%] rounded-full ${selectedComponent === 'Manubrios' ? 'bg-secondary opacity-60' : 'bg-secondary opacity-40 hover:opacity-60'}`}
                onClick={() => handleComponentClick('Manubrios')}
                aria-label={t('products.handlebars')}
              />

              <button
                className={`absolute top-[25%] right-[20%] -translate-x-1/2 w-[10%] h-[10%] rounded-full ${selectedComponent === 'Frenos' ? 'bg-secondary opacity-60' : 'bg-secondary opacity-40 hover:opacity-60'}`}
                onClick={() => handleComponentClick('Frenos')}
                aria-label={t('products.brakes')}
              />

              <button
                className={`absolute top-[20%] left-[18%] translate-x-4 w-[25%] h-[10%] rounded-full ${selectedComponent === 'Sillines' ? 'bg-tertiary opacity-60' : 'bg-tertiary opacity-40 hover:opacity-60'}`}
                onClick={() => handleComponentClick('Sillines')}
                aria-label={t('products.saddle')}
              />

              <button
                className={`absolute bottom-[26%] left-[50%] -translate-x-8 w-[8%] h-[6%] rounded-full ${selectedComponent === 'Pedales' ? 'bg-tertiary opacity-60' : 'bg-tertiary opacity-40 hover:opacity-60'}`}
                onClick={() => handleComponentClick('Pedales')}
                aria-label={t('products.pedals')}
              />

              <button
                className={`absolute bottom-[35%] left-[49%] -translate-x-8 w-[10%] h-[10%] rounded-full ${selectedComponent === 'Transmisión' ? 'bg-secondary opacity-60' : 'bg-secondary opacity-40 hover:opacity-60'}`}
                onClick={() => handleComponentClick('Transmisión')}
                aria-label={t('products.transmissionComponent')}
              />
            </div>
          </div>
        </div>
        {/* Products panel */}
        <div className="w-full md:w-2/3 rounded-lg px-3 h-full">
          {selectedComponent ? (
            <IndividualProduct
              products={filteredComponents}
              title={selectedComponent}
              columns={3}
            />
          ) : (
            <div className="h-full flex flex-row items-center pt-16 justify-center text-gray-500">
              <InfoIcon className="text-6xl mr-4" />
              <p className="text-center text-bold text-xl">
                {t('products.selectComponentToView')}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ComponentFinderPage
