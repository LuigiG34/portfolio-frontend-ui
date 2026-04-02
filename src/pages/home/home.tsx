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
import GalleryOne from "@/component/gallery/gallery-one";
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
            <div id="magic-cursor">
                <div id="ball"></div>
            </div>

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <HeroBannerOne />
                        <BrandThree />
                        <AboutMeArea />
                        <CounterOne />
                        <ServiceOne />
                        <GalleryOne />
                        <AboutWork />
                        <PortfolioGridFourColArea />
                        <ContactTwo />
                    </main>
                    <Footer />
                </div>
            </div>
        </Wrapper>
    );
};

export default HomeMainDev;
