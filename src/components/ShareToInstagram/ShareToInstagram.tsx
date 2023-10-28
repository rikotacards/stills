import React from 'react';
import { PostResponse } from '../../firebase/posts';
import { Post } from '../Post/Post';
import { Box, IconButton, Toolbar } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useDrawerContext } from '../../providers/DrawerProvider';
export const ShareToInstagram: React.FC<PostResponse> = (props) => {
  const { content } = props;
  const { onClose } = useDrawerContext();
  return (
    <Box sx={{ 
      position: 'relative', 
      alignItems: 'center', 
      padding: 1,
      justifyContent: 'center', 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100vh', backgroundImage: `url(${content[0].imagePath})` }}>
      <Box sx={{top:0, backdropFilter: 'blur(10px)', position: 'absolute', height: '100vh', width: '100%' }} />

      <Post  {...props} />
      <IconButton onClick={onClose}>
        <KeyboardArrowDownIcon />
      </IconButton>
    </Box>
  )
}