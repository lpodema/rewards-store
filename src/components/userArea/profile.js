import React, { useContext, useEffect, useRef, useState } from "react";
import {
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
} from "@material-ui/core";
import { Card, Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import coin from "../../assets/icons/coin.svg";
import AddPointsModal from "./addPointsModal";

const Profile = (props) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const [addPointsModal, setAddPointsModal] = useState(false);
    const handleModal = (value) => {
        setAddPointsModal(value);
    };

    return (
        <Grid container direction='row' alignItems='center' justify='center'>
            <Grid item>
                <Grid
                    direction='column'
                    container
                    alignItems='center'
                    justify='center'>
                    <Grid item>
                        <Card>
                            <CardActionArea>
                                <Grid
                                    direction='column'
                                    container
                                    alignItems='center'
                                    justify='center'>
                                    <Grid item>
                                        <AccountCircleIcon
                                            style={{
                                                fontSize: 250,
                                                textAlign: "center",
                                                verticalAlign: "middle",
                                                paddingLeft: "3rem",
                                                paddingRight: "3rem",
                                            }}
                                            color='primary'
                                        />
                                    </Grid>
                                    <Grid item>
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                variant='h4'
                                                component='h3'
                                                align='center'>
                                                {user.name}
                                            </Typography>
                                            <Grid
                                                container
                                                justify='space-between'>
                                                <Typography
                                                    variant='h5'
                                                    color='textSecondary'
                                                    component='h6'
                                                    align='center'>
                                                    <img
                                                        src={coin}
                                                        alt={coin}></img>
                                                </Typography>
                                                <Typography
                                                    variant='h5'
                                                    color='textSecondary'
                                                    component='h6'
                                                    align='center'>
                                                    {user.points}
                                                </Typography>
                                            </Grid>
                                        </CardContent>
                                    </Grid>
                                </Grid>
                            </CardActionArea>
                            <Grid
                                container
                                justify='space-evenly'
                                alignItems='center'>
                                <CardActions>
                                    <Grid item>
                                        <Button
                                            size='small'
                                            variant='contained'
                                            color='primary'
                                            disabled={true}>
                                            View Personal Data
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            variant='contained'
                                            size='small'
                                            color='primary'
                                            onClick={() => handleModal(true)}>
                                            Add more Points
                                        </Button>
                                    </Grid>
                                </CardActions>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
            <AddPointsModal
                onCloseHandler={handleModal}
                modal={addPointsModal}
            />
        </Grid>
    );
};

export default Profile;
