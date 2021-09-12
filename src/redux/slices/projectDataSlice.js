import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loading: false,
  error: false,
};

export const projectDataSlice = createSlice({
  name: 'projectData',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    dataFetched: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    dataFetchedWithError: (state) => {
      state.loading = false;
      state.data = [];
      state.error = true;
    },
  },
});

// Actions
export const { startLoading, dataFetched, dataFetchedWithError } = projectDataSlice.actions;

// Selector
export const getProjectDataSlice = (state) => state.projectData;

// Reducer
export default projectDataSlice.reducer;
