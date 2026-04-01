import { useEffect } from "react";
import useScrollSmooth from "../../hooks/use-scroll-smooth";
import { useGSAP } from "@gsap/react";

// internal imports
import Wrapper from "../../layouts/wrapper";
import HeaderTwo from "../../layouts/headers/header-two";
import HeroBannerTwo from "../../component/hero-banner/hero-banner-two";
import AboutOne from "../../component/about/about-one";
import VideoTwo from "../../component/video/video-two";
import ServiceTwo from "../../component/service/service-two";
import ProjectTwo from "../../component/project/project-two";
import AwardTwo from "../../component/award/award-two";
import LineText from "../../component/line-text/line-text";
import InstagramArea from "../../component/instagram/instagram-area";
import FooterTwo from "../../layouts/footers/footer-two";

// animation
import { bounceAnimation, heroBgAnimation, heroTitleAnim } from "../../utils/title-animation";
import { videoAnimTwo } from "../../utils/video-anim";
import { panelOneAnimation } from "../../utils/panel-animation";
import { awardAnimOne } from "../../utils/award-anim";
import { instagramAnim } from "../../utils/instagram-anim";
import { hoverBtn } from "../../utils/hover-btn";
import { aboutAnim } from "../../utils/about-anim";
import { cursorAnimation } from "../../plugins";

const HomeTwoMain = () => {
    useScrollSmooth();
    useEffect(() => {
        document.body.classList.add("tp-smooth-scroll");
        return () => {
            document.body.classList.remove("tp-smooth-scroll");
        }
    }, []);

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
            // hero animation
            heroTitleAnim();
            heroBgAnimation();
            // about animation
            aboutAnim();
            // bounce animation
            bounceAnimation();
            // video anim
            videoAnimTwo();
            // panel animation
            panelOneAnimation();
            // award animation
            awardAnimOne();
            // instagram animation
            instagramAnim();
            hoverBtn();
        }, 100)
        return () => clearTimeout(timer);
    });

    return (
        <Wrapper title="Creative Agency">
            {/* magic cursor start */}
            <div id="magic-cursor">
                <div id="ball"></div>
            </div>
            {/* magic cursor end */}

            {/* header area start */}
            <HeaderTwo />
            {/* header area end */}

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        {/* hero area start */}
                        <HeroBannerTwo />
                        {/* hero area end */}

                        {/* about area start */}
                        <AboutOne />
                        {/* about area end */}

                        {/* video area start */}
                        <VideoTwo />
                        {/* video area end */}

                        {/* service area start */}
                        <ServiceTwo />
                        {/* service area end */}

                        {/* project area */}
                        <ProjectTwo />
                        {/* project area */}

                        {/* award area */}
                        <AwardTwo />
                        {/* award area */}

                        {/* line text area */}
                        <LineText />
                        {/* line text area */}

                        {/* instagram area */}
                        <InstagramArea />
                        {/* instagram area */}
                    </main>

                    {/* footer area */}
                    <FooterTwo />
                    {/* footer area */}
                </div>
            </div>
        </Wrapper>
    );
};

export default HomeTwoMain;
