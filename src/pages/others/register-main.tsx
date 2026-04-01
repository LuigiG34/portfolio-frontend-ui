import { Link } from "react-router-dom";
import useScrollSmooth from "../../hooks/use-scroll-smooth";

// internal imports
import Wrapper from "../../layouts/wrapper";
import HeaderTwelve from "../../layouts/headers/header-twelve";
import FooterTwo from "../../layouts/footers/footer-two";
import RegisterForm from "../../component/form/register-form";
import SocialLogin from "../../component/form/social-login";

const RegisterMain = () => {
    useScrollSmooth();

    return (
        <Wrapper title="Register">
            {/* header area start */}
            <HeaderTwelve />
            {/* header area end */}

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        {/* register area */}
                        <section className="tp-login-area pt-180 pb-140 p-relative z-index-1 fix">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-xl-6 col-lg-8">
                                        <div className="tp-login-wrapper">
                                            <div className="tp-login-top text-center mb-30">
                                                <h3 className="tp-login-title">Sign Up Liko.</h3>
                                                <p>
                                                    Already have an account?{" "}
                                                    <span>
                                                        <Link to="/login">Sign In</Link>
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="tp-login-option">
                                                <SocialLogin />
                                                <div className="tp-login-mail text-center mb-40">
                                                    <p>or Sign up with <Link to="#">Email</Link></p>
                                                </div>
                                                {/* register form */}
                                                <RegisterForm />
                                                {/* register form */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* register area */}
                    </main>

                    {/* footer area */}
                    <FooterTwo topCls="" />
                    {/* footer area */}
                </div>
            </div>
        </Wrapper>
    );
};

export default RegisterMain;
