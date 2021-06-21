import { useContext } from "react";
import coin from "../../assets/icons/coin.svg";
import { Context } from "../../store/store";
import { Divider, Grid, Icon, makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
    container: {
        backgroundColor: "#FFFFFF",
        width: "30%",
        lineHeight: "0.5rem",
        borderRadius: 20,
        color: "#3F3F3F",
    },
});
const UserInfo = () => {
    const classes = useStyles();
    const state = useContext(Context)[0];

    return (
        <Grid
            container
            direction='row'
            justify='space-evenly'
            className={classes.container}>
            <Grid item>
                <Typography variant='h5'>
                    {state.user ? state.user.name : null}
                </Typography>
            </Grid>
            <Grid item>
                <Divider orientation="vertical" />
            </Grid>
            <Grid item>
                <Grid container direction='row' justify='center'>
                    <Grid item>
                        <Typography variant='h5'>
                            {state.user ? state.user.points : null}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Icon fontSize='large'>
                            <img src={coin} alt={coin} />
                        </Icon>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default UserInfo;
