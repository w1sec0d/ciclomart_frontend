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
  },
})

export const { setShowModal, cleanShowModal } = showModalSlice.actions

export default showModalSlice.reducer
