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
  searchValue?: '';
}

const initialState = {
  carsList: [],
  requestStatus: 'loading',
  searchValue: '',
} as CarsState;

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setCars(state, action) {
      state.carsList = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setNewCar(state, action) {
      state.carsList.push(action.payload);
    },
    deleteCar(state, action) {
      state.carsList = state.carsList.filter((obj) => obj.id !== action.payload);
    },
    updateCar(state, action) {
      state.carsList = state.carsList.map((car) => {
        if (car.id === action.payload.id) {
          return {
            ...car,
            ...action.payload,
          };
        }
        return car;
      });
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

export const { setCars, setSearchValue, setNewCar, deleteCar, updateCar } = carsSlice.actions;

export default carsSlice.reducer;
