import styled from "styled-components";
import { POINTS_BUTTONS } from "../../utils/constants";
const ModalContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 18rem;
    background-color: red;
    /* text-align: center; */
    display: flex;
    flex-direction: row;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    /* height: 1rem; */
    /* width: 1rem; */
    padding: 0.6rem 1rem;
    background-color: purple;
    vertical-align: middle;
`;

const AddPointsButton = styled.button`
    width: 33.3%;
    /* height: 1rem; */
    padding: 0.5rem 1rem;
    border-radius: 5px;
    background-color: green;
    align-self: flex-end;
    /* vertical-align: text-top; */
    z-index: 1000;
`;
const Title = styled.h3`
    position: absolute;
    top: -20px;
    left: 0;
    width: 100%;
    /* height: 1rem; */
    padding: 0.6rem 2.5rem;
    white-space: nowrap;
    background-color: yellow;
`;

const Modal = (props) => {
    return (
        <ModalContainer>
            <Title>Agregar más puntos</Title>
            <CloseButton onClick={() => props.setModal(false)}>X</CloseButton>
            <>
                {POINTS_BUTTONS.map((button) => (
                    <AddPointsButton
                        key={button.value}
                        onClick={() => props.onClickHandler(button.value)}>
                        {button.text}
                    </AddPointsButton>
                ))}
            </>
        </ModalContainer>
    );
};

export default Modal;
