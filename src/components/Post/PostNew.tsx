import React from "react";
import { PostHeader } from "../PostHeader/PostHeader";
import { PostFooter } from "../PostFooter/PostFooter";
import { Controller } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import './PostNew.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { DrawerProvider } from "../../providers/DrawerProvider";
import { useGetBreakpoints } from "../../utils/useGetBreakpoint";
import { Content } from "../../firebase/posts";
import { ReactionsProvider } from "../../providers/ReactionsProvider";
interface PostProps {
  content: Content[]
  postId: string;
}
export const PostNew: React.FC<PostProps> = ({content,postId}) => {
  const captions = content.map((p) => p.caption)
  const [firstSwiper, setFirstSwiper] = React.useState(null);
  const [secondSwiper, setSecondSwiper] = React.useState(null);
  const isLessThanMd = useGetBreakpoints('md')

  const slides = content.map((p, i) => <SwiperSlide key={i}><img
    style={{
      position: "relative",
      height: "100%",
      width: "100%",
      objectFit: "cover",
    }}
    src={p.imagePath}
  /></SwiperSlide>)
  return (
    <ReactionsProvider postId={postId}>
    <DrawerProvider enablePopup={!isLessThanMd} postId={postId}>
    <div
      style={{ borderRadius: 0 }}
      className='post'
    >
            <PostHeader />


      <Swiper
        onSwiper={(swiper) => setFirstSwiper(swiper)}
        modules={[Controller]}
        navigation={true}
        slidesPerView={1}
        controller={{ control: secondSwiper }}
        spaceBetween={0}
        style={{ position: 'relative', top: '0', zIndex: 0, height: '100%', width: '100%' }}
      >

        {slides}

      </Swiper>
      {/* <div style={{border:'1px solid white',  height: '100%' }}>
      </div> */}
      <PostFooter
      postId={postId}
        captions={captions}
        swiper={firstSwiper}
        setSecondSwiper={setSecondSwiper} />
    </div>
    </DrawerProvider>
    </ReactionsProvider>
  );
};
