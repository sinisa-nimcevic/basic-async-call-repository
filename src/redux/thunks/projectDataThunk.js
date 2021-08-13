import { createAsyncThunk } from '@reduxjs/toolkit';
import { getMyData } from '../../services/dataService';
import { dataFetched, dataFetchedWithError, startLoading } from '../slices/projectDataSlice';

export const fetchProjectDataThunk = createAsyncThunk('projectData/get', async (_, thunkApi) => {
  thunkApi.dispatch(startLoading());
  try {
    const response = await getMyData();
    const { data, error } = response;
    if (data && !error) {
      thunkApi.dispatch(dataFetched(data));
    } else {
      throw new Error('Failed to load data.');
    }
  } catch (error) {
    console.log(error);
    thunkApi.dispatch(dataFetchedWithError());
  }
});
