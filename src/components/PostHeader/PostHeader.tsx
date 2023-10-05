import { MoreHoriz } from '@mui/icons-material';
import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';

export const PostHeader: React.FC = () => {
  return (
    <Box zIndex={1} position={'absolute'} top='0' p={2} display={'flex'} flexDirection={'row'} width={'100%'} alignItems={'center'}>
      <Box display={'flex'} flexDirection={'row'} alignItems='center'>
        <Avatar sx={{ mr: 1 }} /><Typography>Max</Typography>
      </Box>
      <Box ml={'auto'}>
        <MoreHoriz />
      </Box>
    </Box>
  )
}