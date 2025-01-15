import { configureStore } from '@reduxjs/toolkit'
import notificationReducer from './slices/notificationSlice'
import authReducer from './slices/authSlice'
import loadingReducer from './slices/loadingSlice'

export default configureStore({
  reducer: {
    notification: notificationReducer,
    auth: authReducer,
    loading: loadingReducer,
  },
})
