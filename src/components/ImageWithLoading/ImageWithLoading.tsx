import { Skeleton } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
interface ImageWithLoadingProps {
  imagePath: string;
  postId: string;
}
export const ImageWithLoading: React.FC<ImageWithLoadingProps> = ({postId, imagePath}) => {
  const [isLoading, setLoading] = React.useState(true);
  const nav = useNavigate()
  const onClick=(postId: string) => {
    nav('/p/'+postId)
  }
  
  return (
    <>
    {isLoading && <Skeleton variant='rectangular' height={'100%'}/>}
    <img onLoad={()=> setLoading(false)} onClick={() => onClick(postId)} style={{height:'100%', width: '100%', objectFit: 'cover'}} src={imagePath}/>
    </>
    )
}