import { Grid, Button, Typography } from "@material-ui/core";
import { Dialog } from "@material-ui/core";

const ConfirmationDialog = (props) => {
    return (
        <Dialog
            open={props.open}
            onClose={() => props.onClose(false)}
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
                        onClick={() => props.onClose(false)}>
                        Accept
                    </Button>
                </Grid>
            </Grid>
        </Dialog>
    );
};

export default ConfirmationDialog;
