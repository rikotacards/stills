import React from 'react';
import './Comment.scss'
import { Avatar, Divider, Typography } from '@mui/material';
export const Comment: React.FC = () => {
  return (
    <div style={{ marginTop: 0, marginBottom: 0 }}>

      <div className='comment'>
        <Avatar sx={{ height: '20px', width: '20px', mr: 1, mt: 0.5 }} />
        <div>
          <Typography>Maxwelldhsu</Typography>
          <Typography>here is the comment and here is a longer one just testing it out to see what happens</Typography>
        </div>
      </div>
      <Divider sx={{padding: 0}}/>
    </div>
  )
}