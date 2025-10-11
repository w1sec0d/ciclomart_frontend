import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { useDispatch } from 'react-redux'

import { getComponentes } from '../../services/productService'
import bikeIcon from '../../assets/bikeIcon.png'
import IndividualProduct from '../../components/IndividualProduct'
import InfoIcon from '@mui/icons-material/Info'

import { setLoading, clearLoading } from '../../store/slices/loadingSlice'

const BicycleComponentFinder = () => {
  const dispatch = useDispatch()
  // Estado para el componente seleccionado
  const [selectedComponent, setSelectedComponent] = useState(null)
  // Datos de ejemplo para componentes de bicicleta
  const {
    data: componentes,
    isError,
    isLoading,
  } = useQuery(['ofertas'], getComponentes)

  useEffect(() => {
    if (isLoading) {
      dispatch(setLoading())
    } else {
      dispatch(clearLoading())
    }
  }, [isLoading, dispatch])

  if (isLoading) return null
  if (isError) return <p>Error: {isError.message}</p>

  // Función para manejar el clic en un componente
  const handleComponentClick = (componentId) => {
    setSelectedComponent(componentId)
  }

  const normalizeString = (string) =>
    string
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()

  const filteredComponentes = selectedComponent
    ? componentes.filter(
        (componente) =>
          componente.categoria === selectedComponent ||
          normalizeString(componente.categoria) ===
            normalizeString(selectedComponent)
      )
    : []

  return (
    <>
      <div className="bg-slate-100 flex flex-col md:flex-row w-full mx-auto">
        {/* Panel de imagen interactiva */}
        <div className="w-full md:w-1/3 stroke-black">
          {/* Instrucciones */}
          <h1 className="bg-tertiary text-3xl font-bold shadow-xl text-center w-full py-5 px-5">
            Encuentra los componentes para tu bicicleta
          </h1>
          <div className="m-1 h-full flex flex-col items-center pb-8 ">
            {/* Contenedor de la imagen y los hotspots */}
            <div className="relative w-full max-w-lg mx-auto p-3">
              {/* Imagen de bicicleta */}
              <img
                src={bikeIcon}
                alt="Bicicleta de montaña"
                className="opacity-50 "
              ></img>

              {/* Áreas interactivas (hotspots) */}
              <button
                className={`absolute bottom-[30%] left-[12%] w-[20%] h-[20%] rounded-full ${selectedComponent === 'wheels' ? 'bg-tertiary opacity-60' : 'bg-tertiary opacity-40 hover:opacity-60'}`}
                onClick={() => handleComponentClick('Ruedas')}
                aria-label="Ruedas delanteras"
              />

              <button
                className={`absolute bottom-[30%] right-[12%] w-[20%] h-[20%] rounded-full ${selectedComponent === 'wheels' ? 'bg-tertiary opacity-60' : 'bg-tertiary opacity-40 hover:opacity-60'}`}
                onClick={() => handleComponentClick('Ruedas')}
                aria-label="Ruedas traseras"
              />

              <button
                className={`absolute bottom-[50%] right-[23%] w-[10%] h-[10%] rounded-full ${selectedComponent === 'suspension' ? 'bg-tertiary opacity-60' : 'bg-tertiary opacity-40 hover:opacity-60'}`}
                onClick={() => handleComponentClick('Suspensión')}
                aria-label="Suspensión"
              />

              <button
                className={`absolute top-[25%] right-[10%] -translate-x-1/2 w-[10%] h-[14%] rounded-full ${selectedComponent === 'handlebars' ? 'bg-secondary opacity-60' : 'bg-secondary opacity-40 hover:opacity-60'}`}
                onClick={() => handleComponentClick('Manubrios')}
                aria-label="Manillar"
              />

              <button
                className={`absolute top-[25%] right-[20%] -translate-x-1/2 w-[10%] h-[10%] rounded-full ${selectedComponent === 'brakes' ? 'bg-secondary opacity-60' : 'bg-secondary opacity-40 hover:opacity-60'}`}
                onClick={() => handleComponentClick('Frenos')}
                aria-label="Frenos"
              />

              <button
                className={`absolute top-[20%] left-[18%] translate-x-4 w-[25%] h-[10%] rounded-full ${selectedComponent === 'saddle' ? 'bg-tertiary opacity-60' : 'bg-tertiary opacity-40 hover:opacity-60'}`}
                onClick={() => handleComponentClick('Sillines')}
                aria-label="Sillín"
              />

              <button
                className={`absolute bottom-[26%] left-[50%] -translate-x-8 w-[8%] h-[6%] rounded-full ${selectedComponent === 'pedals' ? 'bg-tertiary opacity-60' : 'bg-tertiary opacity-40 hover:opacity-60'}`}
                onClick={() => handleComponentClick('Pedales')}
                aria-label="Pedales"
              />

              <button
                className={`absolute bottom-[35%] left-[49%] -translate-x-8 w-[10%] h-[10%] rounded-full ${selectedComponent === 'transmission' ? 'bg-secondary opacity-60' : 'bg-secondary opacity-40 hover:opacity-60'}`}
                onClick={() => handleComponentClick('Transmisión')}
                aria-label="Transmisión"
              />

              {/* <button 
                        className={`absolute top-32 right-40 w-12 h-12 rounded-full ${selectedComponent === 'brakes' ? 'bg-purple-500 opacity-40' : 'bg-purple-300 opacity-20 hover:opacity-40'}`}
                        onClick={() => handleComponentClick('brakes')}
                        aria-label="Frenos"
                        /> */}
            </div>
          </div>
        </div>
        {/* <div className=" w-3 bg-secondary"></div> */}
        {/* Panel de productos */}
        <div className="w-full md:w-2/3 rounded-lg px-3 h-full">
          {selectedComponent ? (
            <>
              <IndividualProduct
                products={filteredComponentes}
                title={selectedComponent}
                columns={3}
              />
            </>
          ) : (
            <div className="h-full flex flex-row items-center pt-16 justify-center text-gray-500">
              <InfoIcon className="text-6xl mr-4" />
              <p className="text-center text-bold text-xl">
                Selecciona un componente de la bicicleta para ver los productos
                disponibles
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default BicycleComponentFinder
