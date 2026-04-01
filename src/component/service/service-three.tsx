import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperOptions } from "swiper/types";
import { Link } from "react-router-dom";

// service data
const service_data = [
  {
    id: 1,
    icon: "/assets/img/home-04/service/sv-icon-1.png",
    title: "Website design",
    subtitle: "You’re ready to take your business to higher ground.",
  },
  {
    id: 2,
    icon: "/assets/img/home-04/service/sv-icon-2.png",
    title: "Web development",
    subtitle: "You’re ready to take your business to higher ground.",
  },
  {
    id: 3,
    icon: "/assets/img/home-04/service/sv-icon-3.png",
    title: "UI/UX Design",
    subtitle: "You’re ready to take your business to higher ground.",
  },
  {
    id: 4,
    icon: "/assets/img/home-04/service/sv-icon-4.png",
    title: "Growth",
    subtitle: "You’re ready to take your business to higher ground.",
  },
  {
    id: 5,
    icon: "/assets/img/home-04/service/sv-icon-2.png",
    title: "App development",
    subtitle: "You’re ready to take your business to higher ground.",
  },
  {
    id: 6,
    icon: "/assets/img/home-04/service/sv-icon-4.png",
    title: "Marketing",
    subtitle: "You’re ready to take your business to higher ground.",
  },
];

// slider setting
const slider_setting: SwiperOptions = {
  slidesPerView: 4,
  loop: true,
  autoplay: false,
  spaceBetween: 60,
  speed: 1000,
  breakpoints: {
    "1400": {
      slidesPerView: 4,
    },
    "1200": {
      slidesPerView: 3,
    },
    "992": {
      slidesPerView: 2,
    },
    "768": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "576": {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    "0": {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
};

export default function ServiceThree() {
  return (
    <div
      className="tp-service-4-area pt-120 pb-170 fix"
      data-background="assets/img/home-04/brand/overly.png"
      style={{ backgroundImage: "url(/assets/img/home-04/brand/overly.png)" }}
    >
      <div className="container">
        <div className="tp-service-4-title-wrap">
          <div className="row align-items-end">
            <div className="col-xl-9 col-lg-9 col-md-9">
              <div className="tp-service-4-title-box tp_fade_bottom">
                <h4 className="tp-service-4-title">
                  We work with select service providers in the disability sector
                  to develop inclusive products tailored to their needs.
                </h4>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3">
              <div className="tp-service-4-shape-1 text-start text-md-end">
                <img
                  className="tp-zoom-in-out"
                  src="/assets/img/home-04/service/sv-star-1.png"
                  alt="star"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tp-service-4-wrap">
        <Swiper
          {...slider_setting}
          className="swiper-container tp-service-4-slider-active"
        >
          {service_data.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="tp-service-4-item"
                style={{
                  backgroundImage: "url(/assets/img/home-04/hero/overly.png)",
                }}
              >
                <div className="tp-service-4-icon">
                  <img src={item.icon} alt="icon" />
                </div>
                <div className="tp-service-4-content">
                  <h4 className="tp-service-4-title-sm">
                    <Link to="/service">{item.title}</Link>
                  </h4>
                  <p>{item.subtitle}</p>
                  <Link className="tp-service-4-link" to="/service">
                    Read more
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
