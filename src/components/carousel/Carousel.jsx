import React from 'react'
import './carousel.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { data } from '../../data';
import { carousel01 } from '../../components/carousel/imports';
import { BsFillPlusCircleFill } from "react-icons/bs";

SwiperCore.use([Navigation]);

const Carousel = () => {
  const menu = data;
  const onClick = (e) => {
    e.preventDefault();
    console.log('click');
  }

  return (
    <div className='hero__menu section__padding'>
      <div className="hero__menu-tittle" id='catalog'>
        <p>MENU</p>
      </div>
      <Swiper
        centeredSlides={true}
        loop={true}
        loopedSlides={100}
        navigation={true}
        breakpoints={{
          "576": {
            "slidesPerView": 3,
            "spaceBetween": 0
          },
          "992": {
            "slidesPerView": 5,
            "spaceBetween": 0
          },
          "1200": {
            "slidesPerView": 7,
            "spaceBetween": 0
          }
        }}
      >
        {menu.slice(6).map(({ name, img }) => (
          <SwiperSlide>
            <div className="hero__menu-carousel">
              <BsFillPlusCircleFill className="hero__menu-carousel__button" color='#f73d27' size={26} onClick={onClick} />
              <img src={carousel01} alt="carousel" />
              <p>{name}</p>
            </div>
          </SwiperSlide>)
        )}
      </Swiper>
    </div>
  )
}

export default Carousel
