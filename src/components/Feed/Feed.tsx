import React from 'react';
import { Post } from '../Post/Post';
import { DrawerProvider } from '../../providers/DrawerProvider';

const userPosts = ['1', '2', '3']

export const Feed: React.FC = () => {
  const posts = userPosts.map((id) => <DrawerProvider postId={id}>
    <Post />
  </DrawerProvider>)
  return (
    <>
      {posts}
    </>
  )
}