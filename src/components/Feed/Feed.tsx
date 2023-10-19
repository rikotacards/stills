import React from 'react';
import { Post } from '../Post/Post';

const userPosts = ['1', '2', '3']

export const Feed: React.FC = () => {

  const posts = userPosts.map((post) => <Post  key={post.postId} />)
  return (
    <>
      {posts}
    </>
  )
}