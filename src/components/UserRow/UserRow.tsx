import { Avatar, Button, Typography } from '@mui/material';
import React from 'react';


export const UserRow: React.FC = () => {
  return (
    <div style={{width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'row', padding: 4}}>
      <Avatar sx={{mr:1}}/>
      <Typography>Username</Typography>
      <div style={{marginLeft: 'auto'}}>
      <Button sx={{margin:1 }} variant='contained' size='small'>Follow</Button>
      </div>
    </div>
  )
}