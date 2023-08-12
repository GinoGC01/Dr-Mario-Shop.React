import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import './SliderPrincipal.css'

// import required modules
import { Navigation, Autoplay } from 'swiper/modules'

export default function SliderPrincipal () {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper swiper-principal"
      >
        <SwiperSlide>
          <img src="/images/champion-aqua-slider.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <img src="/images/Everlast-slider-1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <img src="/images/nike-slider.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <img src="/images/Orange.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
