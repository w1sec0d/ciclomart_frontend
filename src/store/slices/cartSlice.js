import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import cartService from '../../services/cartService'

const initialState = {
  items: [],
  total: 0,
}

export const addItemToCart = createAsyncThunk(
  'cart/addItemToCart',
  async ({ idUsuario, idProducto, cantidad }, { dispatch }) => {
    const response = await cartService.addProductToCart(idUsuario, idProducto, cantidad)
    dispatch(addItem(response))
    return response
  }
)

export const removeItemFromCart = createAsyncThunk(
  'cart/removeItemFromCart',
  async ({ idUsuario, idProducto }, { dispatch }) => {
    await cartService.removeFromCart(idUsuario, idProducto)
    dispatch(removeItem(idProducto))
  }
)

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const itemExists = state.items.find(
        (item) => item.idProducto === action.payload.idProducto
      )
      if (itemExists) {
        itemExists.cantidad += action.payload.cantidad
      } else {
        state.items.push(action.payload)
      }
      state.total = state.items.reduce((acc, item) => acc + item.precio_unitario * item.cantidad, 0)
    },
    removeItem: (state, action) => {
      const itemIndex = state.items.findIndex((item) => item.idProducto === action.payload)
      if (itemIndex !== -1) {
        state.items.splice(itemIndex, 1)
      }
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
