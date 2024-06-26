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
import "swiper/css/navigation";

import "./style.css";
import Left from "./left";

function Main() {
  const space = [
    { title: "사진1", path: "https://swiperjs.com/demos/images/nature-1.jpg" },
    { title: "사진2", path: "https://swiperjs.com/demos/images/nature-2.jpg" },
    { title: "사진3", path: "https://swiperjs.com/demos/images/nature-3.jpg" },
    { title: "사진4", path: "https://swiperjs.com/demos/images/nature-4.jpg" },
    { title: "사진5", path: "https://swiperjs.com/demos/images/nature-5.jpg" },
    { title: "사진6", path: "https://swiperjs.com/demos/images/nature-6.jpg" },
    { title: "사진7", path: "https://swiperjs.com/demos/images/nature-7.jpg" },
  ];

  //추후 슬라이드 라이브러리를 사용하여 장소 리스트를 출력할 예정
  return (
    <div className="swiper-container relative">
      <Left />
      <div className="pt-5">
        <h1 className="text-3xl font-bold text-center">등록한 장소들</h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={5}      
          coverflowEffect={{   
            rotate: 8, //회전 각도
            stretch: 0,
            depth: 200, //앞뒤 깊이
            modifier: 2,
            slideShadows: false,
          }}
          pagination={true}
          navigation={true}
          mousewheel={true}
          modules={[EffectCoverflow, Pagination, Navigation, Mousewheel]}
          className=""
        >
          {space.map((obj) => (
            <SwiperSlide>
              <img className="poster" src={obj.path} alt={obj.title}></img>
              <h4>{obj.title}</h4>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Main;
