import { scroller } from 'react-scroll';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';
import { Leaf, ScrollDownTwo, UpArrowFour } from '../../svg';
import { Link } from 'react-router-dom';

// slider images
const slider_images = [
  '/assets/img/inner-project/portfolio-details-3/portfolio-img-5.jpg',
  '/assets/img/inner-project/portfolio-details-3/portfolio-img-6.jpg',
  '/assets/img/inner-project/portfolio-details-3/portfolio-img-7.jpg',
  '/assets/img/inner-project/portfolio-details-3/portfolio-img-6.jpg',
];

// slider setting
const slider_setting: SwiperOptions = {
  slidesPerView: 3,
  loop: true,
  autoplay: true,
  spaceBetween: 20,
  speed: 1000,
  breakpoints: {
    '1400': {
      slidesPerView: 3,
    },
    '1200': {
      slidesPerView: 3,
    },
    '992': {
      slidesPerView: 2,
    },
    '768': {
      slidesPerView: 2,
    },
    '576': {
      slidesPerView: 1,
    },
    '0': {
      slidesPerView: 1,
    },
  },
}

export default function PortfolioDetailsThreeArea() {
  const scrollTo = () => {
    scroller.scrollTo('xyz', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };
  return (
    <>
      {/* details are */}
      <div className="tp-project-details-3-top tp-project-details-3-ptb">
        <div className="container container-1560">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-project-details-3-title-box">
                <h2 className="tp-section-title-160 mb-50 tp-char-animation">Mockups Google Pixel</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <div className="tp-project-details-3-scroll smooth">
                <a onClick={scrollTo} className="pointer">
                  <span>
                    <ScrollDownTwo />
                  </span>
                  Scroll to Explore
                </a>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="tp-project-details-3-link mt-30 text-start text-md-end">
                <Link to="#">
                  Visit  Website
                  <span>
                    <UpArrowFour />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* details are */}

      {/* full image */}
      <div className="tp-project-details-3-full-width-thumb mb-120">
        <img data-speed=".8" src="/assets/img/inner-project/portfolio-details-3/portfolio-img-1.jpg" alt="port-img" />
      </div>
      {/* full image */}

      {/* details area */}
      <div className="showcase-details-2-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="showcase-details-2-section-box">
                <h4 className="showcase-details-2-section-title tp-char-animation">Daring Colors</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3">
              <div className="showcase-details-2-section-left">
                <span className="ab-inner-subtitle mb-25">
                  <Leaf />
                  An introduction
                </span>
              </div>
            </div>
            <div className="col-xl-9">
              <div className="showcase-details-2-content-right">
                <p className="pb-25 tp_title_anim">Liko website was using a generic template, felt quite outdated and not in-line with the quality of his work. The main goal was to translate his high-end photography into a digital experience that would honor and present his work in a memorable and contemporary way.</p>
                <p className='tp_title_anim'>Each case study gets its own identity through the styling options in the custom content management system. The styling options are pre-defined</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* details area */}

      {/*details thumb */}
      <div id="xyz" className="tp-project-details-3-thumb mb-120">
        <div className="container container-1560">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-project-details-3-thumb-box">
                <img data-speed=".8" src="/assets/img/inner-project/portfolio-details-3/portfolio-img-2.jpg" alt="port-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* details thumb */}

      {/* details area */}
      <div className="showcase-details-2-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="showcase-details-2-section-box">
                <h4 className="showcase-details-2-section-title tp-char-animation">The Goal</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3">
              <div className="showcase-details-2-section-left">
                <span className="ab-inner-subtitle mb-25">
                  <Leaf />
                  An introduction
                </span>
              </div>
            </div>
            <div className="col-xl-9">
              <div className="showcase-details-2-content-right">
                <p className="pb-25 tp_title_anim">Liko website was using a generic template, felt quite outdated and not in-line with the quality of his work. The main goal was to translate his high-end photography into a digital experience that would honor and present his work in a memorable and contemporary way.</p>
                <p className='tp_title_anim'>Each case study gets its own identity through the styling options in the custom content management system. The styling options are pre-defined</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* details area */}

      {/* details thumb */}
      <div className="tp-project-details-3-thumb mb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="tp-project-details-3-thumb-box mb-30">
                <img className="w-100" src="/assets/img/inner-project/portfolio-details-3/portfolio-img-3.jpg" alt="port-img" />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="tp-project-details-3-thumb-box mb-30">
                <img className="w-100" src="/assets/img/inner-project/portfolio-details-3/portfolio-img-4.jpg" alt="port-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* details thumb */}

      {/* details area */}
      <div className="showcase-details-2-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="showcase-details-2-section-box">
                <h4 className="showcase-details-2-section-title tp-char-animation">The Goal</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3">
              <div className="showcase-details-2-section-left">
                <span className="ab-inner-subtitle mb-25">
                  <Leaf />
                  An introduction
                </span>
              </div>
            </div>
            <div className="col-xl-9">
              <div className="showcase-details-2-content-right">
                <p className="pb-25 tp_title_anim">Liko website was using a generic template, felt quite outdated and not in-line with the quality of his work. The main goal was to translate his high-end photography into a digital experience that would honor and present his work in a memorable and contemporary way.</p>
                <p className='tp_title_anim'>Each case study gets its own identity through the styling options in the custom content management system. The styling options are pre-defined</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* details area */}

      {/* slider images area */}
      <div className="pd-visual-slider-wrap pb-40">
        <Swiper {...slider_setting} modules={[Autoplay]} className="swiper-container pd-visual-slider-active">
          {slider_images.map((imgSrc, index) => (
            <SwiperSlide key={index}>
              <div className="pd-visual-slider-thumb fix">
                <img src={imgSrc} alt="port-img" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* slider images area */}
    </>
  )
}
