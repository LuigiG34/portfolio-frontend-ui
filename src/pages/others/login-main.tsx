import useScrollSmooth from "../../hooks/use-scroll-smooth";

// internal imports
import Wrapper from "../../layouts/wrapper";
import LoginForm from "../../component/form/login-form";

const LoginMain = () => {
    useScrollSmooth();

    return (
        <Wrapper title="Login">
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <section className="tp-login-area pt-180 pb-140 p-relative z-index-1 fix">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-xl-6 col-lg-8">
                                        <div className="tp-login-wrapper">
                                            <div className="tp-login-top text-center mb-30">
                                                <h3 className="tp-login-title">Connexion Administrateur</h3>
                                            </div>
                                            <div className="tp-login-option">
                                                {/* login form */}
                                                <LoginForm />
                                                {/* login form */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </Wrapper>
    );
};

export default LoginMain;
