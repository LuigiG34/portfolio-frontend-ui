import { useEffect } from "react";
import useScrollSmooth from "../../hooks/use-scroll-smooth";
import { useGSAP } from "@gsap/react";

// internal imports
import Wrapper from "../../layouts/wrapper";
import HeaderFour from "../../layouts/headers/header-four";
import HeroBannerFour from "../../component/hero-banner/hero-banner-four";
import GalleryOne from "../../component/gallery/gallery-one";
import AboutThree from "../../component/about/about-three";
import BrandThree from "../../component/brand/brand-three";
import ProjectFour from "../../component/project/project-four";
import VideoThree from "../../component/video/video-three";
import ServiceFour from "../../component/service/service-four";
import ContactOne from "../../component/contact/contact-one";
import FooterFour from "../../layouts/footers/footer-four";

// animation
import { textInvert } from "../../utils/text-invert";
import { fadeAnimation, revelAnimationOne } from "../../utils/title-animation";
import { projectThreeAnimation } from "../../utils/project-anim";
import { ctaAnimation } from "../../utils/cta-anim";

const HomeFourMain = () => {
    useScrollSmooth();
    useEffect(() => {
        document.body.classList.add("tp-smooth-scroll");
        return () => {
            document.body.classList.remove("tp-smooth-scroll");
        };
    }, []);

    useGSAP(() => {
        fadeAnimation();
        revelAnimationOne();
        projectThreeAnimation();
        ctaAnimation();
        textInvert();
    });

    return (
        <Wrapper title="Home Four">
            {/* header area start */}
            <HeaderFour />
            {/* header area end */}

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        {/* hero area start */}
                        <HeroBannerFour />
                        {/* hero area end */}

                        {/* gallery area start */}
                        <GalleryOne />
                        {/* gallery area end */}

                        {/* about area start */}
                        <AboutThree />
                        {/* about area end */}

                        {/* brand area start */}
                        <BrandThree />
                        {/* brand area end */}

                        {/* project area start */}
                        <ProjectFour />
                        {/* project area end */}

                        {/* video area start */}
                        <VideoThree />
                        {/* video area end */}

                        {/* service area start */}
                        <ServiceFour />
                        {/* service area end */}

                        {/* contact area start */}
                        <ContactOne />
                        {/* contact area end */}
                    </main>

                    {/* footer area */}
                    <FooterFour />
                    {/* footer area */}
                </div>
            </div>
        </Wrapper>
    );
};

export default HomeFourMain;
