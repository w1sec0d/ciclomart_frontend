// This handles the notification state globally in the app
// It has two actions, setNotification and clearNotification
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: '',
}
export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification: (state, action) => {
      return action.payload
    },
    clearNotification: () => {
      return initialState
    },
  },
})

export const { setNotification, clearNotification } = notificationSlice.actions

export default notificationSlice.reducer
