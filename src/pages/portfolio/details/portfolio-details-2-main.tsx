import useScrollSmooth from "../../../hooks/use-scroll-smooth";
import { useGSAP } from "@gsap/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import type { SwiperOptions } from "swiper/types";
import { Link } from "react-router-dom";

// internal imports
import Wrapper from "../../../layouts/wrapper";
import HeaderEleven from "../../../layouts/headers/header-eleven";
import FooterTwo from "../../../layouts/footers/footer-two";
import Social from "../../../component/social/social";
import { Dots } from "../../../component/svg";
// animation
import { charAnimation, titleAnimation } from "../../../utils/title-animation";

const slider_images = [
    "/assets/img/inner-project/portfolio-details-2/slide-1.jpg",
    "/assets/img/inner-project/portfolio-details-2/slide-2.jpg",
    "/assets/img/inner-project/portfolio-details-2/slide-3.jpg",
];

const slider_setting: SwiperOptions = {
    slidesPerView: 1,
    loop: false,
    autoplay: false,
    spaceBetween: 0,
    speed: 1000,
    effect: "fade",
    navigation: {
        prevEl: ".project-details-2-prev",
        nextEl: ".project-details-2-next",
    },
};

const PortfolioDetailsTwoMain = () => {
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            charAnimation();
            titleAnimation();
        }, 100);
        return () => clearTimeout(timer);
    });

    return (
        <Wrapper title="Portfolio Details Two Main">
            {/* header area start */}
            <HeaderEleven />
            {/* header area end */}

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        {/* portfolio details area */}
                        <div className="project-details-2-area pt-190">
                            <div className="container container-1430">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="project-details-2-slider-wrap">
                                            <Swiper {...slider_setting} modules={[Navigation, EffectFade]} className="swiper-container project-details-2-slider p-relative fix">
                                                {slider_images.map((src, i) => (
                                                    <SwiperSlide key={i} className="swiper-slide">
                                                        <div className="project-details-2-slider-thumb">
                                                            <img src={src} alt="port-img" style={{ height: "auto" }} />
                                                        </div>
                                                    </SwiperSlide>
                                                ))}
                                                <div className="project-details-2-arrow-box">
                                                    <button className="project-details-2-prev">
                                                        <i className="fa-sharp fa-regular fa-arrow-left"></i>
                                                    </button>
                                                    <button className="project-details-2-next">
                                                        <i className="fa-sharp fa-regular fa-arrow-right"></i>
                                                    </button>
                                                </div>
                                            </Swiper>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="project-details-2-info-style">
                                            <div className="row align-items-start">
                                                <div className="col-xl-6">
                                                    <div className="project-details-1-title-box pb-50">
                                                        <span className="project-details-1-subtitle"><i>01</i>Shooting</span>
                                                        <h4 className="project-details-1-title">Roadtrip</h4>
                                                        <p>We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities, digital experiences.!</p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="project-details-1-info-wrap">
                                                        <div className="project-details-1-info">
                                                            <span>Client</span>
                                                            <h4>LikoTheme</h4>
                                                        </div>
                                                        <div className="project-details-1-info">
                                                            <span>Date</span>
                                                            <h4>October {'\'2022'}</h4>
                                                        </div>
                                                        <div className="project-details-1-info">
                                                            <span>Services</span>
                                                            <h4>UI / UX Design</h4>
                                                        </div>
                                                        <div className="project-details-1-info">
                                                            <span>Share</span>
                                                            <div className="project-details-2-social">
                                                                <Social />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="project-details-1-navigation d-flex justify-content-between align-items-center">
                                                <Link className="project-details-1-prev" to="#">
                                                    <i className="fa-sharp fa-regular fa-arrow-left"></i>
                                                    <span>Prev</span>
                                                </Link>
                                                <Link to="#">
                                                    <span><Dots /></span>
                                                </Link>
                                                <Link className="project-details-1-next" to="#">
                                                    <span>Next</span>
                                                    <i className="fa-sharp fa-regular fa-arrow-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* portfolio details area */}
                    </main>

                    {/* footer area */}
                    <FooterTwo topCls="" />
                    {/* footer area */}
                </div>
            </div>
        </Wrapper>
    );
};

export default PortfolioDetailsTwoMain;
