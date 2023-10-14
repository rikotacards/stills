import { Avatar, Box, Button, Typography } from '@mui/material';
import React from 'react';
import image from '../assets/1.jpg'
import { Post } from '../components/Post/Post';
import { GridGallery } from '../components/GridGallery/GridGallery';
export const ProfilePage: React.FC = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignSelf: 'flex-start', height: '100%'}}>
      <Box justifyContent={'center'} sx={{ border: '1px solid black', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar src={image} sx={{ height: 100, width: 100 }} />
        <Typography>Maxwelldhsu</Typography>
        <Typography>Making things on the web</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <div>
            <Button sx={{ borderRadius: 20 }} size='small' variant='contained'>Follow</Button>
          </div>
          <div>
            <Button sx={{ borderRadius: 20 }} size='small' variant='contained'>Edit</Button>
          </div>

        </Box>

      </Box>
      {/* <Post/> */}
      <GridGallery/>
    </div>
  )
}