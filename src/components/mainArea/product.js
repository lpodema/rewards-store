import { useContext } from "react";
import { Context } from "../../store/store";
import bluebag from "../../assets/icons/buy-blue.svg";
import whitebag from "../../assets/icons/buy-white.svg";
import coin from "../../assets/icons/coin.svg";
import { useState } from "react";
import { redeemProduct } from "../../services/services";
import {
    LOADING,
    REDEEM_PROD,
    SET_ERROR,
    UPDATE_POINTS,
} from "../../utils/constants";
import { Icon, Paper } from "@material-ui/core";
import RedeemProductModal from "../UI/redeemModal";
import {
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    makeStyles,
    Typography,
} from "@material-ui/core";
import { Box } from "@material-ui/core";
import ConfirmationDialog from "../UI/confirmationDialog";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles({
    hover: { backgroundColor: "rgba(10, 212, 250, 0.5) ", zIndex: 40 },
    needing: {
        backgroundColor: "rgba(128, 128, 128, 0.7)",
        padding: "0.5rem",
        paddingTop: 0,
        paddingBottom: 0,
        borderRadius: 20,
    },
});

const Product = (props) => {
    const classes = useStyles();
    const { _id, img, name, cost, category } = props.product;
    const { user } = useContext(Context)[0];
    const dispatch = useContext(Context)[1];

    const [hover, setHover] = useState(false);
    const [bag, setBag] = useState(bluebag);
    const [dialog, setDialog] = useState(false);
    const [message, setMessage] = useState(["", "", false]);

    const handleMouse = (value) => {
        setHover(value);
        hover ? setBag(bluebag) : setBag(whitebag);
    };
    const [redeemModal, setRedeemModal] = useState(false);

    const handleRedeem = async (value) => {
        dispatch({ type: LOADING, payload: true });
        const result = await redeemProduct(value);

        //TODO agregar un cartel que avise SUCCESS/ERROR
        if (result) {
            setRedeemModal(false);
            dispatch({ type: REDEEM_PROD });
            dispatch({ type: UPDATE_POINTS, payload: user.points - cost });
            localStorage.removeItem("history");
            localStorage.setItem(
                "user",
                JSON.stringify({ name: user.name, points: user.points - cost })
            );
            setMessage(["Successfully added ", " to collection!", false]);
            setDialog(true);
        } else {
            dispatch({
                type: SET_ERROR,
                payload: "Error adding product to collection",
            });
            setRedeemModal(false);
            setMessage(["Error adding ", " to collection...", true]);
            setDialog(true);
        }
        dispatch({ type: LOADING, payload: false });
    };
    const notEnough = user !== null && user.points < cost;
    return (
        <Paper
            elevation={3}
            style={{ position: "relative" }}
            onMouseEnter={() => handleMouse(true)}
            onMouseLeave={() => handleMouse(false)}>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component='img'
                        alt={name + category}
                        image={img.url}
                        title={name + category}
                        // zIndex={10}
                    />
                    {notEnough ? (
                        <Box
                            container
                            top={"5%"}
                            right={"5%"}
                            position='absolute'
                            className={classes.needing}>
                            <Grid
                                container
                                alignItems='center'
                                justify='center'>
                                <Grid item>
                                    <Typography variant='body2'>
                                        You're lacking {cost - user.points}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Icon>
                                        <img src={coin} alt={coin} />
                                    </Icon>
                                </Grid>
                            </Grid>
                        </Box>
                    ) : (
                        <Box
                            top='5%'
                            right='5%'
                            position='absolute'
                            zIndex={1000}>
                            <Icon>
                                <img
                                    src={bag}
                                    alt={bag}
                                    height={"100%"}
                                    width={"100%"}
                                />
                            </Icon>
                        </Box>
                    )}
                    <CardContent>
                        <Grid container direction='column' alignItems='stretch'>
                            <Grid item>
                                <Grid
                                    container
                                    direction='row'
                                    justify='space-between'
                                    alignItems='center'>
                                    <Grid container direction='column'>
                                        <Divider
                                            variant='fullWidth'
                                            orientation='horizontal'
                                            style={{ color: "000" }}
                                        />
                                        <Typography
                                            variant='subtitle2'
                                            style={{ marginTop: "0.8rem" }}
                                            color='textSecondary'>
                                            {category}
                                        </Typography>
                                        <Typography variant='subtitle1'>
                                            {name}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
                {hover && !notEnough ? (
                    <Box
                        position='absolute'
                        top={0}
                        right={0}
                        width='100%'
                        height='100%'
                        className={classes.hover}>
                        <Grid
                            container
                            direction='column'
                            alignItems='center'
                            style={{ marginTop: "6rem" }}>
                            <Grid item>
                                <Grid container justify='center'>
                                    <Grid item>
                                        <Typography
                                            variant='h3'
                                            style={{ color: "white" }}>
                                            {cost}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Icon>
                                            <img
                                                src={coin}
                                                alt={coin}
                                                height='100%'
                                                width='100%'
                                            />
                                        </Icon>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Button
                                    value={_id}
                                    onClick={() => setRedeemModal(true)}
                                    variant='contained'
                                    style={{
                                        backgroundColor: "white",
                                        width: "100%",
                                        borderRadius: 10,
                                        border: "2px solid #4A4A4A",
                                        paddingLeft: "2rem",
                                        paddingRight: "2rem",
                                    }}>
                                    <Typography variant='body1'>
                                        Redeem Now
                                    </Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                ) : null}
            </Card>
            <RedeemProductModal
                onClose={() => setRedeemModal(false)}
                open={redeemModal}
                product={[props.product, handleRedeem]}
            />
            <ConfirmationDialog
                onClose={() => setDialog(false)}
                open={dialog}
                message={message}
                variable={name}
            />
        </Paper>
    );
};

export default Product;
