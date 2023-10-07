import { Box } from '@mui/material';
import React from 'react';
import { Feed } from '../components/Feed/Feed';

export const HomePage: React.FC = () => {
  return (
    <Box height={'100%'} m={'0 auto'}>
      home
      <Feed/>
    </Box>
  )
}