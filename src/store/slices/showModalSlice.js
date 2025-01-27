import { createSlice } from '@reduxjs/toolkit'

const showModalSlice = createSlice({
  name: 'showModal',
  initialState: {
    activeModal: 0,
  },

  reducers: {
    setShowModal: (state, action) => action.payload,
    cleanShowModal: () => initialState,
  },
})

export const { setShowModal, cleanShowModal } = showModalSlice.actions

export default showModalSlice.reducer
