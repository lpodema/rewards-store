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
import { useState } from "react";
import { makeStyles, Drawer } from "@material-ui/core";

import DrawerMenuItems from "../UI/menuDrawer";
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
    const [auth, setAuth] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [openDrawer, setOpenDrawer] = useState(false);
    const toggleDrawer = (open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        console.log("EL DRAWEEER");
        setOpenDrawer(open);
        console.log(openDrawer);
    };

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <HeaderContainer>
            <LogoImage src={kite} />
            <div>
                <UserInfo />
                <AppBar position='fixed'>
                    <Toolbar>
                        <IconButton
                            edge='start'
                            color='inherit'
                            aria-label='menu'
                            className={classes.menuButton}
                            onClick={toggleDrawer(true)}>
                            <MenuIcon />
                            <Drawer
                                anchor={"left"}
                                open={openDrawer}
                                onClose={toggleDrawer(false)}>
                                <DrawerMenuItems toggleDrawer={toggleDrawer} />
                            </Drawer>
                        </IconButton>

                        <Typography variant='h6' className={classes.title}>
                            Reward Store
                        </Typography>
                        {auth && (
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
                                    <MenuItem onClick={handleClose}>
                                        Profile
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        My account
                                    </MenuItem>
                                </Menu>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>
                <Banner />
            </div>
        </HeaderContainer>
    );
};

export default Header;
