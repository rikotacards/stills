import { MoreHoriz } from '@mui/icons-material';
import { Avatar, Box, IconButton, Typography } from '@mui/material';
import React from 'react';

export const PostHeader: React.FC = () => {
  return (
    <Box position='relative' p={2} display={'flex'} flexDirection={'row'} width={'100%'} alignItems={'center'} >
      <Box display={'flex'} flexDirection={'row'} alignItems='center'>
        <Avatar sx={{ mr: 1 }} /><Typography>Max</Typography>
      </Box>
      <Box ml={'auto'}>
        <IconButton>
        <MoreHoriz />
        </IconButton>
      </Box>
    </Box>
  )
}