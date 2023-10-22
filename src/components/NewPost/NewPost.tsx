import { Box, Button, Fab, Typography } from '@mui/material';
import React from 'react';
import { useAddPostContext } from '../../providers/AddPostProvider';
import { useNavigate } from 'react-router-dom';
import { AddPostWidget } from '../AddPostWidget/AddPostWidget';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
interface NewPostProps {
  onNext?: () => void;
  goto: (page:number)=> void;
}
export const NewPost: React.FC<NewPostProps> = ({onNext, goto}) => {
  const addPostContext = useAddPostContext();
  const nav = useNavigate()

  const addPostWidgets = addPostContext.posts.map((post, i) => <AddPostWidget key={i} index={i} />)

  return (
    <>
    <div style={{display: 'flex', flexDirection: 'column'}} className='body'>

      {addPostWidgets}
      <Button sx={{ mb: 1 }} onClick={addPostContext.addPost} variant='contained'>Add part</Button>
      <Button sx={{ mb: 1 }} onClick={onNext ? onNext : () => nav('/preview')} variant='contained'>Next</Button>
      <Button sx={{ mb: 1 }} onClick={goto ? () => goto(2) : () => nav('/drafts')} variant='contained'>Drafts</Button>




    </div>

    </>
  )
}