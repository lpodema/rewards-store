import Banner from "./banner";
import UserInfo from "./userInfo";
import kite from "../assets/aerolab-logo.svg";
import styled from "styled-components";

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-content: space-around;
    position: relative;
    overflow: hidden;
`;

const LogoImage = styled.img`
    width: 2rem;
    height: 2rem;
    padding: 1rem 2rem;
    position: absolute;
    top: 0.5rem;
    left: 1rem;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <LogoImage src={kite} />
            <div>
                <UserInfo />
                <Banner />
            </div>
        </HeaderContainer>
    );
};

export default Header;
