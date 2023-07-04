import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ICarObj } from '../../types';

export const fetchCars = createAsyncThunk('cars/fetchCars', async () => {
  const res = await fetch('https://myfakeapi.com/api/cars/');

  const { cars } = await res.json();
  console.log(cars);

  return cars;
});

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
