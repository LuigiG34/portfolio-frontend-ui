import useScrollSmooth from "../../hooks/use-scroll-smooth";
import { Link } from "react-router-dom";

// internal imports
import Wrapper from "../../layouts/wrapper";
import HeaderEleven from "../../layouts/headers/header-eleven";
import FooterTwo from "../../layouts/footers/footer-two";

const ErrorMain = () => {
    useScrollSmooth();

    return (
        <Wrapper title="404 Error">
            {/* header area start */}
            <HeaderEleven />
            {/* header area end */}

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        {/* error area */}
                        <div className="tp-error-area pt-190 pb-120">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="tp-error-wrapper text-center">
                                            <h4 className="tp-error-title">Oops!</h4>
                                            <img
                                                src="/assets/img/error/error.png"
                                                alt="error-img"
                                                style={{ height: "auto" }}
                                            />
                                            <div className="tp-error-content">
                                                <h4 className="tp-error-title-sm">Something went Wrong...</h4>
                                                <p>Sorry, we {"couldn't"} find your page.</p>
                                                <Link className="tp-btn-black-2" to="/">Back to Home</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* error area */}
                    </main>

                    {/* footer area */}
                    <FooterTwo topCls="" />
                    {/* footer area */}
                </div>
            </div>
        </Wrapper>
    );
};

export default ErrorMain;
