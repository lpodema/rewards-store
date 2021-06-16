import { useContext } from "react";
import styled from "styled-components";
import { Context } from "../store/store";
import { ChangePageButton } from "./UI/buttons";
import { Line } from "./UI/lines";
import { ProductQuantity } from "./UI/other";
import { CHANGE_PAGE } from "../utils/constants";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import { Grid, IconButton, Typography } from "@material-ui/core";

const FooterStyled = styled.div`
    display: flex;
    /* background-color: purple; */
    /* background-color: #f9f9f9; */
    width: 90%;
    line-height: 1rem;
    flex-direction: row;
    align-items: center;
    align-content: space-between;
    margin: auto;
    padding: 0 0 1rem 0;
`;

const Footer = () => {
    const [state, dispatch] = useContext(Context);
    const onClickHandler = (value) => {
        dispatch({ type: CHANGE_PAGE, payload: value, page: state.page });
    };
    const quantities = [state.productsToShow.length, state.products.length];
    return (
        <Grid container alignItems='center' justify='space-between'>
            {/* <div> */}
            {/* <FooterStyled> */}
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
                        {/* <ProductQuantity
                                quantities={quantities}
                                isForFooter={false}
                            /> */}
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
            {/* </FooterStyled> */}
            <Line style={{ margin: "1rem", width: "100%" }} />
            {/* </div> */}
        </Grid>
    );
};

export default Footer;
