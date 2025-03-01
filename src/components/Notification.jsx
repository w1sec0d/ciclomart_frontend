// Based on a component made by me (w1secod) on: https://github.com/w1sec0d/fullstack-course/blob/main/part7-react-router-and-more/bloglist/frontend/src/components/ToastNotification.jsx

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { clearNotification } from '../store/slices/notificationSlice.js'

const ToastNotification = () => {
  const notification = useSelector((state) => state.notification)
  const dispatch = useDispatch()

  useEffect(() => {
    if (notification.title && !notification.isConfirmation) {
      Swal.fire({
        icon: 'success',
        timer: 5000,
        toast: true,
        timerProgressBar: true,
        position: 'top-right',
        showConfirmButton: false,
        showCloseButton: true,
        ...notification,
      }).then(() => {
        dispatch(clearNotification())
      })
    }
  }, [notification, dispatch])

  return null
}

export default ToastNotification
