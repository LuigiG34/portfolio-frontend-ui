import { useEffect } from "react";

// internal imports
import SEO from "@/component/seo";
import HeaderEight from "../../layouts/headers/header-eight";
import PortfolioSliderHomeTwelve from "../../component/portfolio/slider/portfolio-slider-home-twelve";
import ThemeSetting from "../../component/theme-setting";
import { cursorAnimation } from "../../plugins";

const HomeTwelveMain = () => {
    useEffect(() => {
        document.body.classList.add("tp-magic-cursor");
        return () => {
            document.body.classList.remove("tp-magic-cursor");
        };
    }, []);

    useEffect(() => {
        if (document.querySelector(".tp-magic-cursor")) {
            const cleanup = cursorAnimation();
            return () => cleanup && cleanup();
        }
    }, []);

    return (
        <div>
            {/* seo */}
            <SEO title="Home Twelve" />
            {/* seo */}

            {/* magic cursor start */}
            <div id="magic-cursor">
                <div id="ball"></div>
            </div>
            {/* magic cursor end */}

            {/* header area start */}
            <HeaderEight container="1800" />
            {/* header area end */}

            <main>
                {/* portfolio slider start */}
                <PortfolioSliderHomeTwelve />
                {/* portfolio slider end */}
            </main>

            {/* theme switcher */}
            <ThemeSetting />
            {/* theme switcher */}
        </div>
    );
};

export default HomeTwelveMain;
