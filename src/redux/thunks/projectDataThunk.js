import { createAsyncThunk } from '@reduxjs/toolkit';
import { getMyData } from '../../services/dataService';

export const fetchProjectDataThunk = createAsyncThunk('projectData/get', async (_, thunkApi) => {
  const response = await getMyData();
  return response.data;
});
