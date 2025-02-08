import { twMerge } from 'tailwind-merge'
import { useState } from 'react'

const DiffsButton = ({ onClick }) => {
  return (
    <button
      className="transition bg-tertiary rounded-xl 
   drop-shadow-2xl hover:bg-tertiary absolute right-4 px-4  duration-200 ease-in-out hover:scale-105"
      onClick={onClick}
    >
      <b className="text-xl">Resaltar diferencias</b>
    </button>
  )
}

const ComparisionSection = ({
  title,
  className1,
  className2,
  className3,
  coincidences = [],
  product1,
  product2,
  highlightDiffs = false,
}) => {
  const [differences, setDifferences] = useState()

  //Establece las diferencias, este handle Diffs es utilizado
  //Solo en la sección de elementos compartidos, por ello se usa la misma coincidence
  //En caso de que un valor sea diferente se devuelven las keys en las que lo es
  const handleDiffs = (coincidences) => {
    if (differences) {
      setDifferences()
    } else {
      const newDifferences = coincidences.filter(
        (coincidence) => product1[coincidence] != product2[coincidence]
      )
      setDifferences(newDifferences)
    }
  }

  // Filtra las propiedades que existen en product1 y product2 para imprimir solo lo existente en cada producto
  const filteredCoincidences1 = coincidences.filter(
    (property) => product1[property]
  )
  const filteredCoincidences2 = coincidences.filter(
    (property) => product2[property]
  )

  return (
    <div>
      <div
        className={twMerge(
          'text-black h-10 border-y border-y-lgray w-full flex flex-row items-center justify-center  text-xl bg-lblue opacity-80 relative',
          className3
        )}
      >
        {/*Muestra un botón para resaltar diferencias */}
        <b>{title}</b>
        {highlightDiffs ? (
          <DiffsButton onClick={() => handleDiffs(filteredCoincidences1)} />
        ) : null}
      </div>
      <div className="h-auto max-h-72 flex flex-row w-full overflow-auto pr-0">
        <div className={twMerge('w-1/2 bg-white h-auto ', className1)}>
          {/*Muestra todas las coincidencias/discrepancias entre productos y elimina aqueellas sin valor */}
          {filteredCoincidences1.map((property, index) => {
            return (
              <div
                className={`h-12 ${index === filteredCoincidences1.length - 1 ? '' : 'border-b'} 
                ${differences && differences.includes(property) ? 'bg-tertiary bg-opacity-35  border-b-tertiary' : 'bg-white'}
                flex items-center pl-3 border-lgray border-r `}
                key={index}
              >
                <p>
                  <b className="text-zinc-500">{property}: </b>{' '}
                  {product1[property]}
                </p>
              </div>
            )
          })}
        </div>
        <div className={twMerge('w-1/2 h-auto bg-white ', className2)}>
          {/*Muestra todas las coincidencias/discrepancias entre productos y elimina aqueellas sin valor */}
          {filteredCoincidences2.map((property, index) => {
            return (
              <div
                className={`h-12 ${index === filteredCoincidences2.length - 1 ? '' : 'border-b'} 
                ${differences && differences.includes(property) ? 'bg-tertiary bg-opacity-35 border-b-tertiary' : 'bg-white'}
                flex items-center pl-3 border-lgray border-r`}
                key={index}
              >
                <p>
                  <b className="text-zinc-500">{property}: </b>{' '}
                  {product2[property]}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ComparisionSection
