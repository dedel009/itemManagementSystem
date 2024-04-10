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
  const space = [
  {    title: "사진1", path:"https://swiperjs.com/demos/images/nature-1.jpg",    }
  ,{    title: "사진2", path:"https://swiperjs.com/demos/images/nature-2.jpg",    }
  ,{    title: "사진3", path:"https://swiperjs.com/demos/images/nature-3.jpg",    }
  ,{    title: "사진4", path:"https://swiperjs.com/demos/images/nature-4.jpg",    }
  ,{    title: "사진5", path:"https://swiperjs.com/demos/images/nature-5.jpg",    }
  ,{    title: "사진6", path:"https://swiperjs.com/demos/images/nature-6.jpg",    }
  ,{    title: "사진7", path:"https://swiperjs.com/demos/images/nature-7.jpg",    }
]


  //추후 슬라이드 라이브러리를 사용하여 장소 리스트를 출력할 예정
  return (
    <div className="swiper-container">
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
        slideShadows: false,
      }}
      pagination={true}
      navigation={true}
      mousewheel={true}
      modules={[EffectCoverflow, Pagination, Navigation, Mousewheel]}
      className="mySwiper"
    >
      {space.map((obj, index) => (
        <SwiperSlide>
          <img className="swiperImg" src={obj.path} alt={obj.title}></img>
          <h4>{obj.title}</h4>
        </SwiperSlide>     
      ))}
    </Swiper>
    </div>
  );
}

export default Main;
