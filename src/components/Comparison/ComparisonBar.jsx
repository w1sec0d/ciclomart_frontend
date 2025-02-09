import { useSelector } from 'react-redux'

const ComparisonBar = () => {
  const idProduct1 = useSelector((state) => state.comparison.idProduct1)
  const idProduct2 = useSelector((state) => state.comparison.idProduct2)
  return (
    <>
      {idProduct1 != 0 && idProduct2 != 0 && (
        <div className="sticky top-[64px] z-10 bg-white shadow-md flex flex-row items-center justify-center h-10 drop-shadow-2xl">
          <button className="bg-tertiary h-full w-1/2">Comparar</button>
          <button className="bg-secondary w-1/2 h-full">Limpiar</button>
        </div>
      )}
    </>
  )
}

export default ComparisonBar
