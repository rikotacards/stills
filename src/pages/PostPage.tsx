import React from 'react';
import { Post } from '../components/Post/Post';
import './PostPage.scss'
export const PostPage: React.FC = () => {
  return (
    <div className='post-page'>
      <Post/>

    </div>
  )
}