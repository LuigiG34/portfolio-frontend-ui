import useScrollSmooth from "../../hooks/use-scroll-smooth";
import { useGSAP } from "@gsap/react";

// internal imports
import Wrapper from "../../layouts/wrapper";
import HeaderEleven from "../../layouts/headers/header-eleven";
import AboutMeHero from "../../component/about/about-me-hero";
import AboutMeArea from "../../component/about/about-me-area";
import AboutPortfolio from "../../component/portfolio/about-portfolio";
import AboutWork from "../../component/work/about-work";
import { BrandItems } from "../../component/brand/brand-two";
import LineImgSlider from "../../component/line-text/line-img-slider";
import BigText from "../../component/big-text";
import FooterTwo from "../../layouts/footers/footer-two";

// animation
import { charAnimation, fadeAnimation, titleAnimation } from "../../utils/title-animation";
import { hoverBtn } from "../../utils/hover-btn";
import { teamMarqueAnim } from "../../utils/scroll-marque";

const AboutMeMain = () => {
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            charAnimation();
            titleAnimation();
            teamMarqueAnim();
            fadeAnimation();
            hoverBtn();
        }, 100);
        return () => clearTimeout(timer);
    });

    return (
        <Wrapper title="About Me">
            {/* header area start */}
            <HeaderEleven />
            {/* header area end */}

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        {/* about hero */}
                        <AboutMeHero />
                        {/* about hero */}

                        {/* about me area */}
                        <AboutMeArea />
                        {/* about me area */}

                        {/* about portfolio */}
                        <AboutPortfolio />
                        {/* about portfolio */}

                        {/* about work */}
                        <AboutWork />
                        {/* about work */}

                        {/* brand area */}
                        <div className="tp-brand-4-area pt-120 pb-120">
                            <div className="container">
                                <div className="row gx-0">
                                    <BrandItems />
                                </div>
                            </div>
                        </div>
                        {/* brand area */}

                        {/* line img slider */}
                        <LineImgSlider />
                        {/* line img slider */}

                        {/* big text */}
                        <BigText cls="char-wrapper" />
                        {/* big text */}
                    </main>

                    {/* footer area */}
                    <FooterTwo topCls="" />
                    {/* footer area */}
                </div>
            </div>
        </Wrapper>
    );
};

export default AboutMeMain;
