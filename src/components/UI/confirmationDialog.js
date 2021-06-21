import {
    Modal,
    Grid,
    Card,
    Button,
    Typography,
    Box,
    Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Dialog } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//     paper: {
//         width: 200,
//         height: 200,
//         border: "2px solid #000",
//         boxShadow: theme.shadows[5],
//         padding: theme.spacing(2, 4, 3),
//     },
// }));

const ConfirmationDialog = (props) => {
    // const classes = useStyles();

    return (
        <Dialog
            open={props.modal}
            onClose={() => props.onCloseHandler(false)}
            {...props}
            PaperProps={{
                style: {
                    backgroundColor: "white",
                    boxShadow: "none",
                    width: "100%",
                    height: 200,
                    padding: 10,
                },
            }}>
            <Grid
                container
                direction='column'
                alignItems='center'
                justify='center'>
                <Grid item>
                    <Typography style={{ paddingTop: 50, paddingBottom: 30 }}>
                        {props.message[0]}
                        {props.variable}
                        {props.message[1]}
                    </Typography>
                </Grid>
                <Grid item>
                    <Button
                        variant='contained'
                        color={props.message[2] ? "secondary" : "primary"}
                        onClick={() => props.onCloseHandler(false)}>
                        Accept
                    </Button>
                </Grid>
            </Grid>
        </Dialog>
    );
};

export default ConfirmationDialog;
