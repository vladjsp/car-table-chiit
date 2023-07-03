import { useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';

const Search = () => {
  const [search, setSearch] = useState('');
  // const onClickClear = () => {
  //   setValue('');
  //   dispatch(setSearchValue(''));
  //   inputRef.current.focus();
  // };

  // const updateSearchValue = useCallback(
  //   debounce((str) => {
  //     dispatch(setSearchValue(str));
  //   }, 500),
  //   []
  // );

  const onInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    //updateSearchValue(event.target.value);
  };

  return (
    <TextField
      value={search}
      onChange={onInput}
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
