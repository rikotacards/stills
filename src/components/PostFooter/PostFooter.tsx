import { Box, Chip, IconButton } from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import React from "react";
import './PostFooter.scss';
import { Caption } from "../Caption/Caption";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Controller } from 'swiper/modules';
import { useDrawerContext } from "../../providers/DrawerProvider";
import { ReactionsDrawerContent } from "../ReactionsDrawerContent/ReactionsDrawerContent";

interface PostFooterProps {
  swiper: any;
  setSecondSwiper: any;
}
const captions = ['hi', '']
const react = [1, 2, 3, 4, 5, 6, 7, 8, 4, 4, 4, 4]
export const PostFooter: React.FC<PostFooterProps> = ({ swiper, setSecondSwiper }) => {
  const drawerContext = useDrawerContext();
  const onOpenReactionsDrawer = () => {
    drawerContext.setRenderComponent(ReactionsDrawerContent)
    drawerContext.onOpen()
  }
  const captionSlides = captions.map((c, i) => <SwiperSlide style={{
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'flex-end'
  }} key={c + i}>

    <Caption text={c} />
  </SwiperSlide>)
  const reactions = react.map(() => <Chip sx={{ mr: 1, color: 'white' }} size="small" variant="outlined" label={`🔥14`} />)
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
          {reactions}
        </div>

        <Box ml="auto" display='flex'  alignItems={'center'}>
          <Chip sx={{color: 'white'}} variant="outlined" size='small' label={'1/2'}/>
          <IconButton onClick={onOpenReactionsDrawer} sx={{ color: 'white', mr: 1 }} size="small">
            <EmojiEmotionsIcon />
          </IconButton>
        </Box>
      </Box>
    </div>
  );
};
