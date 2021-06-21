import { POINTS_BUTTONS, REDEEM_PROD } from "../../utils/constants";
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
import { useContext, useState } from "react";
import { addPoints, redeemProduct } from "../../services/services";
import { Context } from "../../store/store";
import { Dialog } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    paper: {
        width: 200,
        height: 200,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const RedeemProductModal = (props) => {
    const classes = useStyles();

    const product = props.product;
    return (
        <Dialog
            open={props.modal}
            onClose={() => props.onCloseHandler(false)}
            {...props}
            PaperProps={{
                style: {
                    backgroundColor: "white",
                    boxShadow: "none",
                    height: 100,
                    padding: 30,
                },
            }}>
            <Box style={{ padding: "2rem", paddingTop: "2rem" }}>
                <Button
                    style={{ width: "100%" }}
                    variant='contained'
                    color='secondary'
                    onClick={() => props.onClickHandler(product._id)}>
                    Get {product.name}!
                </Button>
                {/* </Box> */}
            </Box>
        </Dialog>
    );
};

export default RedeemProductModal;
