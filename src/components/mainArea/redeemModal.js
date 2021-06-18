import { POINTS_BUTTONS, REDEEM_PROD } from "../../utils/constants";
import { Modal, Grid, Card, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useContext, useState } from "react";
import { addPoints, redeemProduct } from "../../services/services";
import { Context } from "../../store/store";

const RedeemProductModal = (props) => {
    const [state, dispatch] = useContext(Context);

    // const classes = useStyles();
    // const [modalStyle] = useState(getModalStyle);

    // const onClickHandler = async (id) => {
    //     const result = await redeemProduct(id);
    //     dispatch({ type: REDEEM_PROD });
    //     //TODO agregar un cartel que avise SUCCESS/ERROR
    //     if (result) {
    //         localStorage.removeItem("history");
    //     }
    //     props.onCloseHandler(false);
    // };
    const product = props.product;
    return (
        <Modal
            open={props.modal}
            onClose={() => props.onCloseHandler(false)}
            aria-labelledby='simple-modal-title'
            aria-describedby='simple-modal-description'>
            <Grid
                // style={modalStyle}
                container
                // className={classes.paper}
                justify='space-around'
                alignItems='stretch'
                spacing={0}
                direction='column'>
                <Grid item>
                    <Typography>Redeem product</Typography>
                </Grid>
                <Grid item>
                    <Button
                        style={{ width: "100%" }}
                        variant='contained'
                        color='primary'
                        onClick={() => props.onClickHandler(product._id)}>
                        {product.name}
                    </Button>
                </Grid>
            </Grid>
        </Modal>
    );
};

export default RedeemProductModal;
