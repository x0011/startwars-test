import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
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

export type FilterPeopleType = keyof typeof GenderColorsEnum | undefined;

interface IInitialState {
  isLoading: boolean,
  isSuccess: boolean,
  isLoaded: boolean,
  isError: boolean,
  data: IPerson[],
  filteredData: IPerson[],
  nextPage: number,
  filter: FilterPeopleType,
  amount: number,
}

const initialState: IInitialState = {
  isLoading: false,
  isSuccess: false,
  isLoaded: false,
  isError: false,
  nextPage: 2,
  data: [],
  filteredData: [],
  filter: undefined,
  amount: 0,
};

export const PeoplesSlice = createSlice({
  name: 'People',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<FilterPeopleType>) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllPeoples.fulfilled, (state, action) => {
      state.data = [...action.payload.results];
      state.isSuccess = true;
      state.isLoaded = true;
      state.isLoading = false;
      state.amount = action.payload.count;
    });
    builder.addCase(fetchAllPeoples.rejected, (state) => {
      state.isLoading = false;
      state.isLoaded = true;
      state.isError = true;
    });
    builder.addCase(fetchAllPeoples.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchNextPage.fulfilled, (state, action) => {
      state.data = [...state.data, ...action.payload.results];
      state.nextPage += 1;
    });
  },
});

export const { setFilter } = PeoplesSlice.actions;
