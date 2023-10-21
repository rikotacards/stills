import { Grid } from '@mui/material';
import React from 'react';
import { PostResponse } from '../../firebase/posts';
import { useNavigate } from 'react-router-dom';

interface GridGalleryProps {
  posts: PostResponse[];
}
export const GridGallery: React.FC<GridGalleryProps> = ({posts}) => {
  const nav = useNavigate()
  const onClick=(postId: string) => {
    nav('/post/'+postId)
  }
  const gridItems = posts.map((post) =>  <Grid item xs={6} md={4}>
  
  <img onClick={() => onClick(post.postId)} style={{height:'100%', width: '100%', objectFit: 'cover'}} src={post.content[0].imagePath}/>
  </Grid>)
  return (
    <Grid container spacing={1}>
      {gridItems}
    </Grid>
  )
}