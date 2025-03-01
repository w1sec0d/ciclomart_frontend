import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  total: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const itemExists = state.items.find(
        (item) => item.id === action.payload.id
      )
      if (!itemExists) {
        state.items.push(action.payload)
      }
      state.total = state.items.reduce((acc, item) => acc + item.precio_unitario * item.cantidad, 0)
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
      state.total = state.items.reduce((acc, item) => acc + item.precio_unitario * item.cantidad, 0)
    },
    setCart: (state, action) => {
      state.items = action.payload
      state.total = state.items.reduce((acc, item) => acc + item.precio_unitario * item.cantidad, 0)
    },
  },
})

export const { addItem, removeItem, setCart } = cartSlice.actions
export default cartSlice.reducer
