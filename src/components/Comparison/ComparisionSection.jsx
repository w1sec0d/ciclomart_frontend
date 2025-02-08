import { twMerge } from 'tailwind-merge'

const ComparisionSection = ({
  title,
  className1,
  className2,
  className3,
  coincidences = [],
  product1,
  product2,
}) => {
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
          'text-zinc-500 h-10 border-y border-y-lgray w-full flex items-center justify-center  text-xl',
          className3
        )}
      >
        <b>{title}</b>
      </div>
      <div className="h-auto max-h-72 flex flex-row w-full overflow-auto pr-0">
        <div className={twMerge('w-1/2 bg-white h-auto', className1)}>
          {/*Muestra todas las coincidencias/discrepancias entre productos y elimina aqueellas sin valor */}
          {filteredCoincidences1.map((property, index) => {
            return (
              <div
                className={`h-12 ${index === filteredCoincidences1.length - 1 ? '' : 'border-b'} flex items-center pl-3 border-lgray border-r`}
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
                className={`h-12 ${index === filteredCoincidences2.length - 1 ? '' : 'border-b'} flex items-center pl-3 border-lgray border-r`}
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
