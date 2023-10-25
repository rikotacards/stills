import { Box, Button, Fab, Slider, Typography } from '@mui/material';
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
  const marks = [
    {
      value: -10,
      label: 'Terrible',
    },
    {
      value: -9,
    },
    {
      value: -8,
    },
    {
      value: -7,
    },
    {
      value: -6,
    },
    {
      value: -5,
    },
    {
      value: -4,
    },
    {
      value: -3,
    },
    {
      value: -2,
    },
    {
      value: -1,
    },
    {
      value: 0,
      label: 'Neutral',
    },
    {
      value: 1,
    },
    {
      value: 2,
    },
    {
      value: 3,
    },
    {
      value: 4,
    },
    {
      value: 5,
    },
    {
      value: 6,
    },
    {
      value: 7,
    },
    {
      value: 8,
    },
    {
      value: 9,
    },
    {
      value: 10,
      label: 'Great'
    },
  ];
  const addPostWidgets = addPostContext.posts.map((post, i) => <AddPostWidget key={i} index={i} />)

  return (
    <>
    <div style={{display: 'flex', flexDirection: 'column'}} className='body'>

      {addPostWidgets}

      <Button sx={{ mb: 1 }} onClick={addPostContext.addPost} variant='contained'>Add part</Button>
      <div style={{paddingLeft: 32, paddingRight:32}}>
      <Slider defaultValue={0} 
      min={-10} 
      marks={marks}
      valueLabelDisplay="auto"
      
      max={10}/>
      </div>
      <Button sx={{ mb: 3 }} onClick={onNext ? onNext : () => nav('/preview')} variant='contained'>Next</Button>
      <Button sx={{ mb: 1 }} onClick={goto ? () => goto(2) : () => nav('/drafts')} variant='outlined'>Drafts</Button>




    </div>

    </>
  )
}