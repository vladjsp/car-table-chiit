import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteCar } from '../redux/slices/carSlice';

interface DeleteModalProps {
  carId: number;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ carId }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteCar(carId));
  };

  return (
    <Modal open={true} onClose={handleDelete}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'white',
          p: 4,
        }}>
        <Typography variant='h6' gutterBottom>
          Are you sure you want to delete this car?
        </Typography>

        <Button variant='outlined' color='error' onClick={handleDelete}>
          Delete
        </Button>
      </Box>
    </Modal>
  );
};

export default DeleteModal;
