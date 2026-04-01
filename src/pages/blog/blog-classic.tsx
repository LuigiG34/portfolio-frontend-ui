import useScrollSmooth from "../../hooks/use-scroll-smooth";
import { useGSAP } from "@gsap/react";

// internal imports
import Wrapper from "../../layouts/wrapper";
import HeaderEleven from "../../layouts/headers/header-eleven";
import FooterTwo from "../../layouts/footers/footer-two";
import BlogClassicSlider from "../../component/blog/slider/blog-classic-slider";
import BlogClassicArea from "../../component/blog/blog-classic-area";

// animation
import { charAnimation } from "../../utils/title-animation";

const BlogClassicMain = () => {
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            charAnimation();
        }, 100);
        return () => clearTimeout(timer);
    });

    return (
        <Wrapper title="Blog Classic">
            {/* header area start */}
            <HeaderEleven transparent={true} />
            {/* header area end */}

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        {/* blog classic hero start */}
                        <BlogClassicSlider />
                        {/* blog classic hero end */}

                        {/* blog classic area */}
                        <BlogClassicArea />
                        {/* blog classic area */}
                    </main>

                    {/* footer area */}
                    <FooterTwo topCls="" />
                    {/* footer area */}
                </div>
            </div>
        </Wrapper>
    );
};

export default BlogClassicMain;
