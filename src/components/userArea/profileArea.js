import { useState } from "react";
import { AppBar, Box, Grid, makeStyles } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Profile from "./profile";
import RedeemHistory from "./redeemHistory";

const useTabStyles = makeStyles({
    root: {
        justifyContent: "space-around",
    },
});

const TabPanel = (props) => {
    const { value, index, children, ...other } = props;
    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}>
            {value === index && <Box p={3}>{children}</Box>}
        </div>
    );
};

const ProfileArea = () => {
    const classes = useTabStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Grid
            container
            style={{ marginTop: 80 }}
            justify='center'
            direction='column'>
            <Grid item>
                <AppBar position='static' color='default'>
                    <Tabs
                        classes={{
                            root: classes.root,
                        }}
                        value={value}
                        onChange={handleChange}
                        indicatorColor='primary'
                        textColor='primary'
                        centered>
                        <Tab label='Profile' style={{ width: "100%" }} />
                        <Tab label='Redeem History' style={{ width: "100%" }} />
                    </Tabs>
                </AppBar>
            </Grid>
            <Grid item>
                <TabPanel value={value} index={0}>
                    <Profile />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <RedeemHistory />
                </TabPanel>
            </Grid>
        </Grid>
    );
};

export default ProfileArea;
