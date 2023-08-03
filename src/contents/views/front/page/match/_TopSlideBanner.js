import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";	// 추가
import 'swiper/css';
import 'swiper/css/pagination';

import imgBanner from "../../assets/img/img_long_banner.png"

function TopSlideBanner() {
  return (
    <section className="sec_banner">
      <div className="swiper_wrap">
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{
          el: '.custom_pagination',
          clickable: true,
          renderBullet: (index, className) => {
            return '<span class="com_swiper_bullet ' + className + '"></span>';
          },
        }}
        loop={true}
        autoplay={true}
      >
        <SwiperSlide><img src={imgBanner} alt="엔지니어 채용 전문 플랫폼" /></SwiperSlide>
        <SwiperSlide><img src={imgBanner} alt="엔지니어 채용 전문 플랫폼" /></SwiperSlide>
      </Swiper>
      <div className="custom_pagination"></div>
      </div>
    </section>
  );
} 

export default TopSlideBanner;