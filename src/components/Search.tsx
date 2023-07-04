import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash.debounce';
import { TextField, InputAdornment } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';

import { setSearchValue } from '../redux/slices/carSlice';

const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 500),
    []
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <TextField
      value={value}
      onChange={(event) => onChangeInput(event)}
      id='outlined-basic'
      label='Search'
      type='search'
      variant='outlined'
      sx={{ m: 1, width: '50ch' }}
      placeholder='search...'
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <SearchOutlined />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Search;
