import useScrollSmooth from "../../hooks/use-scroll-smooth";
import { useGSAP } from "@gsap/react";

// internal imports
import Wrapper from "../../layouts/wrapper";
import HeaderEleven from "../../layouts/headers/header-eleven";
import FooterTwo from "../../layouts/footers/footer-two";
import AboutUsHero from "../../component/about/about-us-hero";
import AboutUsArea from "../../component/about/about-us-area";
import TeamOne from "../../component/team/team-one";
import FunFactOne from "../../component/fun-fact/fun-fact-one";
import BrandFive from "../../component/brand/brand-five";
import AwardOne from "../../component/award/award-one";

// animation
import { charAnimation, fadeAnimation, titleAnimation } from "../../utils/title-animation";
import { hoverBtn } from "../../utils/hover-btn";
import { teamMarqueAnim } from "../../utils/scroll-marque";

const AboutUsMain = () => {
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
        <Wrapper title="About Us">
            {/* header area start */}
            <HeaderEleven transparent={true} />
            {/* header area end */}

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        {/* about hero */}
                        <AboutUsHero />
                        {/* about hero */}

                        {/* about area */}
                        <AboutUsArea />
                        {/* about area */}

                        {/* team area */}
                        <TeamOne spacing="" />
                        {/* team area */}

                        {/* fun fact area */}
                        <FunFactOne />
                        {/* fun fact area */}

                        {/* brand area */}
                        <BrandFive />
                        {/* brand area */}

                        {/* award area */}
                        <AwardOne cls="ab-award-style pt-120 pb-120" abStyle={true} />
                        {/* award area */}
                    </main>

                    {/* footer area */}
                    <FooterTwo topCls="" />
                    {/* footer area */}
                </div>
            </div>
        </Wrapper>
    );
};

export default AboutUsMain;
