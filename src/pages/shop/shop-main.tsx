import { Link } from "react-router-dom";
import useScrollSmooth from "../../hooks/use-scroll-smooth";

// internal imports
import Wrapper from "../../layouts/wrapper";
import HeaderTwelve from "../../layouts/headers/header-twelve";
import ShopArea from "../../component/shop/shop-area";
import FooterSix from "../../layouts/footers/footer-six";

const ShopMain = () => {
    useScrollSmooth();

    return (
        <Wrapper title="Shop">
            {/* header area start */}
            <HeaderTwelve />
            {/* header area end */}

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        {/* shop breadcrumb */}
                        <section className="breadcrumb__area include-bg pt-170 pb-90">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-xl-6">
                                        <div className="breadcrumb__content p-relative text-center z-index-1">
                                            <h3 className="breadcrumb__title">Shop Grid</h3>
                                            <div className="breadcrumb__list">
                                                <span>
                                                    <Link to="/">Home</Link>
                                                </span>
                                                <span>Shop Grid</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* shop breadcrumb */}

                        {/* shop area */}
                        <ShopArea />
                        {/* shop area */}
                    </main>

                    {/* footer area */}
                    <FooterSix />
                    {/* footer area */}
                </div>
            </div>
        </Wrapper>
    );
};

export default ShopMain;
