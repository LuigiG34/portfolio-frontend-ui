import useScrollSmooth from "../../hooks/use-scroll-smooth";

// internal imports
import Wrapper from "../../layouts/wrapper";
import HeaderTwelve from "../../layouts/headers/header-twelve";
import FooterTwo from "../../layouts/footers/footer-two";
import MyAccountArea from "../../component/account/my-account-area";

const AccountMain = () => {
    useScrollSmooth();

    return (
        <Wrapper title="Account">
            {/* header area start */}
            <HeaderTwelve />
            {/* header area end */}

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        {/* account area */}
                        <MyAccountArea />
                        {/* account area */}
                    </main>

                    {/* footer area */}
                    <FooterTwo topCls="" />
                    {/* footer area */}
                </div>
            </div>
        </Wrapper>
    );
};

export default AccountMain;
