import React from "react";
import { PostHeader } from "../PostHeader/PostHeader";
import { PostFooter } from "../PostFooter/PostFooter";
import { Controller, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Post.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { DrawerProvider } from "../../providers/DrawerProvider";
import { useGetBreakpoints } from "../../utils/useGetBreakpoint";
import { Content } from "../../firebase/posts";
import { ReactionsProvider } from "../../providers/ReactionsProvider";
interface PostProps {
  content: Content[]
  postId: string;
}
export const Post: React.FC<PostProps> = ({content,postId}) => {
  const captions = content.map((p) => p.caption)
  const [firstSwiper, setFirstSwiper] = React.useState(null);
  const [secondSwiper, setSecondSwiper] = React.useState(null);
  const isLessThanMd = useGetBreakpoints('md')
  const [page, setPage] = React.useState(1);
  const onNextPage = () => {
    if(page === content.length){
      return
    }
    setPage(page+1)
  }
  const onPrevPage = () => {
    if(page === 1){
      return;
    }
    setPage(page-1)
  }
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
      style={{ borderRadius: 20 }}
      className='post'
    >

      <Swiper
      onSlideNextTransitionEnd={onNextPage}
      onSlidePrevTransitionEnd={onPrevPage}

        onSwiper={(swiper) => setFirstSwiper(swiper)}
        modules={[Controller]}
        navigation={true}
        pagination={{clickable: true}}
        slidesPerView={1}
        controller={{ control: secondSwiper }}
        spaceBetween={0}
        style={{ position: 'absolute', top: '0', zIndex: 0, height: '100%', width: '100%' }}
      >

        {slides}

      </Swiper>
      <PostHeader total={content.length} page={page} />
      <div style={{ height: '100%' }}>
      </div>
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
