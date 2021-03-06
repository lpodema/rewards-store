import { useContext } from "react";
import { Context } from "../store/store";
import { CHANGE_PAGE } from "../utils/constants";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import { Divider, Grid, IconButton, Typography } from "@material-ui/core";

const Footer = () => {
    const [state, dispatch] = useContext(Context);
    const onClickHandler = (value) => {
        dispatch({ type: CHANGE_PAGE, payload: value, page: state.page });
    };
    const quantities = [state.productsToShow.length, state.products.length];
    return (
        <>
            <Grid container alignItems='center' justify='space-between'>
                <Grid
                    container
                    direction='row'
                    alignItems='center'
                    justify='space-between'>
                    <Grid item>
                        <Typography
                            variant='subtitle1'
                            noWrap={false}
                            align='center'
                            color='textPrimary'
                            style={{ marginLeft: "1rem" }}>
                            {quantities[0]} of {quantities[1]} products
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Grid container alignItems='center' justify='flex-end'>
                            <Grid item>
                                <IconButton
                                    color='primary'
                                    aria-label='add to shopping cart'
                                    onClick={() => onClickHandler(-1)}
                                    disabled={
                                        state.page === 1 ||
                                        state.productsFiltered.length < 16
                                    }>
                                    <NavigateBeforeIcon />
                                </IconButton>
                                <IconButton
                                    color='primary'
                                    aria-label='add to shopping cart'
                                    onClick={() => onClickHandler(1)}
                                    disabled={
                                        state.page * 16 >=
                                        state.productsFiltered.length
                                            ? true
                                            : false
                                    }>
                                    <NavigateNextIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Divider
                variant='fullWidth'
                orientation='horizontal'
                style={{ color: "000", margin: "1rem" }}
            />
        </>
    );
};

export default Footer;
