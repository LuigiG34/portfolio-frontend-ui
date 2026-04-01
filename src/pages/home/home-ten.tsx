import { useEffect } from "react";

// internal imports
import SEO from "@/component/seo";
import HeaderNine from "../../layouts/headers/header-nine";
import PortfolioSliderHomeTen from "../../component/portfolio/slider/portfolio-slider-home-ten";
import ThemeSetting from "../../component/theme-setting";

const HomeTenMain = () => {
    useEffect(() => {
        document.body.classList.add("tp-smooth-scroll");
        return () => {
            document.body.classList.remove("tp-smooth-scroll");
        };
    }, []);

    return (
        <div>
            {/* seo */}
            <SEO title="Home Ten" />
            {/* seo */}

            {/* header area start */}
            <HeaderNine />
            {/* header area end */}

            <main>
                {/* portfolio slider start */}
                <PortfolioSliderHomeTen />
                {/* portfolio slider end */}
            </main>

            {/* theme switcher */}
            <ThemeSetting />
            {/* theme switcher */}
        </div>
    );
};

export default HomeTenMain;
