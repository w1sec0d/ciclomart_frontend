// filepath: /src/store/slices/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    setCart: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { addItem, removeItem, setCart } = cartSlice.actions;
export default cartSlice.reducer;