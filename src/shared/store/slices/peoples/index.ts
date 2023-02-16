import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GenderColorsEnum } from '../../../../components/tag/GenderTag';
import { getAllPeoples } from '../../../api';

export const fetchAllPeoples = createAsyncThunk(
  'getAllPeoples',
  async () => {
    const result:IResult = await getAllPeoples();
    return result;
  },
);

interface IResult {
  count: number,
  next: string,
  results: IPerson[]
}

export const fetchNextPage = createAsyncThunk(
  'fetchNextPage',
  async (page:number) => {
    const result:IResult = await getAllPeoples(`?page=${page}`);
    return result;
  },
);

export interface IPerson {
  name: string,
  gender: keyof typeof GenderColorsEnum,
  birth_year: string
  hairColor: string,
  skinColor: string,
  eyeColor: string,
  height: string,
  mass: string,
}

interface IInitialState {
  isLoading: boolean,
  isSuccess: boolean,
  isLoaded: boolean,
  isError: boolean,
  data: IPerson[],
  nextPage: number
}

const initialState: IInitialState = {
  isLoading: false,
  isSuccess: false,
  isLoaded: false,
  isError: false,
  nextPage: 2,
  data: [],
};

export const PeoplesSlice = createSlice({
  name: 'People',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllPeoples.fulfilled, (state, action) => {
      state.data = [...action.payload.results];
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
    builder.addCase(fetchNextPage.fulfilled, (state, action) => {
      state.data = [...state.data, ...action.payload.results];
      state.nextPage += 1;
    });
  },
});
