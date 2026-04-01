import { Link } from "react-router-dom";
import AwardOne from "../../component/award/award-one";
import BrandOne from "../../component/brand/brand-one";
import HeroBannerOne from "../../component/hero-banner/hero-banner-one";
import ProjectOne from "../../component/project/project-one";
import ServiceOne from "../../component/service/service-one";
import TeamOne from "../../component/team/team-one";
import TestimonialOne from "../../component/testimonial/testimonial-one";
import VideOne from "../../component/video/video-one";
import FooterOne from "../../layouts/footers/footer-one";
import HeaderOne from "../../layouts/headers/header-one";
import Wrapper from "../../layouts/wrapper";
import useScrollSmooth from "../../hooks/use-scroll-smooth";
import { useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { videoAnimOne } from "../../utils/video-anim";
import { teamMarqueAnim } from "../../utils/scroll-marque";
import { hoverBtn } from "../../utils/hover-btn";
import { footerTwoAnimation } from "../../utils/footer-anim";
import { bounceAnimation, charAnimation, fadeAnimation } from "../../utils/title-animation";
import { cursorAnimation } from "../../plugins";

export default function HomeMain() {

    useScrollSmooth();
    useEffect(() => {
        document.body.classList.add("tp-magic-cursor");
        return () => {
            document.body.classList.remove("tp-magic-cursor");
        }
    }, []);

    useEffect(() => {
        if (document.querySelector('.tp-magic-cursor')) {
            const cleanup = cursorAnimation();
            return () => cleanup && cleanup();
        }
    }, []);

    useGSAP(() => {
        const timer = setTimeout(() => {
            videoAnimOne();
            // portfolio image wrap
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".tp-project-full-img-wrap",
                    start: "top 65",
                    end: "bottom 0%",
                    pin: ".tp-project-full-img",
                    pinSpacing: false,
                }
            });
            // team marquee
            teamMarqueAnim();
            hoverBtn();
            footerTwoAnimation();
            fadeAnimation();
            charAnimation();
            bounceAnimation();
        }, 100)
        return () => clearTimeout(timer);
    });
    return (
        <Wrapper title="Home" showBackToTop={false}>

            {/* magic cursor start */}
            <div id="magic-cursor">
                <div id="ball"></div>
            </div>
            {/* magic cursor end */}


            {/* header area start */}
            <HeaderOne />
            {/* header area end */}

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>

                        {/* hero area start */}
                        <HeroBannerOne />
                        {/* hero area end */}

                        {/* video area */}
                        <VideOne />
                        {/* video area */}

                        {/* brand area */}
                        <BrandOne />
                        {/* brand area */}

                        {/* service area */}
                        <ServiceOne />
                        {/* service area */}

                        {/* project area */}
                        <ProjectOne />
                        {/* project area */}

                        {/* award area */}
                        <AwardOne />
                        {/* award area */}

                        {/* team area */}
                        <TeamOne />
                        {/* team area */}

                        {/* testimonial area */}
                        <TestimonialOne />
                        {/* testimonial area */}
                    </main>

                    {/* footer area */}
                    <FooterOne />
                    {/* footer area */}
                </div>
            </div>

            {/* footer shape */}
            <div className="tp-footer-shape-wrap z-index-5 smooth">
                <Link to="/contact">
                    <div className="tp-footer-shape p-relative">
                        <img className="img-1" src={'/assets/img/home-01/footer/footer-circle-shape-1.png'} alt="shape" />
                        <img className="img-2" src={'/assets/img/home-01/footer/footer-circle-shape-2.png'} alt="shape" />
                        <span></span>
                    </div>
                </Link>
            </div>
            {/* footer shape */}
        </Wrapper>
    )
}