import UserInfo from "./userInfo";
import kite from "../../assets/aerolab-logo.svg";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { useContext, useEffect, useState } from "react";
import { MenuItem, Menu, Toolbar, AppBar, Icon } from "@material-ui/core";
import { Grid, makeStyles, Typography, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import LoadingModal from "../UI/loadingModal";
import { LOGOUT_USER } from "../../utils/constants";
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
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [state, dispatch] = useContext(Context);
    const [loadingModal, setLoadingModal] = useState(false);

    const authed = state.authed;

    const handleUserLogout = async (value) => {
        handleClose();

        if (value) {
            setLoadingModal(true);
            setTimeout(function () {
                localStorage.clear();
                dispatch({ type: LOGOUT_USER });
                setLoadingModal(false);
                props.history.push("/rewards-store/login");
            }, 2000);
        } else {
            props.history.push("/rewards-store/login");
        }
    };

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
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
                                Rewards Store
                            </Typography>
                        </Grid>
                    </Grid>
                    {authed ? <UserInfo /> : null}
                    <div>
                        <IconButton
                            aria-label='account of current user'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            onClick={handleMenu}
                            color='inherit'>
                            <AccountCircle fontSize='large' />
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
                                to='/rewards-store/'
                                style={{
                                    textDecoration: "none",
                                    color: " #202020",
                                }}>
                                <MenuItem onClick={handleClose}>Home</MenuItem>
                            </Link>
                            <Link
                                to='/rewards-store/profile'
                                style={{
                                    textDecoration: "none",
                                    color: " #202020",
                                }}>
                                <MenuItem onClick={handleClose}>
                                    Profile
                                </MenuItem>
                            </Link>
                            <MenuItem>
                                {authed ? (
                                    <div onClick={() => handleUserLogout(true)}>
                                        Logout
                                    </div>
                                ) : (
                                    <div
                                        onClick={() => handleUserLogout(false)}>
                                        Login
                                    </div>
                                )}
                            </MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
            <LoadingModal
                onClose={() => setLoadingModal(false)}
                val={authed}
                text1='Logging out...'
                text2='Logging in...'
                open={loadingModal}
            />
        </Grid>
    );
};

export default withRouter(Header);
