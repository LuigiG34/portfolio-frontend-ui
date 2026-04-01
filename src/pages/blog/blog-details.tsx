import useScrollSmooth from "../../hooks/use-scroll-smooth";
import { useGSAP } from "@gsap/react";
import { useParams } from "react-router-dom";

// internal imports
import Wrapper from "../../layouts/wrapper";
import HeaderEleven from "../../layouts/headers/header-eleven";
import FooterTwo from "../../layouts/footers/footer-two";
import BlogDetailsBreadcrumb from "../../component/blog/details/blog-details-breadcrumb";
import BlogDetailsArea from "../../component/blog/details/blog-details-area";
import BlogDetailsRelatedPosts from "../../component/blog/details/blog-details-related-posts";

// animation
import { charAnimation } from "../../utils/title-animation";

const BlogDetailsMain = () => {
    const { id } = useParams<{ id: string }>();
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            charAnimation();
        }, 100);
        return () => clearTimeout(timer);
    });

    return (
        <Wrapper title="Blog Details">
            {/* header area start */}
            <HeaderEleven transparent={true} />
            {/* header area end */}

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        {/* blog details hero */}
                        <BlogDetailsBreadcrumb id={Number(id)} />
                        {/* blog details hero */}

                        {/* blog details area */}
                        <BlogDetailsArea />
                        {/* blog details area */}

                        {/* related posts */}
                        <BlogDetailsRelatedPosts />
                        {/* related posts */}
                    </main>

                    {/* footer area */}
                    <FooterTwo topCls="" />
                    {/* footer area */}
                </div>
            </div>
        </Wrapper>
    );
};

export default BlogDetailsMain;
