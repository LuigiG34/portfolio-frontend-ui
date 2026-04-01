import useScrollSmooth from "../../hooks/use-scroll-smooth";
import { useGSAP } from "@gsap/react";

// internal imports
import Wrapper from "../../layouts/wrapper";
import HeaderEleven from "../../layouts/headers/header-eleven";
import { ServiceItems } from "../../component/service/service-five";
import ServiceHero from "../../component/service/service-hero";
import ServiceSix from "../../component/service/service-six";
import { BrandItems } from "../../component/brand/brand-two";
import LineImgSlider from "../../component/line-text/line-img-slider";
import BigText from "../../component/big-text";
import { Leaf } from "../../component/svg";
import FooterTwo from "../../layouts/footers/footer-two";
// animation
import { charAnimation, fadeAnimation } from "../../utils/title-animation";
import { servicePanel } from "../../utils/panel-animation";

const ServiceMain = () => {
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            charAnimation();
            fadeAnimation();
            servicePanel();
        }, 100);
        return () => clearTimeout(timer);
    });

    return (
        <Wrapper title="Service">
            {/* header area start */}
            <HeaderEleven />
            {/* header area end */}

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        {/* service hero */}
                        <ServiceHero />
                        {/* service hero */}

                        {/* service area */}
                        <div className="tp-service-5-area sv-service-style pb-70">
                            <div className="container container-1530">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="tp-service-5-title-box mb-90">
                                            <span className="ab-inner-subtitle mb-20">
                                                <Leaf />
                                                Services
                                            </span>
                                            <h4 className="tp-service-5-title">
                                                We strongly believe that only design reinforced by{" "}
                                                <br />
                                                strategy can provide real results.
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="tp-service-5-wrap">
                                    <ServiceItems />
                                </div>
                            </div>
                        </div>
                        {/* service area */}

                        {/* service area 2 */}
                        <ServiceSix />
                        {/* service area 2 */}

                        {/* brand area */}
                        <div className="tp-brand-4-area pt-120 pb-120">
                            <div className="container">
                                <div className="row gx-0">
                                    <BrandItems />
                                </div>
                            </div>
                        </div>
                        {/* brand area */}

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

export default ServiceMain;
