import { useState, useEffect } from "react";
import useScrollSmooth from "../../hooks/use-scroll-smooth";
import { useGSAP } from "@gsap/react";

// internal imports
import SEO from "@/component/seo";
import HeaderEight from "../../layouts/headers/header-eight";
import PortfolioSliderHomeNine from "../../component/portfolio/slider/portfolio-slider-home-nine";
import ThemeSetting from "../../component/theme-setting";

const HomeNineMain = () => {
    const [whiteCls, setWhiteCls] = useState(true);
    useScrollSmooth();

    useEffect(() => {
        document.body.classList.add("tp-smooth-scroll");
        return () => {
            document.body.classList.remove("tp-smooth-scroll");
        };
    }, []);

    useGSAP(() => {
        const timer = setTimeout(() => { }, 100);
        return () => clearTimeout(timer);
    });

    return (
        <div>
            {/* seo */}
            <SEO title="Home Nine" />
            {/* seo */}

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <div className={`tp-porfolio-10-main ${whiteCls ? "header-white" : ""}`}>
                        {/* header area start */}
                        <HeaderEight style_2={true} container="1685" />
                        {/* header area end */}

                        <main>
                            {/* portfolio slider start */}
                            <PortfolioSliderHomeNine setWhiteCls={setWhiteCls} />
                            {/* portfolio slider end */}
                        </main>
                    </div>
                </div>
            </div>

            {/* theme switcher */}
            <ThemeSetting />
            {/* theme switcher */}
        </div>
    );
};

export default HomeNineMain;
