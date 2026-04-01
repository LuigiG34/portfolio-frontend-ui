import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../component/scroll-to-top";

// home pages
import HomeMain from "../pages/home/home-main";
import HomeMainDev from "../pages/home/home";
import HomeTwoMain from "../pages/home/home-two";
import HomeThreeMain from "../pages/home/home-three";
import HomeFourMain from "../pages/home/home-four";
import HomeFiveMain from "../pages/home/home-five";
import HomeSixMain from "../pages/home/home-six";
import HomeSevenMain from "../pages/home/home-seven";
import HomeEightMain from "../pages/home/home-eight";
import HomeNineMain from "../pages/home/home-nine";
import HomeTenMain from "../pages/home/home-ten";
import HomeElevenMain from "../pages/home/home-eleven";
import HomeTwelveMain from "../pages/home/home-twelve";

// about pages
import AboutMeMain from "../pages/about/about-me";
import AboutUsMain from "../pages/about/about-us";

// blog pages
import BlogClassicMain from "../pages/blog/blog-classic";
import BlogListMain from "../pages/blog/blog-list";
import BlogModernMain from "../pages/blog/blog-modern";
import BlogDetailsMain from "../pages/blog/blog-details";
import BlogDetailsTwoMain from "../pages/blog/blog-details-2";

// portfolio pages
import PortfolioGridColTwoMain from "../pages/portfolio/portfolio-grid-col-2-main";
import PortfolioGridColThreeMain from "../pages/portfolio/portfolio-grid-col-3-main";
import PortfolioGridColThreeFullwidthMain from "../pages/portfolio/portfolio-grid-col-3-fullwidth-main";
import PortfolioGridColFourMain from "../pages/portfolio/portfolio-grid-col-4-main";
import PortfolioGridColFourFullwidthMain from "../pages/portfolio/portfolio-grid-col-4-fullwidth-main";
import PortfolioMasonryMain from "../pages/portfolio/portfolio-masonry-main";
import PortfolioRandomMain from "../pages/portfolio/portfolio-random-main";
import PortfolioShowcaseMain from "../pages/portfolio/portfolio-showcase-main";
import PortfolioStandardMain from "../pages/portfolio/portfolio-standard-main";
import PortfolioWrapperMain from "../pages/portfolio/portfolio-wrapper-main";

// portfolio details pages
import PortfolioDetailsOneMain from "../pages/portfolio/details/portfolio-details-1-main";
import PortfolioDetailsTwoMain from "../pages/portfolio/details/portfolio-details-2-main";
import PortfolioDetailsThreeMain from "../pages/portfolio/details/portfolio-details-3-main";
import PortfolioDetailsComparisonMain from "../pages/portfolio/details/portfolio-details-comparison-main";
import PortfolioDetailsVideoMain from "../pages/portfolio/details/portfolio-details-video-main";
import PortfolioDetailsCustomLightMain from "../pages/portfolio/details/portfolio-custom-light-main";
import PortfolioDetailsShowcaseMain from "../pages/portfolio/details/portfolio-showcase-details-main";
import PortfolioDetailsShowcaseTwoMain from "../pages/portfolio/details/portfolio-showcase-details-2-main";

// contact pages
import ContactMain from "../pages/contact/contact";
import ContactTwoMain from "../pages/contact/contact-2";

// shop pages
import ShopMain from "../pages/shop/shop-main";
import ShopDetailsMain from "../pages/shop/shop-details-main";
import ShopDetailsTwoMain from "../pages/shop/shop-details-2-main";

// team pages
import TeamMain from "../pages/team/team-main";
import TeamDetailsMain from "../pages/team/team-details-main";

// service pages
import ServiceMain from "../pages/service/service-main";
import ServiceDetailsMain from "../pages/service/service-details-main";

// other pages
import ErrorMain from "../pages/others/error-main";
import FaqMain from "../pages/others/faq-main";
import PricingMain from "../pages/others/pricing-main";
import BrandMain from "../pages/others/brand-main";
import LoginMain from "../pages/others/login-main";
import RegisterMain from "../pages/others/register-main";
import CartMain from "../pages/others/cart-main";
import CheckoutMain from "../pages/others/checkout-main";
import AccountMain from "../pages/others/account-main";
import WishlistMain from "../pages/others/wishlist-main";

export default function AppNavigation() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/home-dev" element={<HomeMainDev />} />

                {/* home routes */}
                <Route path="/" element={<HomeMain />} />
                <Route path="/home-2" element={<HomeTwoMain />} />
                <Route path="/home-3" element={<HomeThreeMain />} />
                <Route path="/home-4" element={<HomeFourMain />} />
                <Route path="/home-5" element={<HomeFiveMain />} />
                <Route path="/home-6" element={<HomeSixMain />} />
                <Route path="/home-7" element={<HomeSevenMain />} />
                <Route path="/home-8" element={<HomeEightMain />} />
                <Route path="/home-9" element={<HomeNineMain />} />
                <Route path="/home-10" element={<HomeTenMain />} />
                <Route path="/home-11" element={<HomeElevenMain />} />
                <Route path="/home-12" element={<HomeTwelveMain />} />

                {/* about routes */}
                <Route path="/about-me" element={<AboutMeMain />} />
                <Route path="/about-us" element={<AboutUsMain />} />

                {/* blog routes */}
                <Route path="/blog-classic" element={<BlogClassicMain />} />
                <Route path="/blog-list" element={<BlogListMain />} />
                <Route path="/blog-modern" element={<BlogModernMain />} />
                <Route path="/blog-details/:id" element={<BlogDetailsMain />} />
                <Route path="/blog-details-2" element={<BlogDetailsTwoMain />} />

                {/* portfolio routes */}
                <Route path="/portfolio-grid-col-2" element={<PortfolioGridColTwoMain />} />
                <Route path="/portfolio-grid-col-3" element={<PortfolioGridColThreeMain />} />
                <Route path="/portfolio-grid-col-3-fullwidth" element={<PortfolioGridColThreeFullwidthMain />} />
                <Route path="/portfolio-grid-col-4" element={<PortfolioGridColFourMain />} />
                <Route path="/portfolio-grid-col-4-fullwidth" element={<PortfolioGridColFourFullwidthMain />} />
                <Route path="/portfolio-masonry" element={<PortfolioMasonryMain />} />
                <Route path="/portfolio-random" element={<PortfolioRandomMain />} />
                <Route path="/portfolio-showcase" element={<PortfolioShowcaseMain />} />
                <Route path="/portfolio-standard" element={<PortfolioStandardMain />} />
                <Route path="/portfolio-wrapper" element={<PortfolioWrapperMain />} />

                {/* portfolio details routes */}
                <Route path="/portfolio-details-1" element={<PortfolioDetailsOneMain />} />
                <Route path="/portfolio-details-2" element={<PortfolioDetailsTwoMain />} />
                <Route path="/portfolio-details-3" element={<PortfolioDetailsThreeMain />} />
                <Route path="/portfolio-details-comparison" element={<PortfolioDetailsComparisonMain />} />
                <Route path="/portfolio-details-video" element={<PortfolioDetailsVideoMain />} />
                <Route path="/portfolio-custom-light" element={<PortfolioDetailsCustomLightMain />} />
                <Route path="/portfolio-showcase-details" element={<PortfolioDetailsShowcaseMain />} />
                <Route path="/portfolio-showcase-details-2" element={<PortfolioDetailsShowcaseTwoMain />} />

                {/* contact routes */}
                <Route path="/contact" element={<ContactMain />} />
                <Route path="/contact-2" element={<ContactTwoMain />} />

                {/* shop routes */}
                <Route path="/shop" element={<ShopMain />} />
                <Route path="/shop-details/:id" element={<ShopDetailsMain />} />
                <Route path="/shop-details-2" element={<ShopDetailsTwoMain />} />

                {/* team routes */}
                <Route path="/team" element={<TeamMain />} />
                <Route path="/team-details/:id" element={<TeamDetailsMain />} />

                {/* service routes */}
                <Route path="/service" element={<ServiceMain />} />
                <Route path="/service-details" element={<ServiceDetailsMain />} />

                {/* other routes */}
                <Route path="/error" element={<ErrorMain />} />
                <Route path="*" element={<ErrorMain />} />
                <Route path="/faq" element={<FaqMain />} />
                <Route path="/pricing" element={<PricingMain />} />
                <Route path="/brand" element={<BrandMain />} />
                <Route path="/login" element={<LoginMain />} />
                <Route path="/register" element={<RegisterMain />} />
                <Route path="/cart" element={<CartMain />} />
                <Route path="/checkout" element={<CheckoutMain />} />
                <Route path="/account" element={<AccountMain />} />
                <Route path="/wishlist" element={<WishlistMain />} />
            </Routes>
        </BrowserRouter>
    );
}