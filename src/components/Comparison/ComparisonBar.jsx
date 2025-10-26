import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { cleanComparison } from '../../store/slices/comparisonSlice'

const ComparisonBar = () => {
  const idProduct1 = useSelector((state) => state.comparison.idProduct1)
  const idProduct2 = useSelector((state) => state.comparison.idProduct2)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleCompare = () => {
    navigate(`/comparison/${idProduct1}/${idProduct2}`)
    dispatch(cleanComparison())
  }

  const handleClean = () => {
    dispatch(cleanComparison())
  }

  return (
    <>
      {idProduct1 != 0 && idProduct2 != 0 && (
        <div className="fixed top-[64px] left-[50%] translate-x-[-50%] z-50 bg-white shadow-md flex flex-row items-center justify-center h-10 drop-shadow-2xl w-full">
          <button className="bg-tertiary h-full w-1/2" onClick={handleCompare}>
            Comparar
          </button>
          <button className="bg-secondary w-1/2 h-full" onClick={handleClean}>
            Limpiar
          </button>
        </div>
      )}
    </>
  )
}

export default ComparisonBar
