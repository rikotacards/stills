import { Skeleton } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetBreakpoints } from '../../utils/useGetBreakpoint';
import { useDrawerContext } from '../../providers/DrawerProvider';
import { PostPage } from '../../pages/PostPage';
interface ImageWithLoadingProps {
  imagePath: string;
  postId: string;
}
export const ImageWithLoading: React.FC<ImageWithLoadingProps> = ({postId, imagePath}) => {
  const [isLoading, setLoading] = React.useState(true);
  const drawerContext = useDrawerContext()
  const nav = useNavigate()
  console.log(isLoading)
  const isMd = useGetBreakpoints('md')
  const dimension = isMd ? 200 : 500
  const onClick=(postId: string) => {
    if(!isMd){
      drawerContext.setRenderComponent(<PostPage postId={postId}/>)
      drawerContext.onOpen()
    } else {

      nav('/p/'+postId)
    }
  }
  
  return (
    <>
    {isLoading && <Skeleton variant='rectangular' height={dimension}/>}
    <img onLoad={()=> {setLoading(false);}} onClick={() => onClick(postId)} style={{height:'100%', width: '100%', objectFit: 'cover'}} src={imagePath}/>
    </>
    )
}