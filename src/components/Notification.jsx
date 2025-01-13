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
        title: notification.title,
        text: notification.text,
        icon: notification.icon ?? 'success',
        timer: notification.timer ?? 5000,
        toast: notification.isToast ?? true,
        position: notification.position ?? 'top-right',
        showConfirmButton: false,
      }).then(() => {
        dispatch(clearNotification())
      })
    }
  }, [notification, dispatch])

  return null
}

export default ToastNotification
