import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import apiService from '../../services/apiService'

export const fetchSearchResults = createAsyncThunk(
  'search/fetchSearchResults',
  async (filters) => {
    const response = await apiService.searchProducts(filters)
    return response.results  // Extract results from the response
  }
)

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    results: [],
    status: 'idle',
    error: null,
    searchInput: localStorage.getItem('searchInput') || '',
  },
  reducers: {
    clearSearchResults: (state) => {
      state.results = []
      state.status = 'idle'
      state.searchInput = ''
    },
    setSearchInput: (state, action) => {
      state.searchInput = action.payload
      localStorage.setItem('searchInput', action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.results = action.payload
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const { clearSearchResults, setSearchInput } = searchSlice.actions

export default searchSlice.reducer
