import React from 'react';
import './PreviewPage.scss'
import { Post } from '../components/Post/Post';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import { useGetBreakpoints } from '../utils/useGetBreakpoint';
import { useAddPostContext } from '../providers/AddPostProvider';
import { addPost } from '../firebase/posts';
import { sampleUid } from '../configs/sampleData';
export const PreviewPage: React.FC = () => {
  const nav = useNavigate();
  const {posts} = useAddPostContext();
  console.log('po', posts)
  const isLessThanMd = useGetBreakpoints('md')
  const onPost = () => {
    addPost(
      {
        uid: sampleUid,
        posts
      }
    )
  }
  const onBack = () => nav(-1)
  return (
    <div className='preview-page'>
      <AppBar>
        <Toolbar>
          <div style={{ width: isLessThanMd ? 0 : 240 }}></div>
          <IconButton onClick={onBack}><ArrowBackIosIcon /></IconButton>
          <Typography color='white'>
            Back</Typography>
          <div style={{ marginLeft: 'auto' }}>
            <Button onClick={onPost} variant='outlined'><Typography sx={{textTransform: 'capitalize'}}color='white'>Post </Typography></Button>
          </div>
        </Toolbar>

      </AppBar>
      <Toolbar />

      {posts.length ? <Post content={posts} postId={''}/> : <Typography>Nothing to preview</Typography>}

    </div>
  )
}