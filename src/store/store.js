import { configureStore } from '@reduxjs/toolkit'
import notificationReducer from './slices/notificationSlice'
import authReducer from './slices/authSlice'
import loadingReducer from './slices/loadingSlice'
import showModalReducer from './slices/showModalSlice'

export default configureStore({
  reducer: {
    notification: notificationReducer,
    auth: authReducer,
    loading: loadingReducer,
    showModal: showModalReducer,
  },
})
