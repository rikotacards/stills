import { Box, Button, Fab, Typography } from '@mui/material';
import React from 'react';
import { useAddPostContext } from '../../providers/AddPostProvider';
import { useNavigate } from 'react-router-dom';
import { AddPostWidget } from '../AddPostWidget/AddPostWidget';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
export const NewPost: React.FC = () => {
  const addPostContext = useAddPostContext();
  const nav = useNavigate()

  const addPostWidgets = addPostContext.posts.map((post, i) => <AddPostWidget key={i} index={i} />)

  return (
    <>
    <div className='body'>

      {addPostWidgets}
      <Button sx={{ mb: 1 }} onClick={addPostContext.addPost} variant='contained'>Add part</Button>
      <Button sx={{ mb: 1 }} onClick={() => nav('preview')} variant='contained'>Next</Button>



    </div>
      <Fab onClick={() => nav('preview')} variant='extended' sx={{ position: 'fixed', bottom: 0, margin: 3 }}>
        <Typography sx={{ textTransform: 'capitalize' }}>Preview Post</Typography>
      </Fab>
    </>
  )
}