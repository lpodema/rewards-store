import UserInfo from "./userInfo";
import kite from "../../assets/aerolab-logo.svg";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { useContext, useEffect, useState } from "react";
import { MenuItem, Menu, Toolbar, AppBar, Icon } from "@material-ui/core";
import { Grid, makeStyles, Typography, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import { getUserInfo } from "../../services/services";
import LoadingModal from "../UI/loadingModal";
import { LOG_USER, LOGOUT_USER } from "../../utils/constants";
import { Context } from "../../store/store";
import { withRouter } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Header = (props) => {
    const classes = useStyles();
    const [auth, setAuth] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const dispatch = useContext(Context)[1];
    const [loadingModal, setLoadingModal] = useState(false);

    const handleUserAuth = async (value) => {
        handleClose();
        setLoadingModal(true);
        if (value) {
            localStorage.setItem("loggedIn", true);
            const user = await getUserInfo();
            dispatch({ type: LOG_USER, payload: user });
            localStorage.setItem("user", JSON.stringify(user));
            props.history.push("/");
            setAuth(true);
            setLoadingModal(false);
        } else {
            setTimeout(function () {
                localStorage.removeItem("loggedIn");
                dispatch({ type: LOGOUT_USER });
                setAuth(false);
                setLoadingModal(false);
                localStorage.clear();
                props.history.push("/login");
            }, 2000);
        }
    };

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            setAuth(true);
        }
        return () => {};
    }, [dispatch]);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Grid container>
            <AppBar position='fixed'>
                <Toolbar>
                    <Grid container justify='flex-start' alignItems='center'>
                        <Grid item>
                            <Icon fontSize='inherit'>
                                <img src={kite} alt={kite} />
                            </Icon>
                        </Grid>
                        <Grid item>
                            <Typography variant='h6' className={classes.title}>
                                Reward Store
                            </Typography>
                        </Grid>
                    </Grid>
                    {auth ? <UserInfo /> : null}
                    <div>
                        <IconButton
                            aria-label='account of current user'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            onClick={handleMenu}
                            color='inherit'>
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id='menu-appbar'
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={open}
                            onClose={handleClose}>
                            <Link
                                to='/'
                                style={{
                                    textDecoration: "none",
                                    color: " #202020",
                                }}>
                                <MenuItem onClick={handleClose}>Home</MenuItem>
                            </Link>
                            <Link
                                to='/profile'
                                style={{
                                    textDecoration: "none",
                                    color: " #202020",
                                }}>
                                <MenuItem onClick={handleClose}>
                                    Profile
                                </MenuItem>
                            </Link>
                            <MenuItem onClick={() => handleUserAuth(!auth)}>
                                {auth ? (
                                    <div> Logout </div>
                                ) : (
                                    <div> Login </div>
                                )}
                            </MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
            <LoadingModal
                onClose={() => setLoadingModal(false)}
                val={auth}
                text1='Logging out...'
                text2='Logging in...'
                open={loadingModal}
            />
        </Grid>
    );
};

export default withRouter(Header);
