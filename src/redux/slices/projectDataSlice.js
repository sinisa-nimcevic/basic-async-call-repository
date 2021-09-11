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
      state = { ...initialState, loading: true };
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
    toggleSelectItem: (state, action) => {
      const { id } = action.payload;
      state.data = state.data.map((item) => {
        if (item.id === id) {
          item.isActive = !item.isActive;
        }
        return item;
      });
    },
  },
});

// Actions
export const { startLoading, dataFetched, dataFetchedWithError, toggleSelectItem } =
  projectDataSlice.actions;

// Selector
export const getProjectDataSlice = (state) => state.projectData;

// Reducer
export default projectDataSlice.reducer;
