import { useEffect } from "react";
import useScrollSmooth from "../../hooks/use-scroll-smooth";
import { useGSAP } from "@gsap/react";

// internal imports
import Wrapper from "../../layouts/wrapper";
import HeaderFive from "../../layouts/headers/header-five";
import HeroBannerFive from "../../component/hero-banner/hero-banner-five";
import AboutFour from "../../component/about/about-four";
import ProjectFive from "../../component/project/project-five";
import CounterOne from "../../component/counter/counter-one";
import MissionOne from "../../component/mission/mission-one";
import ServiceFive from "../../component/service/service-five";
import BlogOne from "../../component/blog/blog-one";
import FooterFive from "../../layouts/footers/footer-five";

// animation
import { charAnimation, fadeAnimation, revelAnimationTwo } from "../../utils/title-animation";
import { imageRevealAnimation } from "../../utils/image-reveal-anim";
import { hoverBtn } from "../../utils/hover-btn";
import { heroScrollTextAnim } from "../../utils/scroll-marque";
import { footerTwoAnimation } from "../../utils/footer-anim";
import { cursorAnimation } from "../../plugins";

const HomeFiveMain = () => {
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
        <Wrapper title="Home Five">
            {/* magic cursor start */}
            <div id="magic-cursor">
                <div id="ball"></div>
            </div>
            {/* magic cursor end */}

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        {/* header area start */}
                        <HeaderFive />
                        {/* header area end */}

                        {/* hero area start */}
                        <HeroBannerFive />
                        {/* hero area end */}

                        {/* about area start */}
                        <AboutFour />
                        {/* about area end */}

                        {/* project area start */}
                        <ProjectFive />
                        {/* project area end */}

                        {/* counter area start */}
                        <CounterOne />
                        {/* counter area end */}

                        {/* mission area start */}
                        <MissionOne />
                        {/* mission area end */}

                        {/* service area start */}
                        <ServiceFive />
                        {/* service area end */}

                        {/* blog area start */}
                        <BlogOne />
                        {/* blog area end */}
                    </main>

                    {/* footer area */}
                    <FooterFive />
                    {/* footer area */}
                </div>
            </div>
        </Wrapper>
    );
};

export default HomeFiveMain;
