import { Container } from '@mui/material';
import './App.css';
import Search from './components/Search';

function App() {
  return (
    <Container maxWidth='xl' sx={{ display: 'flex', flexDirection: 'column' }}>
      <Search />
    </Container>
  );
}

export default App;
