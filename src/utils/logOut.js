//Utilidades
import { clearAuth } from '../store/slices/authSlice'
import { cleanShowModal } from '../store/slices/showModalSlice'

const logOut = (dispatch, navigate, activeModal = 0) => {
  localStorage.removeItem('token')
  dispatch(clearAuth())
  if (activeModal != 0) {
    dispatch(cleanShowModal())
    document.body.style.overflow = 'auto'
  }
  navigate('/')
}

export default logOut
