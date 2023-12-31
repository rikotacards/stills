import { Grid } from '@mui/material';
import React from 'react';
import { PostResponse } from '../../firebase/posts';
import { ImageWithLoading } from '../ImageWithLoading/ImageWithLoading';
import './Gallery.scss'
interface GridGalleryProps {
  posts: PostResponse[];
}
export const GridGallery: React.FC<GridGalleryProps> = ({posts}) => {
  
  const gridItems = posts.map((post) =>  <Grid item xs={6} md={4}>
  
<ImageWithLoading postId={post.postId} imagePath={post.content[0].imagePath}/>  </Grid>)
  return (
    <div className='post-list' spacing={1}>
      {gridItems}
    </div>
  )
}