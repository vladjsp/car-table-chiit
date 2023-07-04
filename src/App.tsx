import { Container } from '@mui/material';
import './App.css';
import Search from './components/Search';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCars, setCars } from './redux/slices/carSlice';

function App() {
  const dispatch = useDispatch();
  const { carsList } = useSelector((state) => state.cars);

  const getCars = () => {
    dispatch(fetchCars());
  };

  useEffect(() => {
    getCars();
  }, []);

  return (
    <Container maxWidth='xl' sx={{ display: 'flex', flexDirection: 'column' }}>
      <Search />
    </Container>
  );
}

export default App;
