import React from 'react';
import './Comment.scss'
import { Avatar, Typography } from '@mui/material';
export const Comment: React.FC = () => {
  return (
    <div className='comment'>
      <Avatar sx={{height:'20px', width:'20px', mr:1, mt: 0.5}}/>
      <div>
        <Typography>Maxwelldhsu</Typography>
        <Typography>here is the comment</Typography>
      </div>
    </div>
  )
}