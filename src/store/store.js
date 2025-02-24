import { configureStore } from '@reduxjs/toolkit'
import notificationReducer from './slices/notificationSlice'
import authReducer from './slices/authSlice'
import loadingReducer from './slices/loadingSlice'
import searchReducer from './slices/searchSlice'
import showModalReducer from './slices/showModalSlice'
import comparisonReducer from './slices/comparisonSlice'
import exposureReducer from './slices/exposureSlice'

export default configureStore({
  reducer: {
    notification: notificationReducer,
    auth: authReducer,
    loading: loadingReducer,
    search: searchReducer,
    showModal: showModalReducer,
    comparison: comparisonReducer,
    exposure: exposureReducer,
  },
})
