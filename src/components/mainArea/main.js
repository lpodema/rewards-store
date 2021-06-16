import { useContext, useEffect, useState } from "react";
import { getProducts, redeemProduct } from "../../services/services";
import { Context } from "../../store/store";
import Footer from "../footer";
import ProductsContainer from "./productsContainer";
import { Line, VerticalLine } from "../UI/lines";
import {
    Chip,
    IconButton,
    Input,
    MenuItem,
    Select,
    Slider,
    Container,
    FormControl,
    Grid,
    Typography,
    FormHelperText,
} from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import {
    APPLY_FILTERS,
    SET_PRODUCTS,
    PAGINATE_PRODUCTS,
    CHANGE_PAGE,
} from "../../utils/constants";

const Main = () => {
    const [state, dispatch] = useContext(Context);
    const [range, setRange] = useState([50, 2500]);
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const products = await getProducts();
            dispatch({ type: SET_PRODUCTS, payload: products });
        };
        fetchData();
    }, [dispatch]);

    useEffect(() => {
        dispatch({
            type: APPLY_FILTERS,
            payload: state.products,
            minMax: range,
            categories: filter,
        });
    }, [range, filter, state.products, dispatch]);

    useEffect(() => {
        dispatch({
            type: PAGINATE_PRODUCTS,
            payload: state.productsFiltered,
            page: state.page,
        });
        if (state.page) {
            dispatch({ type: CHANGE_PAGE, payload: 0, page: 1 });
        }
    }, [state.productsFiltered, state.page, dispatch]);

    const onClickHandler = (value) => {
        dispatch({ type: CHANGE_PAGE, payload: value, page: state.page });
    };

    const onChangeHandlerRange = (event, value) => {
        setRange(value);
    };

    const handleChangeMultiple = async (event) => {
        setFilter(event.target.value);
    };

    const sorted = [
        ...state.products.map((product) => product.cost).sort((a, b) => a - b),
    ];
    const minMax = [sorted[0], sorted[sorted.length - 1]];
    const quantities = [state.productsToShow.length, state.products.length];

    const categories = [
        ...new Set(state.products.map((product) => product.category)),
    ];

    return (
        <Container maxWidth='lg' disableGutters={true}>
            {/* <SortContainer> */}
            <Grid
                container
                direction='column'
                alignItems='stretch'
                justify='center'>
                <Grid item>
                    <Grid container alignItems='center' justify='space-around'>
                        <Grid item lg={3}>
                            <Grid
                                container
                                alignItems='flex-end'
                                justify='flex-start'>
                                <Grid item lg={6}>
                                    <Typography
                                        variant='subtitle1'
                                        noWrap={false}
                                        align='center'
                                        color='textPrimary'>
                                        {quantities[0]} of {quantities[1]}{" "}
                                        products
                                        {/* <ProductQuantity
                                quantities={quantities}
                                isForFooter={false}
                            /> */}
                                    </Typography>
                                </Grid>
                                <Grid item lg={1}>
                                    <VerticalLine />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item lg={8}>
                            <Grid
                                container
                                alignItems='center'
                                justify='space-around'>
                                <Grid item lg={5}>
                                    <Typography
                                        variant='subtitle1'
                                        noWrap={false}
                                        align='center'
                                        color='textPrimary'
                                        style={{ paddingTop: "0.5rem" }}>
                                        Price range
                                    </Typography>
                                    <Slider
                                        value={range}
                                        onChange={onChangeHandlerRange}
                                        valueLabelDisplay='auto'
                                        aria-labelledby='range-slider'
                                        max={minMax[1]}
                                        min={minMax[0]}
                                        step={50}
                                    />
                                </Grid>
                                <Grid item lg={5}>
                                    <FormControl
                                        style={{
                                            width: "100%",
                                            height: "2rem",
                                        }}>
                                        <Select
                                            labelId='demo-mutiple-chip-label'
                                            id='demo-mutiple-chip'
                                            multiple
                                            value={filter}
                                            onChange={handleChangeMultiple}
                                            input={<Input />}
                                            renderValue={(selected) => (
                                                <div /*className={classes.chips}*/
                                                >
                                                    {selected.map((value) => (
                                                        <Chip
                                                            key={value}
                                                            label={value}
                                                            /*className={classes.chip}*/
                                                        />
                                                    ))}
                                                </div>
                                            )} /*MenuProps={MenuProps}*/
                                        >
                                            {categories.map((name) => (
                                                <MenuItem
                                                    key={name}
                                                    value={name}
                                                    // style={getStyles(name, personName, theme)}
                                                >
                                                    {name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                        <FormHelperText>
                                            Categories
                                        </FormHelperText>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            {/* </FilterOptions> */}
                        </Grid>
                        <Grid item lg={1}>
                            <Grid
                                container
                                alignItems='center'
                                justify='flex-end'>
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
                <Grid item>
                    <Line />
                </Grid>
            </Grid>
            {/* </SortContainer> */}
            <ProductsContainer />
            <Footer />
        </Container>
    );
};

export default Main;
