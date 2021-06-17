import Banner from "./banner";
import UserInfo from "./userInfo";
import kite from "../../assets/aerolab-logo.svg";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { getUserInfo } from "../../services/services";
import LoadingModal from "../UI/loadingModal";

import AddPointsModal from "./addPointsModal";
import { LOG_USER, LOGOUT_USER } from "../../utils/constants";
import { Context } from "../../store/store";
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

const Header = () => {
    const classes = useStyles();
    const [auth, setAuth] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [addPointsModal, setAddPointsModal] = useState(false);
    const [state, dispatch] = useContext(Context);
    const [authModal, setAuthModal] = useState(false);

    const handleUserAuth = async (value) => {
        handleClose();
        setAuthModal(true);
        if (value) {
            // console.log("GET USER");
            const user = await getUserInfo();
            dispatch({ type: LOG_USER, payload: user });
            // setAuthModal(false);
            setAuth(true);
            setAuthModal(false);
        } else {
            console.log("Logging out");
            setTimeout(function () {
                dispatch({ type: LOGOUT_USER });
                setAuth(false);
                setAuthModal(false);
            }, 5000);
        }
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleModal = (value) => {
        setAddPointsModal(value);
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
                        <UserInfo />
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
                                {/* <MenuItem onClick={() => handleModal(true)}>
                                    Add points
                                </MenuItem> */}
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
            <AddPointsModal onClose={handleModal} modal={addPointsModal} />
            <LoadingModal
                onClose={() => setAuthModal(false)}
                val={auth}
                text1='Logging out...'
                text2='Logging in...'
                open={authModal}
            />
        </HeaderContainer>
    );
};

export default Header;
