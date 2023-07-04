import { Box, Button, Container } from '@mui/material';
import './App.css';
import Search from './components/Search';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCars, setCars, setNewCar } from './redux/slices/carSlice';
import CarsTable from './components/CarsTable';
import AddCarModal from './components/AddCarModal';
import { ICarObj } from './types';

function App() {
  const dispatch = useDispatch();
  const { carsList } = useSelector((state) => state.cars);
  const [openAddCarModal, setOpenAddCarModal] = useState(false);

  const getCars = () => {
    //dispatch(fetchCars());
  };

  useEffect(() => {
    //getCars();
  }, []);

  const handleAddCar = (newCar: ICarObj) => {
    dispatch(setNewCar(newCar));
  };

  return (
    <Container
      maxWidth={false}
      sx={{ display: 'flex', flexDirection: 'column', maxWidth: '1400px', padding: '16px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Search />
        <Button variant='outlined' onClick={() => setOpenAddCarModal(true)}>
          Add Car
        </Button>
      </Box>

      <AddCarModal
        open={openAddCarModal}
        onClose={() => setOpenAddCarModal(false)}
        onAddCar={handleAddCar}
      />
      <CarsTable />
    </Container>
  );
}

export default App;
