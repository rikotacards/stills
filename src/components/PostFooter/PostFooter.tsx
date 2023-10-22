import { Box, IconButton } from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import React from "react";
import './PostFooter.scss';
import { Caption } from "../Caption/Caption";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Controller } from 'swiper/modules';
import { useDrawerContext } from "../../providers/DrawerProvider";
import { ReactionsDrawerContent } from "../ReactionsDrawerContent/ReactionsDrawerContent";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { CommentsContent } from "../CommentsContent/CommentsContent";
import { Reactions } from "../Reactions/Reactions";
interface PostFooterProps {
  swiper: any;
  setSecondSwiper: any;
  captions: string[];
  postId: string;
}
export const PostFooter: React.FC<PostFooterProps> = ({captions, swiper, setSecondSwiper, postId }) => {
  const drawerContext = useDrawerContext();
  const onOpenReactionsDrawer = () => {
    drawerContext.setRenderComponent(ReactionsDrawerContent)
    drawerContext.onOpen()
  }
  
  

  const onCommentClick = () => {
    drawerContext.setRenderComponent(CommentsContent)
    drawerContext.onOpen()
  }
  
  const captionSlides = captions.map((c, i) => <SwiperSlide key={c + i} style={{
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'flex-end'
  }} >

    <Caption text={c} />
  </SwiperSlide>)
 
  return (
    <div className='post-footer'>

      <Swiper
        className='swiper-custom'
        modules={[Controller]}
        onSwiper={(swiper) => setSecondSwiper(swiper)}
        controller={{ control: swiper }}
      >
        {captionSlides}
      </Swiper>
      <Box
        display={"flex"}
        alignItems={"center"}
        flexDirection={"row"}
        width="100%"
        className='reactions-container'
      >
        <div style={{ padding: '8px' }} className='reactions'>
          <Reactions postId={postId}/>
        </div>

        <Box ml="auto" display='flex'  alignItems={'center'}>
          {/* <Chip
          clickable
          size='small'
          variant='outlined'
          onClick={onOpenReactionsDrawer} 
          label={
            <div style={{display: 'flex'}}>

              <EmojiEmotionsIcon sx={{color: 'white'}} fontSize="small" />
            </div>
          }

          /> */}
          <IconButton onClick={onOpenReactionsDrawer} sx={{ color: 'white', mr: 1 }} size="small">
          <EmojiEmotionsIcon sx={{color: 'white'}} fontSize="small" />

          </IconButton>
          <IconButton onClick={onCommentClick} sx={{ color: 'white', mr: 1 }} size="small">
            <ChatBubbleOutlineIcon />
          </IconButton>
          
        </Box>
      </Box>
    </div>
  );
};
