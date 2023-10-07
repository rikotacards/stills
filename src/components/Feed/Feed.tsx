import React from 'react';
import { Post } from '../Post/Post';
import { DrawerProvider } from '../../providers/DrawerProvider';
import { useGetBreakpoints } from '../../utils/useGetBreakpoint';

const userPosts = ['1', '2', '3']

export const Feed: React.FC = () => {
  const isLessThanMd = useGetBreakpoints('md')

  const posts = userPosts.map((id) => <DrawerProvider enablePopup={!isLessThanMd} postId={id}>
    <Post />
  </DrawerProvider>)
  return (
    <>
      {posts}
    </>
  )
}