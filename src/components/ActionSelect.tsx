// import { useState } from 'react';
// import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

// interface IActionSelect {
//   carId: number;
// }

// const ActionSelect = ({ carId }: IActionSelect) => {
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
//   const [value, setValue] = useState('');

//   const handleChange = (event: SelectChangeEvent) => {
//     if (event.target.value === 'Edit') {
//       setIsDeleteAlertOpen(false);
//       setIsEditModalOpen(true);
//     }
//     if (event.target.value === 'Delete') {
//       setIsEditModalOpen(false);
//       setIsDeleteAlertOpen(true);
//     }
//     setValue('');
//     console.log('Selected row and car Id ', carId);
//   };

//   return (
//     <FormControl sx={{ m: 1, minWidth: 120 }}>
//       <Select
//         value={value}
//         onChange={handleChange}
//         displayEmpty
//         inputProps={{ 'aria-label': 'Without label' }}>
//         <MenuItem value=''>
//           <em>Action</em>
//         </MenuItem>
//         <MenuItem value='Edit'>Edit</MenuItem>
//         <MenuItem value='Delete' sx={{ color: 'red' }}>
//           Delete
//         </MenuItem>
//       </Select>
//     </FormControl>
//   );
// };

// export default ActionSelect;

import React, { useState } from 'react';
import { FormControl, MenuItem, Select } from '@mui/material';
import EditModal from './EditModal';
import DeleteModal from './DeleteModal';

interface ActionSelectProps {
  carId: number;
}

const ActionSelect: React.FC<ActionSelectProps> = ({ carId }) => {
  const [selectedAction, setSelectedAction] = useState('');

  const handleActionChange = (event: React.ChangeEvent<{ value }>) => {
    setSelectedAction(event.target.value as string);
  };

  const onCLose = () => {
    setSelectedAction('');
  };

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={selectedAction}
          onChange={handleActionChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}>
          <MenuItem value=''>Actions</MenuItem>
          <MenuItem value='edit'>Edit</MenuItem>
          <MenuItem value='delete' sx={{ color: 'red' }}>
            Delete
          </MenuItem>
        </Select>
      </FormControl>

      {selectedAction === 'edit' && <EditModal carId={carId} onClose={onCLose} />}
      {selectedAction === 'delete' && <DeleteModal carId={carId} />}
    </>
  );
};

export default ActionSelect;
