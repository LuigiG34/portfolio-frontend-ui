import useScrollSmooth from "../../hooks/use-scroll-smooth";
import { useGSAP } from "@gsap/react";
import { panelTwoAnimation } from "../../utils/panel-animation";
import { charAnimation, revelAnimationTwo, titleAnimation } from "../../utils/title-animation";

// internal imports
import Wrapper from "../../layouts/wrapper";
import HeaderEleven from "../../layouts/headers/header-eleven";
import ProjectThree from "../../component/project/project-three";
import FooterTwo from "../../layouts/footers/footer-two";

const PortfolioShowcaseMain = () => {
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            charAnimation();
            titleAnimation();
            panelTwoAnimation();
            revelAnimationTwo();
        }, 100);
        return () => clearTimeout(timer);
    });

    return (
        <Wrapper title="Portfolio Showcase Main">
            {/* header area start */}
            <HeaderEleven transparent={true} />
            {/* header area end */}

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        {/* portfolio area */}
                        <ProjectThree />
                        {/* portfolio area */}
                    </main>

                    {/* footer area */}
                    <FooterTwo topCls="" />
                    {/* footer area */}
                </div>
            </div>
        </Wrapper>
    );
};

export default PortfolioShowcaseMain;
