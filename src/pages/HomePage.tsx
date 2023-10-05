import { Box } from '@mui/material';
import React from 'react';
import { Post } from '../components/Post/Post';

export const HomePage: React.FC = () => {
  return (
    <Box height={'100%'} m={'0 auto'}>
      home
      <Post/>
    </Box>
  )
}