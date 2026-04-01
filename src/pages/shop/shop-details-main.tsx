import { useParams } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useScrollSmooth from "../../hooks/use-scroll-smooth";

// internal imports
import Wrapper from "../../layouts/wrapper";
import HeaderTwelve from "../../layouts/headers/header-twelve";
import ShopDetailsArea from "../../component/shop/details/shop-details-area";
import ShopDetailsBottomArea from "../../component/shop/details/shop-details-bottom-area";
import FooterSix from "../../layouts/footers/footer-six";

gsap.registerPlugin(ScrollTrigger);

const ShopDetailsMain = () => {
    const { id } = useParams();
    useScrollSmooth();

    useGSAP(() => {
        const sp_2 = gsap.matchMedia();
        sp_2.add("(min-width: 1200px)", () => {
            if (document.querySelector(".tp-shop-details-area")) {
                ScrollTrigger.create({
                    trigger: ".tp-shop-details-area",
                    start: "top -18%",
                    end: "bottom 110.5%",
                    pin: ".tp-shop-details-right-wrap",
                    pinSpacing: true,
                });
            }
        });
    });

    return (
        <Wrapper title="Shop Details">
            {/* header area start */}
            <HeaderTwelve />
            {/* header area end */}

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        {/* shop details */}
                        <ShopDetailsArea id={Number(id) || 1} />
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

export default ShopDetailsMain;
