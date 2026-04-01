import { useParams } from "react-router-dom";
import useScrollSmooth from "../../hooks/use-scroll-smooth";

// internal imports
import Wrapper from "../../layouts/wrapper";
import HeaderEleven from "../../layouts/headers/header-eleven";
import FooterTwo from "../../layouts/footers/footer-two";
import TeamDetailsArea from "../../component/team/team-details-area";

const TeamDetailsMain = () => {
    const { id } = useParams();
    useScrollSmooth();

    return (
        <Wrapper title="Team Details Main">
            {/* header area start */}
            <HeaderEleven />
            {/* header area end */}

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        {/* team details area */}
                        <TeamDetailsArea id={Number(id) || 1} />
                        {/* team details area */}
                    </main>

                    {/* footer area */}
                    <FooterTwo topCls="" />
                    {/* footer area */}
                </div>
            </div>
        </Wrapper>
    );
};

export default TeamDetailsMain;
