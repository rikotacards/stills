import React from "react";
import { PostHeader } from "../PostHeader/PostHeader";
import { Box } from "@mui/material";
import { PostFooter } from "../PostFooter/PostFooter";
import image from "./1.jpg";
import image2 from "./2.png";
import { Controller } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
export const Post: React.FC = () => {
  const images = [image, image2]
  const [firstSwiper, setFirstSwiper] = React.useState(null);
  const [secondSwiper, setSecondSwiper] = React.useState(null);
  console.log('first', firstSwiper)
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
    <Box
      borderRadius={5}
      overflow={"hidden"}
      position={"relative"}
      height={600}
      width={470}
    >
      <PostHeader />
      <Swiper
        onSwiper={(swiper) => setFirstSwiper(swiper)}
        modules={[Controller]}
        navigation={true}
        slidesPerView={1}
        controller={{control:secondSwiper}}
        spaceBetween={0}
        style={{zIndex:0, height: '100%', width: '100%', position: 'relative' }}
      >

        {slides}

      </Swiper>

      <PostFooter 
      swiper={firstSwiper}
       setSecondSwiper={setSecondSwiper}/>
    </Box>
  );
};
