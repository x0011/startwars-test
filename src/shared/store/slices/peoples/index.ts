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
  hair_color: string,
  skin_color: string,
  eye_color: string,
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
  // filteredData: IPerson[],
  currentPerson: IPerson | undefined,
  nextPage: number,
  filter: FilterPeopleType,
  amount: number,
  wookie: boolean,
}

const initialState: IInitialState = {
  isLoading: false,
  isSuccess: false,
  isLoaded: false,
  isError: false,
  nextPage: 2,
  wookie: true,
  data: [],
  // filteredData: [],
  currentPerson: undefined,
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
    setCurrentPerson(state, action: PayloadAction<IPerson>) {
      state.currentPerson = action.payload;
    },
    toogleLang(state) {
      state.wookie = !state.wookie;
    },
    removeCurrentPerson(state) {
      state.currentPerson = undefined;
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
      state.isLoading = false;
      state.nextPage += 1;
    });
    builder.addCase(fetchNextPage.rejected, (state, action) => {
      state.isLoading = false;
      state.isLoaded = true;
      state.isError = true;
    });
    builder.addCase(fetchNextPage.pending, (state, action) => {
      state.isLoading = true;
      state.isLoaded = false;
      state.isError = false;
    });
  },
});

export const {
  setFilter,
  setCurrentPerson,
  removeCurrentPerson,
  toogleLang,
} = PeoplesSlice.actions;
