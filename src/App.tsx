import { Container } from '@mui/material';
import './App.css';
import Search from './components/Search';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCars, setCars } from './redux/slices/carSlice';
import CarsTable from './components/CarsTable';

function App() {
  const dispatch = useDispatch();
  const { carsList } = useSelector((state) => state.cars);

  const getCars = () => {
    //dispatch(fetchCars());
  };

  useEffect(() => {
    //getCars();
  }, []);

  return (
    <Container
      maxWidth={false}
      sx={{ display: 'flex', flexDirection: 'column', maxWidth: '1400px', padding: '16px' }}>
      <Search />
      <CarsTable />
    </Container>
  );
}

export default App;
