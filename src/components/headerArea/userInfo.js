import { useContext, useEffect } from "react";
import styled from "styled-components";
import coin from "../../assets/icons/coin.svg";
import { getUserInfo } from "../../services/services";
import { Context } from "../../store/store";

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
    const [state, dispatch] = useContext(Context);

    useEffect(() => {
        const fetchData = async () => {
            const user = await getUserInfo();
            dispatch({ type: "LOG_USER", payload: user });
        };
        fetchData();
    }, [dispatch]);
    return (
        <InfoArea>
            <Container>
                <CoinStack>
                    <p>{state.user ? state.user.points : null}</p>
                    <img src={coin} alt={coin}></img>
                </CoinStack>
                <p>{state.user ? state.user.name : "Not logged in"}</p>
            </Container>
        </InfoArea>
    );
};

export default UserInfo;
