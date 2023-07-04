import { useSelector } from 'react-redux';
import { ICarObj } from '../types';
// import {
//   TableContainer,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   Paper,
// } from '@mui/material';
import { carsLocal } from './constants';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const CarsTable = () => {
  //const { carsList } = useSelector((state) => state.cars);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 30 },
    { field: 'car', headerName: 'Company', width: 160 },
    { field: 'car_model', headerName: 'Model', width: 180 },
    {
      field: 'car_color',
      headerName: 'Color',
      width: 90,
    },
    {
      field: 'car_model_year',
      headerName: 'Year',
      width: 90,
    },
    {
      field: 'car_vin',
      headerName: 'Vin',
      width: 180,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 90,
    },
    {
      field: 'availability',
      headerName: 'Availability',
      width: 90,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 120,
    },
  ];
  return (
    //<TableContainer component={Paper}>
    //      <Table stickyHeader sx={{ minWidth: 650 }} aria-label='simple table'>
    //        <TableHead>
    //          <TableRow>
    //            <TableCell>Company</TableCell>
    //            <TableCell align='center'>Model</TableCell>
    //            <TableCell align='center'>VIN</TableCell>
    //            <TableCell align='center'>Color</TableCell>
    //            <TableCell align='center'>Year</TableCell>
    //            <TableCell align='center'>Price</TableCell>
    //            <TableCell align='center'>Availability</TableCell>
    //            <TableCell align='center'>Actions</TableCell>
    //          </TableRow>
    //        </TableHead>
    //        <TableBody>
    //          {carsList.map((car: ICarObj) => (
    //            <TableRow key={car.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
    //             <TableCell align='center'>{car.car}</TableCell>
    //             <TableCell align='center'>{car.car_model}</TableCell>
    //             <TableCell align='center'>{car.car_vin}</TableCell>
    //             <TableCell align='center'>{car.car_color}</TableCell>
    //             <TableCell align='center'>{car.car_model_year}</TableCell>
    //             <TableCell align='center'>{car.price}</TableCell>
    //             <TableCell align='center'>{car.availability ? 'YES' : 'NO'}</TableCell>
    //             <TableCell align='center'>Select</TableCell>
    //           </TableRow>
    //         ))}
    //       </TableBody>
    //     </Table>
    //   </TableContainer>

    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={carsLocal}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 20 },
          },
        }}
        pageSizeOptions={[10, 20, 50]}
      />
    </div>
  );
};

export default CarsTable;
