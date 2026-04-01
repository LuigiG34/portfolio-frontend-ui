import useScrollSmooth from "../../hooks/use-scroll-smooth";
import { useGSAP } from "@gsap/react";

// internal imports
import Wrapper from "../../layouts/wrapper";
import HeaderEleven from "../../layouts/headers/header-eleven";
import BigText from "../../component/big-text";
import FooterTwo from "../../layouts/footers/footer-two";
import FaqArea from "../../component/faq/faq-area";
// animation
import { charAnimation, titleAnimation } from "../../utils/title-animation";

const FaqMain = () => {
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            charAnimation();
            titleAnimation();
        }, 100);
        return () => clearTimeout(timer);
    });

    return (
        <Wrapper title="FAQ">
            {/* header area start */}
            <HeaderEleven />
            {/* header area end */}

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <div
                        className="inner-bg"
                        style={{ backgroundImage: "url(/assets/img/home-01/team/team-details-bg.png)" }}
                    >
                        <main>
                            {/* faq hero */}
                            <div className="tm-hero-area tm-hero-ptb">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="tm-hero-content">
                                                <span className="tm-hero-subtitle">Liko Studio</span>
                                                <h4 className="tm-hero-title tp-char-animation">FAQ Page</h4>
                                            </div>
                                            <div className="tm-hero-text tp_title_anim">
                                                <p>Frequently asked question (FAQ) pages <br /> to find answers.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* faq hero */}

                            {/* faq area */}
                            <FaqArea />
                            {/* faq area */}

                            {/* big text */}
                            <BigText />
                            {/* big text */}
                        </main>

                        {/* footer area */}
                        <FooterTwo topCls="" />
                        {/* footer area */}
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default FaqMain;
