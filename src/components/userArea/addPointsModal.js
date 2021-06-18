import styled from "styled-components";
import { POINTS_BUTTONS, UPDATE_POINTS } from "../../utils/constants";
import { Modal, Grid, Card, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useContext, useState } from "react";
import { addPoints } from "../../services/services";
import { Context } from "../../store/store";

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
        height: 300,
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: "2rem",
        // padding: theme.spacing(2, 4, 3),
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
    const [state, dispatch] = useContext(Context);

    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const onClickHandler = async (amount) => {
        const newAmount = await addPoints(amount);
        dispatch({ type: UPDATE_POINTS, payload: newAmount });
        //TODO agregar un cartel que avise SUCCESS/ERROR
        props.onCloseHandler(false);
    };

    return (
        <Modal
            open={props.modal}
            onClose={() => props.onCloseHandler(false)}
            aria-labelledby='simple-modal-title'
            aria-describedby='simple-modal-description'>
            <Grid
                style={modalStyle}
                container
                className={classes.paper}
                justify='space-around'
                alignItems='stretch'
                spacing={0}
                direction='column'>
                <Grid item>
                    <Typography>Add points</Typography>
                </Grid>
                <Grid item>
                    <Grid container direction='row'>
                        {POINTS_BUTTONS.map((button) => (
                            <Grid item key={button.value} lg={4}>
                                <Button
                                    style={{ width: "90%" }}
                                    variant='contained'
                                    color='primary'
                                    onClick={() =>
                                        onClickHandler(button.value)
                                    }>
                                    {button.text}
                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Modal>
    );
};

export default AddPointsModal;
