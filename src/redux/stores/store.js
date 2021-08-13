import { configureStore } from '@reduxjs/toolkit';
import projectDataReducer from '../slices/projectDataSlice';

export default configureStore({
  reducer: {
    projectData: projectDataReducer,
  },
});
