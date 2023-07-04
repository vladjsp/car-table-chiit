import { useSelector } from 'react-redux';
import { ICarObj } from '../types';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from '@mui/material';
import { carsLocal } from './constants';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import ActionSelect from './ActionSelect';

const CarsTable = () => {
  //const { carsList } = useSelector((state) => state.cars);

  return (
    <TableContainer component={Paper}>
      <Table stickyHeader sx={{ height: '100%', width: '100%' }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Company</TableCell>
            <TableCell align='center'>Model</TableCell>
            <TableCell align='center'>VIN</TableCell>
            <TableCell align='center'>Color</TableCell>
            <TableCell align='center'>Year</TableCell>
            <TableCell align='center'>Price</TableCell>
            <TableCell align='center'>Availability</TableCell>
            <TableCell align='center'>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {carsLocal.map((car: ICarObj) => (
            <TableRow key={car.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align='left'>{car.car}</TableCell>
              <TableCell align='left'>{car.car_model}</TableCell>
              <TableCell align='center'>{car.car_vin}</TableCell>
              <TableCell align='center'>{car.car_color}</TableCell>
              <TableCell align='center'>{car.car_model_year}</TableCell>
              <TableCell align='right'>{car.price}</TableCell>
              <TableCell align='center'>{car.availability ? 'YES' : 'NO'}</TableCell>
              <TableCell align='center'>
                <ActionSelect carId={car.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CarsTable;
