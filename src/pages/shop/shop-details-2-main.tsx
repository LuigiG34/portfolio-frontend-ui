import useScrollSmooth from "../../hooks/use-scroll-smooth";

// internal imports
import Wrapper from "../../layouts/wrapper";
import HeaderTwelve from "../../layouts/headers/header-twelve";
import ShopDetailsAreaTwo from "../../component/shop/details/shop-details-area-2";
import ShopDetailsBottomArea from "../../component/shop/details/shop-details-bottom-area";
import FooterSix from "../../layouts/footers/footer-six";

const ShopDetailsTwoMain = () => {
    useScrollSmooth();

    return (
        <Wrapper title="Shop Details Two Main">
            {/* header area start */}
            <HeaderTwelve />
            {/* header area end */}

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        {/* shop details */}
                        <ShopDetailsAreaTwo />
                        {/* shop details */}

                        {/* shop details bottom */}
                        <ShopDetailsBottomArea />
                        {/* shop details bottom */}
                    </main>

                    {/* footer area */}
                    <FooterSix />
                    {/* footer area */}
                </div>
            </div>
        </Wrapper>
    );
};

export default ShopDetailsTwoMain;
