import { createSlice } from '@reduxjs/toolkit';
import { fetchProjectDataThunk } from '../thunks/projectDataThunk';

export const initialState = {
  data: [],
  loading: false,
  error: false,
};

export const projectDataSlice = createSlice({
  name: 'projectData',
  initialState,
  reducers: {
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
  extraReducers: (builder) => {
    builder.addCase(fetchProjectDataThunk.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchProjectDataThunk.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchProjectDataThunk.rejected, (state, action) => {
      state.data = [];
      state.loading = false;
      state.error = true;
    });
  },
});

// Actions
export const { startLoading, dataFetched, dataFetchedWithError, toggleSelectItem } =
  projectDataSlice.actions;

// Selector
export const getProjectDataSlice = (state) => state.projectData;

// Reducer
export default projectDataSlice.reducer;
