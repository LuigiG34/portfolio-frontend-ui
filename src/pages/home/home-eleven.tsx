import useScrollSmooth from "../../hooks/use-scroll-smooth";

// internal imports
import SEO from "@/component/seo";
import HeaderTen from "../../layouts/headers/header-ten";
import PortfolioSliderHomeEleven from "../../component/portfolio/slider/portfolio-slider-home-eleven";
import ThemeSetting from "../../component/theme-setting";

const HomeElevenMain = () => {
    useScrollSmooth();

    return (
        <div>

            {/* seo */}
            <SEO title="Home Eleven" />
            {/* seo */}

            {/* header area start */}
            <HeaderTen />
            {/* header area end */}

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        {/* portfolio slider start */}
                        <PortfolioSliderHomeEleven />
                        {/* portfolio slider end */}
                    </main>
                </div>
            </div>

            {/* theme switcher */}
            <ThemeSetting />
            {/* theme switcher */}
        </div>
    );
};

export default HomeElevenMain;
