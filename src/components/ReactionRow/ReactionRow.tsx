import React from 'react';
import './ReactionRow.scss'
import { Avatar, Box, Typography } from '@mui/material';
export const ReactionRow: React.FC = () => {
  return (
    <Box borderRadius={1} mb={1} p={1} className='reaction-row'>
        <Avatar sx={{mr:1}}/><Typography>Max</Typography><Box mr={1} className='emoji-container'>🔥</Box>
    </Box>
  )
}