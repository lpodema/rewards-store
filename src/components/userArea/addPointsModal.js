import styled from "styled-components";
import { LOADING, POINTS_BUTTONS, UPDATE_POINTS } from "../../utils/constants";
import {
    Modal,
    Grid,
    Card,
    Dialog,
    Button,
    Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useContext, useState } from "react";
import { addPoints } from "../../services/services";
import { Context } from "../../store/store";
import ConfirmationDialog from "../UI/confirmationDialog";

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

const AddPointsModal = (props) => {
    const [state, dispatch] = useContext(Context);
    const [confirmation, setConfirmation] = useState(false);
    const [points, setPoints] = useState();

    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const onClickHandler = async (amount) => {
        dispatch({ type: LOADING, payload: true });
        const newAmount = await addPoints(amount);
        await dispatch({ type: UPDATE_POINTS, payload: newAmount });
        const user = { name: state.user.name, points: newAmount };
        localStorage.setItem("user", JSON.stringify(user));
        setPoints(newAmount);
        //TODO agregar un cartel que avise SUCCESS/ERROR
        props.onCloseHandler(false);
        dispatch({ type: LOADING, payload: false });
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
                justify='space-evenly'
                alignItems='stretch'
                spacing={0}
                direction='column'>
                <Grid item>
                    <Typography variant='h4' align='center'>
                        Add more coins...
                    </Typography>
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
                                    <Typography variant='h6' align='center'>
                                        {button.text}
                                    </Typography>
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
