import { Grid, Paper, CircularProgress, Typography } from "@material-ui/core";
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
        width: 300,
        height: 300,
        // margin: "auto",
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const LoadingModal = (props) => {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    // console.log(props)
    return (
        <Modal
            open={props.open}
            // onClose={() => props.onClose(false)}
            aria-labelledby='simple-modal-title'
            aria-describedby='simple-modal-description'>
            <Paper elevation={3} style={modalStyle} className={classes.paper}>
                <Grid
                    container
                    direction='column'
                    alignItems='center'
                    justify='center'
                    style={{ paddingTop: "24%" }}
                    spacing={3}>
                    <Grid item>
                        <Typography variant='h4'>
                            {props.val ? props.text1 : props.text2}{" "}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <CircularProgress size={120} thickness={3} />
                    </Grid>
                </Grid>
            </Paper>
            {/* <div style={modalStyle} className={classes.paper}>
            </div> */}
        </Modal>
    );
};

export default LoadingModal;
