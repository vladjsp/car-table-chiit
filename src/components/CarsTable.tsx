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
  TablePagination,
} from '@mui/material';
import { carsLocal } from './constants';
import ActionSelect from './ActionSelect';
import { useState } from 'react';

const CarsTable = () => {
  //const { carsList } = useSelector((state) => state.cars);
  const { searchValue } = useSelector((state) => state.cars);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredList = carsLocal.filter(
    (obj) =>
      obj.car.toLocaleLowerCase().includes(searchValue.toLowerCase()) ||
      obj.car_model.toLocaleLowerCase().includes(searchValue.toLowerCase()) ||
      obj.car_color.toLocaleLowerCase().includes(searchValue.toLowerCase())
  );
  const indexOfLastCar = (page + 1) * rowsPerPage;
  const indexOfFirstCar = indexOfLastCar - rowsPerPage;
  const displayedCars = filteredList.slice(indexOfFirstCar, indexOfLastCar);

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
          {displayedCars.map((car: ICarObj) => (
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
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component='div'
        count={filteredList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default CarsTable;
