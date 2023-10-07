import React from "react";
import { PostHeader } from "../PostHeader/PostHeader";
import { Box } from "@mui/material";
import { PostFooter } from "../PostFooter/PostFooter";
import image from "./1.jpg";
import image2 from "./2.png";
import { Controller } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import './Post.scss'
import { Swiper, SwiperSlide } from "swiper/react";
export const Post: React.FC = () => {
  const images = [image, image2]
  const [firstSwiper, setFirstSwiper] = React.useState(null);
  const [secondSwiper, setSecondSwiper] = React.useState(null);
  const slides = images.map((i) => <SwiperSlide key={i}><img
    style={{
      position: "relative",
      height: "100%",
      width: "100%",
      objectFit: "cover",
    }}
    src={i}
  /></SwiperSlide>)
  return (
    <div
      style={{borderRadius: 5}}
      className='post'
    >

      <Swiper
        onSwiper={(swiper) => setFirstSwiper(swiper)}
        modules={[Controller]}
        navigation={true}
        slidesPerView={1}
        controller={{control:secondSwiper}}
        spaceBetween={0}
        style={{position: 'absolute', top: '0', zIndex:0, height: '100%', width: '100%' }}
      >

        {slides}

      </Swiper>
      <PostHeader />
      <div style={{ height: '100%'}}>
      </div>
      <PostFooter 
      swiper={firstSwiper}
       setSecondSwiper={setSecondSwiper}/>
    </div>
  );
};
