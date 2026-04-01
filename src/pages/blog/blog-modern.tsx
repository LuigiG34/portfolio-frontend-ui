import useScrollSmooth from "../../hooks/use-scroll-smooth";
import { useGSAP } from "@gsap/react";

// internal imports
import Wrapper from "../../layouts/wrapper";
import HeaderEleven from "../../layouts/headers/header-eleven";
import FooterTwo from "../../layouts/footers/footer-two";
import BlogModern from "../../component/blog/blog-modern-area";
import BigText from "../../component/big-text";

// animation
import { charAnimation } from "../../utils/title-animation";

const BlogModernMain = () => {
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            charAnimation();
        }, 100);
        return () => clearTimeout(timer);
    });

    return (
        <Wrapper title="Blog Modern">
            {/* header area start */}
            <HeaderEleven />
            {/* header area end */}

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        {/* blog modern area start */}
                        <BlogModern />
                        {/* blog modern area end */}

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

export default BlogModernMain;
