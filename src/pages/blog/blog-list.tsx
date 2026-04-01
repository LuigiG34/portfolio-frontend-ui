import useScrollSmooth from "../../hooks/use-scroll-smooth";
import { useGSAP } from "@gsap/react";

// internal imports
import Wrapper from "../../layouts/wrapper";
import HeaderEleven from "../../layouts/headers/header-eleven";
import FooterTwo from "../../layouts/footers/footer-two";
import BlogListBanner from "../../component/blog/blog-list-banner";
import BlogListArea from "../../component/blog/blog-list-area";
import BigText from "../../component/big-text";

// animation
import { charAnimation, zoomAnimation } from "../../utils/title-animation";

const BlogListMain = () => {
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            charAnimation();
            zoomAnimation();
        }, 100);
        return () => clearTimeout(timer);
    });

    return (
        <Wrapper title="Blog List">
            {/* header area start */}
            <HeaderEleven transparent={true} />
            {/* header area end */}

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        {/* blog list banner */}
                        <BlogListBanner />
                        {/* blog list banner */}

                        {/* blog list area start */}
                        <BlogListArea />
                        {/* blog list area end */}

                        {/* big text area */}
                        <BigText />
                        {/* big text area */}
                    </main>

                    {/* footer area */}
                    <FooterTwo topCls="" />
                    {/* footer area */}
                </div>
            </div>
        </Wrapper>
    );
};

export default BlogListMain;
