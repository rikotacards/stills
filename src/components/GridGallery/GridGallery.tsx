import { Grid } from '@mui/material';
import React from 'react';
import image from '../../assets/1.jpg'

const images = [1,2,3,4]

export const GridGallery: React.FC = () => {
  const gridItems = images.map((_) =>  <Grid item xs={6} md={4}>
  <img style={{height:'100%', width: '100%', objectFit: 'cover'}} src={image}/>
  </Grid>)
  return (
    <Grid container spacing={1}>
      {gridItems}
    </Grid>
  )
}