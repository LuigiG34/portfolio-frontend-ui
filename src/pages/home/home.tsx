import { useEffect } from "react";
import useScrollSmooth from "../../hooks/use-scroll-smooth";
import { useGSAP } from "@gsap/react";

// internal imports
import Wrapper from "../../layouts/wrapper";
import Footer from "../../layouts/footers/footer";

// animation
import { charAnimation, fadeAnimation, revelAnimationTwo } from "../../utils/title-animation";
import { imageRevealAnimation } from "../../utils/image-reveal-anim";
import { hoverBtn } from "../../utils/hover-btn";
import { heroScrollTextAnim } from "../../utils/scroll-marque";
import { footerTwoAnimation } from "../../utils/footer-anim";
import { cursorAnimation } from "../../plugins";
import ContactTwo from "@/component/contact/contact-two";
import CounterOne from "@/component/counter/counter-one";
import AboutThree from "@/component/about/about-three";
import GalleryOne from "@/component/gallery/gallery-one";
import HeroBannerFour from "@/component/hero-banner/hero-banner-four";
import LineTextThree from "@/component/line-text/line-text-3";
import BrandThree from "@/component/brand/brand-three";
import HeroBannerOne from "@/component/hero-banner/hero-banner-one";
import AboutMeArea from "@/component/about/about-me-area";
import ServiceOne from "@/component/service/service-one";
import AboutWork from "@/component/work/about-work";
import PortfolioGridFourColArea from "@/component/portfolio/portfolio-grid-4-col-area";

const HomeMainDev = () => {
    useScrollSmooth();

    useEffect(() => {
        document.body.classList.add("tp-smooth-scroll");
        document.body.classList.add("tp-magic-cursor");
        return () => {
            document.body.classList.remove("tp-smooth-scroll");
            document.body.classList.remove("tp-magic-cursor");
        };
    }, []);

    useEffect(() => {
        if (document.querySelector(".tp-magic-cursor")) {
            const cleanup = cursorAnimation();
            return () => cleanup && cleanup();
        }
    }, []);

    useGSAP(() => {
        const timer = setTimeout(() => {
            charAnimation();
            heroScrollTextAnim();
            imageRevealAnimation();
            hoverBtn();
            revelAnimationTwo();
            fadeAnimation();
            footerTwoAnimation();
        }, 100);
        return () => clearTimeout(timer);
    });

    return (
        <Wrapper title="Luigi Gandemer - Développeur web">
            {/* magic cursor start */}
            <div id="magic-cursor">
                <div id="ball"></div>
            </div>
            {/* magic cursor end */}

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        {/* hero area start */}
                        <HeroBannerOne />
                        {/* hero area end */}
                        
                        {/* brand area start */}
                        <BrandThree />
                        {/* brand area end */}

                        {/* about me area */}
                        <AboutMeArea />
                        {/* about me area */}

                        {/* counter area start */}
                        <CounterOne />
                        {/* counter area end */}

                        {/* service area */}
                        <ServiceOne />
                        {/* service area */}

                        {/* gallery area start */}
                        <GalleryOne />
                        {/* gallery area end */}

                        {/* about work */}
                        <AboutWork />
                        {/* about work */}

                        {/* portfolio area */}
                        <PortfolioGridFourColArea />
                        {/* portfolio area */}


                        {/* contact area */}
                        <ContactTwo />
                        {/* contact area */}
                    </main>

                    {/* footer area */}
                    <Footer />
                    {/* footer area */}
                </div>
            </div>
        </Wrapper>
    );
};

export default HomeMainDev;
