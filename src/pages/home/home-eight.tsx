import { useEffect } from "react";
import useScrollSmooth from "../../hooks/use-scroll-smooth";
import { useGSAP } from "@gsap/react";

// internal imports
import HeaderEight from "../../layouts/headers/header-eight";
import PerspectivePortfolioSlider from "../../component/portfolio/slider/perspective-port-slider";
import ThemeSetting from "../../component/theme-setting";

// animation
import { perspective } from "../../utils/perspective-anim";
import { revelAnimationOne } from "../../utils/title-animation";
import { cursorAnimation } from "../../plugins";
import SEO from "@/component/seo";

const HomeEightMain = () => {
    useScrollSmooth();

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

    useGSAP(() => {
        const timer = setTimeout(() => {
            perspective();
            revelAnimationOne();
        }, 100);
        return () => clearTimeout(timer);
    });

    return (
        <div>

            {/* seo */}
            <SEO title="Home Eight" />
            {/* seo */}

            {/* magic cursor start */}
            <div id="magic-cursor">
                <div id="ball"></div>
            </div>
            {/* magic cursor end */}

            {/* header area start */}
            <HeaderEight />
            {/* header area end */}

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        {/* perspective area start */}
                        <PerspectivePortfolioSlider />
                        {/* perspective area end */}
                    </main>
                </div>
            </div>

            {/* theme switcher */}
            <ThemeSetting />
            {/* theme switcher */}
        </div>
    );
};

export default HomeEightMain;
