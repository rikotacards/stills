import { Box, IconButton } from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import React from "react";
import './PostFooter.scss';
import SendIcon from '@mui/icons-material/Send';
import { Caption } from "../Caption/Caption";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Controller, EffectFade } from 'swiper/modules';
import { useDrawerContext } from "../../providers/DrawerProvider";
import { ReactionsDrawerContent } from "../ReactionsDrawerContent/ReactionsDrawerContent";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { CommentsContent } from "../CommentsContent/CommentsContent";
import { Reactions } from "../Reactions/Reactions";
import { ShareToInstagram } from "../ShareToInstagram/ShareToInstagram";
import { Content } from "../../firebase/posts";
interface PostFooterProps {
  swiper: any;
  setSecondSwiper: any;
  captions: string[];
  postId: string;
  content: Content[];
  postTime: any;
}
export const PostFooter: React.FC<PostFooterProps> = ({postTime, content, captions, swiper, setSecondSwiper, postId }) => {
  const drawerContext = useDrawerContext();
  const onOpenReactionsDrawer = () => {
    drawerContext.setRenderComponent(<ReactionsDrawerContent postId={postId}/>)
    drawerContext.onOpen()
  }
  
  const onShareClick = () => {
    drawerContext.setRenderComponent(<ShareToInstagram postTime={postTime} content={content} postId={postId}  />)
    drawerContext.onOpen()
  }

  const onCommentClick = () => {
    drawerContext.setRenderComponent(<CommentsContent postId={postId}/>)
    drawerContext.onOpen()
  }
  
  const captionSlides = content.map((c, i) => <SwiperSlide key={c.caption + i} style={{
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'flex-end'
  }} >

    <Caption text={c.caption} />
  </SwiperSlide>)
 
  return (
    <div className='post-footer'>

      <Swiper
      effect="fade"
        className='swiper-custom'
        modules={[Controller, EffectFade]}
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
          <IconButton onClick={onOpenReactionsDrawer} sx={{ color: 'white', mr: 1 }} size="small">
          <EmojiEmotionsIcon sx={{color: 'white'}} fontSize="small" />
          </IconButton>
          <IconButton onClick={onCommentClick} sx={{ color: 'white', mr: 1 }} size="small">
            <ChatBubbleOutlineIcon fontSize="small" />
          </IconButton>
          <IconButton onClick={onShareClick} sx={{ color: 'white', mr: 1 }} size="small">
            <SendIcon fontSize="small" />
          </IconButton>
          
        </Box>
      </Box>
    </div>
  );
};
