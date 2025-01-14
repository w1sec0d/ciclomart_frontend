import { configureStore } from '@reduxjs/toolkit'
import notificationReducer from './slices/notificationSlice'
import authReducer from './slices/authSlice'

export default configureStore({
  reducer: {
    notification: notificationReducer,
    auth: authReducer,
  },
})
