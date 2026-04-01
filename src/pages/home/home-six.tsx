import { gsap } from "gsap";
import useScrollSmooth from "../../hooks/use-scroll-smooth";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

// internal imports
import Wrapper from "../../layouts/wrapper";
import HeaderSix from "../../layouts/headers/header-six";
import HeroBannerSix from "../../component/hero-banner/hero-banner-six";
import ShopCategory from "../../component/category/shop-category";
import ShopBanner from "../../component/shop/shop-banner";
import ShopProducts from "../../component/shop/shop-products";
import InstagramTwo from "../../component/instagram/instagram-two";
import BrandFour from "../../component/brand/brand-four";
import FooterSix from "../../layouts/footers/footer-six";

const HomeSixMain = () => {
    useScrollSmooth();

    useGSAP(() => {
        const sp = gsap.matchMedia();
        sp.add("(min-width: 1200px)", () => {
            if (document.querySelectorAll(".tp-shop-area").length) {
                ScrollTrigger.create({
                    trigger: ".tp-shop-area",
                    start: "top -3%",
                    end: "bottom 110.5%",
                    pin: ".tp-shop-left-thumb",
                    pinSpacing: true,
                });
            }
        });

        // Refresh ScrollTrigger after images load to fix pin calculation on live
        import("imagesloaded").then((module) => {
            const imagesLoaded = module.default || (module as unknown as typeof module.default);
            const container = document.querySelector(".tp-shop-area");
            if (container) {
                imagesLoaded(container, () => {
                    ScrollTrigger.refresh();
                });
            }
        });
    });

    return (
        <Wrapper title="Home Six">
            {/* header area start */}
            <HeaderSix />
            {/* header area end */}

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        {/* hero area start */}
                        <HeroBannerSix />
                        {/* hero area end */}

                        {/* category area start */}
                        <ShopCategory />
                        {/* category area end */}

                        {/* shop banner start */}
                        <ShopBanner />
                        {/* shop banner end */}

                        {/* shop product start */}
                        <ShopProducts />
                        {/* shop product end */}

                        {/* shop banner 2 start */}
                        <div className="tp-shop-banner-area pb-120">
                            <div className="container-fluid">
                                <div className="tp-shop-banner-anim">
                                    <img
                                        style={{ width: "100%", height: "auto" }}
                                        data-speed=".8"
                                        className="w-100"
                                        src="/assets/img/inner-shop/banner/banner-3.jpg"
                                        alt="banner-img"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* shop banner 2 end */}

                        {/* instagram area start */}
                        <InstagramTwo />
                        {/* instagram area end */}

                        {/* brand area start */}
                        <BrandFour />
                        {/* brand area end */}
                    </main>

                    {/* footer area */}
                    <FooterSix />
                    {/* footer area */}
                </div>
            </div>
        </Wrapper>
    );
};

export default HomeSixMain;
