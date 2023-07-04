import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCars = createAsyncThunk('cars/fetchCars', async () => {
  const res = await fetch('https://myfakeapi.com/api/cars/');

  const data = await res.json();
  console.log(data);

  return data;
});

interface ICarObj {
  id: number;
  car: string;
  car_model: string;
  car_color: string;
  car_model_year: number;
  car_vin: string;
  price: string;
  availability: boolean;
}

interface CarsState {
  carsList: ICarObj[];
  requestStatus: 'loading' | 'success' | 'error';
}

const initialState = {
  carsList: [],
  requestStatus: 'loading', //loading | success | error
} as CarsState;

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setCars(state, action) {
      state.carsList = action.payload;
    },
  },
  extraReducers: {
    [fetchCars.pending]: (state: CarsState) => {
      state.requestStatus = 'loading';
      state.carsList = [];
    },
    [fetchCars.fulfilled]: (state: CarsState, action) => {
      state.carsList = action.payload;
      state.requestStatus = 'success';
    },
    [fetchCars.rejected]: (state: CarsState) => {
      state.requestStatus = 'error';
      state.carsList = [];
    },
  },
});

export const { setCars } = carsSlice.actions;

export default carsSlice.reducer;
