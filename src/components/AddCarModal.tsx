import React, { useState } from 'react';
import { Button, Modal, Box, TextField } from '@mui/material';
import { ICarObj } from '../types';

interface AddCarModalProps {
  open: boolean;
  onClose: () => void;
  onAddCar: (newCar: ICarObj) => void;
}

const AddCarModal: React.FC<AddCarModalProps> = ({ open, onClose, onAddCar }) => {
  const [newCar, setNewCar] = useState<ICarObj>({
    id: 0,
    car: '',
    car_model: '',
    car_color: '',
    car_model_year: 0,
    car_vin: '',
    price: '',
    availability: false,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewCar((prevCar) => ({
      ...prevCar,
      [name]: value,
    }));
  };

  const handleAddCar = () => {
    onAddCar(newCar);
    setNewCar({
      id: 0,
      car: '',
      car_model: '',
      car_color: '',
      car_model_year: 0,
      car_vin: '',
      price: '',
      availability: false,
    });
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'white',
          p: 4,
        }}>
        <TextField
          label='Car'
          name='car'
          value={newCar.car}
          onChange={handleInputChange}
          fullWidth
          required
        />
        <TextField
          label='Car Model'
          name='car_model'
          value={newCar.car_model}
          onChange={handleInputChange}
          fullWidth
          required
        />
        <TextField
          label='Car Color'
          name='car_color'
          value={newCar.car_color}
          onChange={handleInputChange}
          fullWidth
          required
        />
        <TextField
          label='Car Model Year'
          name='car_model_year'
          type='number'
          value={newCar.car_model_year}
          onChange={handleInputChange}
          fullWidth
          required
        />
        <TextField
          label='VIN'
          name='car_vin'
          value={newCar.car_vin}
          onChange={handleInputChange}
          fullWidth
          required
        />
        <TextField
          label='Price'
          name='price'
          value={newCar.price}
          onChange={handleInputChange}
          fullWidth
          required
        />
        <TextField
          label='Availability'
          name='availability'
          type='checkbox'
          checked={newCar.availability}
          onChange={handleInputChange}
        />

        <Button variant='contained' sx={{ marginTop: '16px' }} onClick={handleAddCar} fullWidth>
          Add Car
        </Button>
      </Box>
    </Modal>
  );
};

export default AddCarModal;
