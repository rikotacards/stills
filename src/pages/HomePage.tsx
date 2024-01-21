import {  Box, Toolbar } from '@mui/material';
import React from 'react';
import './HomePage.scss'
import { PostResponse, getPostsByUid } from '../firebase/posts';
import { sampleUid } from '../configs/sampleData';
import { Post } from '../components/Post/Post';
export const HomePage: React.FC = () => {
  const [posts, setPosts] = React.useState<PostResponse[]>([])
  React.useEffect(() => {
    getPostsByUid(sampleUid).then((res) => {
      console.log(res)
      setPosts(res)
    })
  },[])
  return (
    <Box m={0} className='home'>
      <div>

      {posts.map((post) => <Post key={post.postId} {...post} />)}
      </div>
              <Toolbar/>

    </Box>
  )
}