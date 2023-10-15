import { Input, Tab, Tabs, TextField } from '@mui/material';
import React from 'react';

export const ExplorePage: React.FC = () => {
  const [value, setValue] = React.useState(0)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <><Tabs variant='fullWidth' onChange={handleChange} value={value}>
      <Tab label={'Posts'}/>
      <Tab label={'Accounts'}/>
      </Tabs>
      
      <TextField fullWidth size='small' margin={'dense'} variant='outlined'/>

      </>
  )
}