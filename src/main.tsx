import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Mousewheel,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./style.css";

function Main() {
  const space = {
    img: [
      <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="1"/>,
      <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="2"/>,
      <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="3"/>,
      <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="4"/>,
      <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="5"/>,
      <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="6"/>,
      <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="7"/>,
      <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="8"/>,
      <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="9"/>,
    ],
  };

  //추후 슬라이드 라이브러리를 사용하여 장소 리스트를 출력할 예정
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={4}
      coverflowEffect={{
        rotate: 10,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
      }}
      pagination={true}
      navigation={true}
      mousewheel={true}
      modules={[EffectCoverflow, Pagination, Navigation, Mousewheel]}
      className="mySwiper"
    >
      {space.img.map((img) => (
        <SwiperSlide>{img}</SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Main;
