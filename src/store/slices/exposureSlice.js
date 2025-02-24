import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  precio: 0,
  grade: 0,
}

const exposureSlice = createSlice({
  name: 'exposureGrade',
  initialState,
  reducers: {
    setExposure: (state, action) => {
      const { key, value } = action.payload
      state[key] = value
    },
    cleanExposure: () => initialState,
  },
})

export const { setExposure, cleanExposure } = exposureSlice.actions

export default exposureSlice.reducer
