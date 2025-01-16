import { createSlice } from '@reduxjs/toolkit'

const loadingSlice = createSlice({
  name: 'loading',
  initialState: false,
  reducers: {
    setLoading: () => {
      return true
    },
    clearLoading: () => {
      return false
    },
  },
})

export const { setLoading, clearLoading } = loadingSlice.actions
export default loadingSlice.reducer
