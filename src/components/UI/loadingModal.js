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


const LoadingModal = (props) => {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    // console.log(props)
    return (
        <Modal
            open={props.open}
            onClose={() => props.onClose(false)}
            aria-labelledby='simple-modal-title'
            aria-describedby='simple-modal-description'>
            <div style={modalStyle} className={classes.paper}>
                {props.val? props.text1 : props.text2 }
            </div>
        </Modal>
    );
};

export default LoadingModal;