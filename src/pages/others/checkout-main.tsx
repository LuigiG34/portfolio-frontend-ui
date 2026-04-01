import useScrollSmooth from "../../hooks/use-scroll-smooth";

// internal imports
import Wrapper from "../../layouts/wrapper";
import HeaderTwelve from "../../layouts/headers/header-twelve";
import FooterTwo from "../../layouts/footers/footer-two";
import CheckoutArea from "../../component/checkout/checkout-area";

const CheckoutMain = () => {
    useScrollSmooth();

    return (
        <Wrapper title="Checkout">
            {/* header area start */}
            <HeaderTwelve />
            {/* header area end */}

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        {/* checkout area */}
                        <CheckoutArea />
                        {/* checkout area */}
                    </main>

                    {/* footer area */}
                    <FooterTwo topCls="" />
                    {/* footer area */}
                </div>
            </div>
        </Wrapper>
    );
};

export default CheckoutMain;
