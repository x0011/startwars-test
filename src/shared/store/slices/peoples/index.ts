import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllPeoples } from '../../../api';

export const fetchAllPeoples = createAsyncThunk(
  'getAllPeoples',
  async () => {
    const result:any = getAllPeoples('');
    return result;
  },
);

const initialState = {
  isLoading: false,
  isSuccess: false,
  isLoaded: false,
  isError: false,
  data: [],
};

export const PeoplesSlice = createSlice({
  name: 'People',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllPeoples.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isSuccess = true;
      state.isLoaded = true;
      state.isLoading = false;
    });
    builder.addCase(fetchAllPeoples.rejected, (state, action) => {
      state.isLoading = false;
      state.isLoaded = true;
      state.isError = true;
    });
    builder.addCase(fetchAllPeoples.pending, (state, action) => {
      state.isLoading = true;
    });
  },
});
