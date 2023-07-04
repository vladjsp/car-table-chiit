import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Box, TextField, Button, MenuItem } from '@mui/material';
import { ICarObj } from '../types';
import { updateCar } from '../redux/slices/carSlice';

interface EditModalProps {
  carId: number;
  onClose: () => void;
}

const EditModal: React.FC<EditModalProps> = ({ carId, onClose }) => {
  const dispatch = useDispatch();
  const car = useSelector((state) => state.cars.carsList.find((car) => car.id === carId));

  if (!car) {
    return null;
  }

  const [editedCar, setEditedCar] = useState<ICarObj>(car);

  const handleSave = () => {
    const { car_color, price, availability } = editedCar;

    const updatedCar: ICarObj = {
      ...car,
      car_color,
      price,
      availability,
    };

    dispatch(updateCar(updatedCar));

    onClose();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEditedCar((prevCar) => ({ ...prevCar, [name]: value }));
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Modal open={true} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'white',
          p: 4,
        }}>
        <TextField label='Company' value={editedCar.car} disabled fullWidth />
        <TextField label='Model' value={editedCar.car_model} disabled fullWidth />
        <TextField label='VIN' value={editedCar.car_vin} disabled fullWidth />
        <TextField
          label='Color'
          name='car_color'
          value={editedCar.car_color}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField label='Year' value={editedCar.car_model_year} disabled fullWidth />
        <TextField
          label='Price'
          name='price'
          value={editedCar.price}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          label='Availability'
          name='availability'
          value={editedCar.availability ? 'YES' : 'NO'}
          onChange={handleInputChange}
          fullWidth
          select>
          <MenuItem value={true}>YES</MenuItem>
          <MenuItem value={false}>NO</MenuItem>
        </TextField>

        <Button variant='contained' color='primary' onClick={handleSave} fullWidth>
          Save
        </Button>
      </Box>
    </Modal>
  );
};

export default EditModal;
