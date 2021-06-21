import React from "react";
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    Paper,
    Typography,
} from "@material-ui/core";
import { Line } from "../UI/lines";

const Product = (props) => {
    const { img, name, category, createDate } = props.product;

    //los enlaces de la api no funcionan para obtener las imaǵenes correctamente
    const getImage = (url) => {
        return url.replace(
            "https://aerolab-challenge.now.sh",
            "https://coding-challenge-api.aerolab.co"
        );
    };
    const getDate = (dateString) => {
        let date = dateString.replace("T", " ").replace("Z", "");
        date = date.slice(0, date.length - 4).split(" ");
        let buf = date[0].split("-");
        buf = buf[2] + "/" + buf[1] + "/" + buf[0];
        // date = date[1]+', '+date[0]
        return buf + ", " + date[1];
    };
    return (
        <Paper elevation={3}>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component='img'
                        alt={name + category}
                        height='100%'
                        image={getImage(img.url)}
                        title={name + category}
                    />
                    <CardContent>
                        <Grid container direction='column' alignItems='stretch'>
                            <Grid item>
                                <Grid
                                    container
                                    direction='row'
                                    justify='space-between'
                                    alignItems='center'>
                                    <Grid
                                        container
                                        direction='column'
                                        alignItems='center'>
                                        <Line />
                                        <Typography
                                            variant='subtitle2'
                                            style={{ marginTop: "0.8rem" }}
                                            color='textSecondary'>
                                            {category}
                                            {/* Laptops */}
                                        </Typography>
                                        <Typography variant='subtitle1'>
                                            {/* Macbook Pro */}
                                            {name}
                                        </Typography>
                                        <Typography
                                            variant='body2'
                                            align='center'>
                                            Redeemed at: <br />{" "}
                                            {getDate(createDate)}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Paper>
    );
};

export default Product;
