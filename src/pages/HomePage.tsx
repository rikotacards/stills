import {  Toolbar } from '@mui/material';
import React from 'react';
import './HomePage.scss'
import { PostResponse, getPostsByUid } from '../firebase/posts';
import { sampleUid } from '../configs/sampleData';
import { Post } from '../components/Post/Post';
export const HomePage: React.FC = () => {
  const [posts, setPosts] = React.useState<PostResponse[]>([])
 
  React.useEffect(() => {
    getPostsByUid(sampleUid).then((res) => {
      setPosts(res)
    })
  },[])
  return (
    <div className='home'>
      {posts.map((post) => <Post {...post} />)}
              <Toolbar/>

    </div>
  )
}