import { Grid, makeStyles, Typography } from "@material-ui/core";
import image from "../../assets/header-x2.png";

const useStyles = makeStyles({
    category:{
        color: "#ffffff",
        textAlign:"left",
        position:"absolute",
        bottom:"5rem",
        left:"4rem"
    },
    img:{
        width: "100%",
        height: "100%",
        margin: "auto",
        display: "block",
        overflow: "hidden"
    }
})

const Banner = () => {
    const classes = useStyles();
    return (
        <Grid container>
            <img src={image} className={classes.img} alt={image} />
            <Typography className={classes.category} variant="h2">Electronics</Typography>
        </Grid>
    );
};

export default Banner;
