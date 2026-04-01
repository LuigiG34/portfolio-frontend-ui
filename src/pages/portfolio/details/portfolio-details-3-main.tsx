import useScrollSmooth from "../../../hooks/use-scroll-smooth";
import { useGSAP } from "@gsap/react";

// internal imports
import Wrapper from "../../../layouts/wrapper";
import HeaderEleven from "../../../layouts/headers/header-eleven";
import PortfolioDetailsThreeArea from "../../../component/portfolio/details/portfolio-details-3-area";
import FooterTwo from "../../../layouts/footers/footer-two";
// animation
import { charAnimation, titleAnimation } from "../../../utils/title-animation";

const PortfolioDetailsThreeMain = () => {
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            charAnimation();
            titleAnimation();
        }, 100);
        return () => clearTimeout(timer);
    });

    return (
        <Wrapper title="Portfolio Details Three Main">
            {/* header area start */}
            <HeaderEleven />
            {/* header area end */}

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        {/* portfolio details area */}
                        <PortfolioDetailsThreeArea />
                        {/* portfolio details area */}
                    </main>

                    {/* footer area */}
                    <FooterTwo topCls="" whiteFooter={true} />
                    {/* footer area */}
                </div>
            </div>
        </Wrapper>
    );
};

export default PortfolioDetailsThreeMain;
