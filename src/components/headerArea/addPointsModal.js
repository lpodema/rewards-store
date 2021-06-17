import styled from "styled-components";
import { POINTS_BUTTONS } from "../../utils/constants";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";


function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: "absolute",
        width: 400,
        height: 400,
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

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

const AddPointsModal = (props) => {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    return (
        <Modal
            open={props.modal}
            onClose={() => props.onClose(false)}
            aria-labelledby='simple-modal-title'
            aria-describedby='simple-modal-description'>
            <div style={modalStyle} className={classes.paper}>
                {POINTS_BUTTONS.map((button) => (
                    <AddPointsButton
                        key={button.value}
                        onClick={() => props.onClickHandler(button.value)}>
                        {button.text}
                    </AddPointsButton>
                ))}
            </div>
        </Modal>
    );
};

export default AddPointsModal;
