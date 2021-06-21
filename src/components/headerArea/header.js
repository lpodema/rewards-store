import Banner from "./banner";
import UserInfo from "./userInfo";
import kite from "../../assets/aerolab-logo.svg";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { getUserInfo } from "../../services/services";
import LoadingModal from "../UI/loadingModal";

import { LOG_USER, LOGOUT_USER } from "../../utils/constants";
import { Context } from "../../store/store";
import { withRouter } from "react-router-dom";
const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-content: space-around;
    position: relative;
    overflow: hidden;
`;

const LogoImage = styled.img`
    width: 2rem;
    height: 2rem;
    padding: 1rem 2rem;
    position: absolute;
    top: 0.5rem;
    left: 1rem;
`;
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
    const [state, dispatch] = useContext(Context);
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
        <HeaderContainer>
            <div>
                <AppBar position='fixed'>
                    <Toolbar>
                        <LogoImage src={kite} />
                        <Typography variant='h6' className={classes.title}>
                            Reward Store
                        </Typography>
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
                                <Link to='/'>
                                    <MenuItem onClick={handleClose}>
                                        Home
                                    </MenuItem>
                                </Link>
                                <Link to='/profile'>
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
            </div>
            <LoadingModal
                onClose={() => setLoadingModal(false)}
                val={auth}
                text1='Logging out...'
                text2='Logging in...'
                open={loadingModal}
            />
        </HeaderContainer>
    );
};

export default withRouter(Header);
