import React from 'react';
import { Post } from '../components/Post/Post';
import { AppBar, Button, Fab, IconButton, Toolbar, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import { useGetBreakpoints } from '../utils/useGetBreakpoint';
export const PreviewPage: React.FC = () => {
  const nav = useNavigate();
  const isLessThanMd = useGetBreakpoints('md')

  const onBack = () => nav(-1)
  return (
    <div>
      <AppBar>
        <Toolbar>
        <div style={{width: isLessThanMd ? 0 : 240}}></div>
        <IconButton onClick={onBack}><ArrowBackIosIcon/></IconButton>
          <Typography color='white'>
            Back</Typography>
            <div style={{marginLeft: 'auto'}}>
            <Button variant='contained'><Typography color='white'>Post</Typography></Button>
            </div>
            </Toolbar>
            
      </AppBar>

      <Post />
      
    </div>
  )
}