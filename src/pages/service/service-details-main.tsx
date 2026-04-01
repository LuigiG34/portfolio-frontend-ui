import useScrollSmooth from "../../hooks/use-scroll-smooth";
import { useGSAP } from "@gsap/react";

// internal imports
import Wrapper from "../../layouts/wrapper";
import HeaderEleven from "../../layouts/headers/header-eleven";
import ServiceDetailsArea from "../../component/service/service-details-area";
import LineImgSlider from "../../component/line-text/line-img-slider";
import BigText from "../../component/big-text";
import FooterTwo from "../../layouts/footers/footer-two";
// animation
import { charAnimation, titleAnimation } from "../../utils/title-animation";

const ServiceDetailsMain = () => {
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            charAnimation();
            titleAnimation();
        }, 100);
        return () => clearTimeout(timer);
    });

    return (
        <Wrapper title="Service Details Main">
            {/* header area start */}
            <HeaderEleven />
            {/* header area end */}

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        {/* service details area */}
                        <ServiceDetailsArea />
                        {/* service details area */}

                        {/* line image slider */}
                        <LineImgSlider />
                        {/* line image slider */}

                        {/* big text */}
                        <BigText />
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

export default ServiceDetailsMain;
