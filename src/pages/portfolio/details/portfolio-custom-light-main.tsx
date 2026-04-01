import useScrollSmooth from "../../../hooks/use-scroll-smooth";
import { useGSAP } from "@gsap/react";

// internal imports
import Wrapper from "../../../layouts/wrapper";
import HeaderSeven from "../../../layouts/headers/header-seven";
import PortfolioDetailsCustomLightArea from "../../../component/portfolio/details/portfolio-details-custom-light-area";
import FooterTwo from "../../../layouts/footers/footer-two";
// animation
import { charAnimation, fadeAnimation, titleAnimation } from "../../../utils/title-animation";

const PortfolioDetailsCustomLightMain = () => {
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            titleAnimation();
            charAnimation();
            fadeAnimation();
        }, 100);
        return () => clearTimeout(timer);
    });

    return (
        <Wrapper title="Portfolio Details Custom Light Main">
            {/* header area start */}
            <HeaderSeven />
            {/* header area end */}

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        {/* portfolio details area */}
                        <PortfolioDetailsCustomLightArea />
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

export default PortfolioDetailsCustomLightMain;
