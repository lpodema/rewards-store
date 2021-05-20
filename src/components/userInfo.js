import styled from "styled-components";
import coin from "../assets/icons/coin.svg";

const InfoArea = styled.div`
    width: 100%;
    /* height: 1rem; */
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    /* background-color: green; */
`;

const Container = styled.div`
    /* width: 100%; */
    padding: 0 1rem;
    display: flex;
    flex-direction: row-reverse;
    /* background-color: purple; */
    font-family: SourceSansPro-Regular;
    font-size: 1.3rem;
    color: #616161;
    letter-spacing: -0.15px;
    line-height: 0rem;
    text-align: left;
    margin: 1rem;
    align-content: space-between;
`;

const CoinStack = styled.div`
    /* width: 100%; */
    /* padding: 1rem 2rem; */
    /* height: 3fr; */
    display: flex;
    flex-direction: row;
    background-color: #ededed;
    border-radius: 1rem;
    margin: 0 1rem;
    padding: 0 1rem;
`;

const UserInfo = () => {
    return (
        <InfoArea>
            <Container>
                <CoinStack>
                    <p>6000</p>
                    <img src={coin}></img>
                </CoinStack>
                <p>Usuario</p>
            </Container>
        </InfoArea>
    );
};

export default UserInfo;
