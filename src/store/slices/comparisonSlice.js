import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  idProduct1: 0,
  idProduct2: 0,
}

const ComparisonSlice = createSlice({
  name: 'comparison',
  initialState,
  reducers: {
    setComparisonItem: (state, action) => {
      const { key, value } = action.payload
      state[key] = value
    },
    removeComparisonItem: (state, action) => {
      const key = action.payload
      state[key] = 0
    },
    cleanComparison: () => initialState,
  },
})

export const { setComparisonItem, removeComparisonItem, cleanComparison } =
  ComparisonSlice.actions

export default ComparisonSlice.reducer
