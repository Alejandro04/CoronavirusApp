import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function CustomAutocomplete() {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={countries}
      getOptionLabel={option => option.title}
      style={{ width: 300 }}
      renderInput={params => <TextField {...params} label="Country / Pais" variant="outlined" />}
    />
  );
}

const countries = [
  { title: 'Venezuela'},
];