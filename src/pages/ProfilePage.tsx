import { Avatar, Box, Button, Divider, Typography } from '@mui/material';
import React from 'react';
import image from '../assets/1.jpg'
import { GridGallery } from '../components/GridGallery/GridGallery';
import { getPostsByUid } from '../firebase/posts';
import { sampleUid } from '../configs/sampleData';
export const ProfilePage: React.FC = () => {
  const [posts, setPosts]=React.useState([])
  React.useEffect(() => {
    getPostsByUid(sampleUid).then((res) => {
      setPosts(res);
    })
  })
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignSelf: 'flex-start', height: '100%'}}>
      <Box justifyContent={'center'} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding:1  }}>
       <div style={{display: 'flex', flexDirection: 'row'}}>
        
        <Avatar src={image} sx={{ height: 100, width: 100 }} />
        
       </div>
        <Typography sx={{textTransform: 'capitalize'}}>Maxwelldhsu</Typography>
        <Typography>Making things on the web</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <div>
            <Button sx={{m: 1, borderRadius: 20, textTransform: 'capitalize' }} size='small' variant='contained'>Follow</Button>
          </div>
          <div>
            <Button sx={{m:1, borderRadius: 20, textTransform: 'capitalize' }} size='small' variant='contained'>1245 Followers</Button>
          </div>
          <div>
            <Button sx={{m:1, borderRadius: 20, textTransform: 'capitalize' }} size='small' variant='contained'>1245 Following</Button>
          </div>

        </Box>

      </Box>
      {/* <Post/> */}
      <Divider sx={{width: '100%'}}/>
      <GridGallery posts={posts}/>
    </div>
  )
}