import React from "react";
import { PostHeader } from "../PostHeader/PostHeader";
import { PostFooter } from "../PostFooter/PostFooter";
import { Controller, EffectFade } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Post.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { DrawerProvider } from "../../providers/DrawerProvider";
import { useGetBreakpoints } from "../../utils/useGetBreakpoint";
import { PostResponse } from "../../firebase/posts";
import { ReactionsProvider } from "../../providers/ReactionsProvider";
import { Box, Chip, LinearProgress, Skeleton, Slider, Typography } from "@mui/material";

export const Post: React.FC<PostResponse> = ({score, content, postId, postTime }) => {
  const captions = content.map((p) => p.caption)
  const [firstSwiper, setFirstSwiper] = React.useState(null);
  const [secondSwiper, setSecondSwiper] = React.useState(null);
  const isLessThanMd = useGetBreakpoints('md')
  const [page, setPage] = React.useState(1);
  const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(postTime)
  const year = new Intl.DateTimeFormat('en-US', { year: 'numeric' }).format(postTime)

  const [isLoading, setLoading] = React.useState(true);
  const date = postTime?.getDate()
  const slides = content.map((p, i) => <SwiperSlide key={i}>
    {<img
      onLoad={() => { setLoading(false) }}
      style={{
        position: "relative",
        height: isLoading ? 0 : "100%",
        width: "100%",
        objectFit: "cover",
        display: isLoading ? 'none' : 'block'
      }}
      src={p.imagePath}
    />
    }
  </SwiperSlide>)
  return (
    <ReactionsProvider postId={postId}>
      <DrawerProvider enablePopup={!isLessThanMd}>
        <div
          style={{ borderRadius: 20 }}
          className='post'
        >

          <Swiper
            onActiveIndexChange={(swiper) => setPage(swiper.activeIndex + 1)}
            onSwiper={(swiper) => { setFirstSwiper(swiper) }}
            modules={[Controller, EffectFade]}
            // navigation={true}
            pagination={{ clickable: true }}
            // slidesPerView={1}
            controller={{ control: secondSwiper }}
            // spaceBetween={0}
            style={{ position: 'absolute', top: '0', zIndex: 0, height: '100%', width: '100%' }}
          >

            {slides}
          </Swiper>
          <PostHeader page={page} total={content.length} />
          <div style={{ height: '100%' }}>
          </div>
          <PostFooter
            content={content}
            postId={postId}
            postTime={postTime}
            captions={captions}
            swiper={firstSwiper}
            setSecondSwiper={setSecondSwiper} />
        </div>
        <div style={{
          marginBottom: 16,
          zIndex: 1,
          width: '100%',
          marginLeft: 'auto',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center'
        }}
        >
          {/* <Typography variant='caption' sx={{ mr: 0 }}>{month} {date}</Typography> */}
          {/* <Typography variant='caption' sx={{ mr:0, ml:0 }}>{', Feeling 10/10'}</Typography> */}

          <Chip sx={{ml:1}}  variant="filled" label={<Typography variant='caption'>{date} {month} {year}</Typography>} size='small' />

          {score ? <Chip variant="filled" sx={{ml:1}} label={<Typography variant='caption'>Feeling {score}/10</Typography>} size='small' />: null}
        </div>

      </DrawerProvider>
    </ReactionsProvider>

  );
};
