import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeModal: 0,
}

const showModalSlice = createSlice({
  name: 'showModal',
  initialState,
  reducers: {
    setShowModal: (state, action) => action.payload,
    cleanShowModal: () => initialState,
    setShowAddressModal: (state, action) => {
      state.activeModal = action.payload
    },
  },
})

export const { setShowModal, cleanShowModal, setShowAddressModal } = showModalSlice.actions

export default showModalSlice.reducer
