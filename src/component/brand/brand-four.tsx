import { Swiper, SwiperSlide } from 'swiper/react';
import type { SwiperOptions } from 'swiper/types';

const brand_images = [
  '/assets/img/inner-shop/brand/brand-1.png',
  '/assets/img/inner-shop/brand/brand-2.png',
  '/assets/img/inner-shop/brand/brand-3.png',
  '/assets/img/inner-shop/brand/brand-4.png',
  '/assets/img/inner-shop/brand/brand-5.png',
  '/assets/img/inner-shop/brand/brand-3.png',
];

// slider setting
const slider_setting: SwiperOptions = {
  slidesPerView: 5,
  loop: false,
  autoplay: false,
  spaceBetween: 0,
  speed: 1000,
  breakpoints: {
    '1400': {
      slidesPerView: 5,
    },
    '1200': {
      slidesPerView: 4,
    },
    '992': {
      slidesPerView: 4,
    },
    '768': {
      slidesPerView: 3,
    },
    '576': {
      slidesPerView: 2,
    },
    '0': {
      slidesPerView: 1,
    },
  },
  navigation: {
    prevEl: '.tp-shop-brand-prev',
    nextEl: '.tp-shop-brand-next',
  },
}
export default function BrandFour() {
  return (
    <div className="tp-shop-brand-area mb-100">
      <div className="container container-1300">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-shop-brand-wrapper">
              <Swiper {...slider_setting} className="swiper-container tp-shop-brand-active fix">
                {brand_images.map((src, i) => (
                  <SwiperSlide key={i}>
                    <div className="tp-shop-brand-item">
                      <img src={src} alt="brand-img" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
