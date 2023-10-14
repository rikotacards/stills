import React from 'react';
import { AddPostWidget } from '../components/AddPostWidget/AddPostWidget';
import { Button } from '@mui/material';
import './CreatePage.scss'
import { useAddPostContext } from '../providers/AddPostProvider';
import { useNavigate } from 'react-router-dom';


export const CreatePage: React.FC = () => {
  const addPostContext = useAddPostContext();
  const nav = useNavigate()
  const addPostWidgets = addPostContext.posts.map((post,i)=> <AddPostWidget index={i} key={post.caption + i}/>)
  return (
    <div className='create-page'>
      <div className='body'>

      {addPostWidgets}
      <Button sx={{mb:1}} onClick={addPostContext.addPost} variant='contained'>Add part</Button>
      <Button onClick={() => nav('preview')} variant='contained'>Next</Button>
    </div>
      </div>
  )
}