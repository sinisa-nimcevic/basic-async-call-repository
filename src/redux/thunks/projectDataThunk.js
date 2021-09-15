import { createAsyncThunk } from '@reduxjs/toolkit';
import dataService from '../../services/dataService';

export const fetchProjectDataThunk = createAsyncThunk('projectData/get', async (_, thunkApi) => {
  const response = await dataService.getMyData();
  return response.data;
});
