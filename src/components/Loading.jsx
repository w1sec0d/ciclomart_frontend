import { useSelector } from 'react-redux'
import { SyncLoader } from 'react-spinners'

const Loading = () => {
  const loadingState = useSelector((state) => state.loading)
  if (!loadingState) {
    // enable scroll
    document.body.style.overflow = 'auto'
    return null
  } else {
    // scroll to top
    window.scrollTo(0, 0)
    // disable scroll
    document.body.style.overflow = 'hidden'
  }

  return (
    <div className="absolute bg-white shadow-a bg-opacity-50 z-50 w-full h-full top-0 left-0 flex items-center justify-center">
      <SyncLoader />
    </div>
  )
}

export default Loading
