import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import coin from "../../assets/icons/coin.svg";
import { getUserInfo } from "../../services/services";
import { Context } from "../../store/store";
import { addPoints } from "../../services/services";
import Modal from "./addPointsModal";
import { UPDATE_POINTS, LOG_USER } from "../../utils/constants";

const InfoArea = styled.div`
    width: 100%;
    /* height: 1rem; */
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: relative;
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

    const [modal, setModal] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            const user = await getUserInfo();
            dispatch({ type: LOG_USER, payload: user });
        };
        fetchData();
    }, [dispatch]);

    const onClickHandler = async (number) => {
        const points = await addPoints(number);
        dispatch({ type: UPDATE_POINTS, payload: points["New Points"] });
        setModal(false);
    };

    return (
        <InfoArea>
            <Container>
                <CoinStack>
                    <p>{state.user ? state.user.points : null}</p>
                    <img
                        src={coin}
                        alt={coin}
                        onClick={() => setModal(!modal)}></img>
                </CoinStack>
                <p>{state.user ? state.user.name : "Not logged in"}</p>
            </Container>
            {modal ? (
                <Modal setModal={setModal} onClickHandler={onClickHandler} />
            ) : null}
        </InfoArea>
    );
};

export default UserInfo;
