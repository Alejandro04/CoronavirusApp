import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function CustomAutocomplete() {

  return (
    <Autocomplete
    //  onChange={(event, value) => localStorage.setItem('country', value)}
      options={countries}
      getOptionLabel={option => option.title}
      style={{ width: 300 }}
      renderInput={params => <TextField {...params} 
      label="Country / Pais" variant="outlined"  />}
    />
  );
}

const countries = [
  { title: 'Venezuela'},
  { title: 'Colombia'},
];