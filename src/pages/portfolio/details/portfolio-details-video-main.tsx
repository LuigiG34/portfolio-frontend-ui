import useScrollSmooth from "../../../hooks/use-scroll-smooth";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

// internal imports
import Wrapper from "../../../layouts/wrapper";
import HeaderEleven from "../../../layouts/headers/header-eleven";
import Social from "../../../component/social/social";
import { Dots } from "../../../component/svg";
import FooterTwo from "../../../layouts/footers/footer-two";
// animation
import { projectDetailsVideoPin } from "../../../utils/project-anim";

const PortfolioDetailsVideoMain = () => {
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            projectDetailsVideoPin();
        }, 100);
        return () => clearTimeout(timer);
    });

    return (
        <Wrapper title="Portfolio Details Video Main">
            {/* header area start */}
            <HeaderEleven />
            {/* header area end */}

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        {/* portfolio details area */}
                        <div className="project-details-2-area pt-100">
                            <div className="container container-1430">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="project-details-video p-relative">
                                            <video id="video" className="play-video" loop={true} muted={true} autoPlay={true} playsInline={true}>
                                                <source src="https://html.aqlova.com/videos/liko/liko.mp4" type="video/mp4" />
                                            </video>
                                            <div className="video-progress-btn-wrap">
                                                <label id="timer" htmlFor="progress"></label>
                                                <button className="video_progress_btn" id="play" aria-label="Play">&#10073;&#10073;</button>
                                                <progress id="progress" max="100" value="0">Progress</progress>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="project-details-video-overlay z-index-9">
                                <div className="container">
                                    <div className="project-details-video-style">
                                        <div className="row align-items-start">
                                            <div className="col-xl-12">
                                                <div className="project-details-1-info-wrap mb-90 flex-wrap d-flex justify-content-between align-items-center">
                                                    <div className="project-details-1-info">
                                                        <span>Client</span>
                                                        <h4>LikoTheme</h4>
                                                    </div>
                                                    <div className="project-details-1-info">
                                                        <span>Date</span>
                                                        <h4>October {'\'2024'}</h4>
                                                    </div>
                                                    <div className="project-details-1-info">
                                                        <span>Services</span>
                                                        <h4>UI / UX Design</h4>
                                                    </div>
                                                    <div className="project-details-1-info">
                                                        <span>Share</span>
                                                        <div className="project-details-2-social">
                                                            <Social />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="project-details-1-title-box pb-50">
                                                    <span className="project-details-1-subtitle"><i>01</i>Shooting</span>
                                                    <h4 className="project-details-1-title">Perspective</h4>
                                                    <p>Lorem ipsum dolor sit amet consectetur. Ultrices malesuada sed volutpat elit cum.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="project-details-1-navigation d-flex justify-content-between align-items-center">
                                            <Link className="project-details-1-prev" to="#">
                                                <i className="fa-sharp fa-regular fa-arrow-left"></i>
                                                <span>Prev</span>
                                            </Link>
                                            <Link to="#">
                                                <span><Dots /></span>
                                            </Link>
                                            <Link className="project-details-1-next" to="#">
                                                <span>Next</span>
                                                <i className="fa-sharp fa-regular fa-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* portfolio details area */}
                    </main>

                    {/* footer area */}
                    <FooterTwo topCls="z-index-9" />
                    {/* footer area */}
                </div>
            </div>
        </Wrapper>
    );
};

export default PortfolioDetailsVideoMain;
