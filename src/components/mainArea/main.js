import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { getProducts } from "../../services/services";
import { Context } from "../../store/store";
import Footer from "../footer";
import ProductsContainer from "./productsContainer";
import { ChangePageButton, SortButton } from "../UI/buttons";
import { VerticalLine } from "../UI/lines";
import { ProductQuantity } from "../UI/other";
import { RangeSlider, SelectComponent } from "../UI/filters";

const MainStyled = styled.div`
    background-color: #f9f9f9;
    /* background-color: green; */
    /* z-index: 100; */
    padding: 3rem;
`;

const SortContainer = styled.div`
    display: flex;
    /* background-color: purple; */
    /* background-color: #f9f9f9; */
    width: 90%;
    line-height: 1rem;
    flex-direction: row;
    align-items: center;
    align-content: space-between;
    margin: auto;
`;

const FilterOptions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: space-between;
    width: 70%;
`;

const Main = () => {
    const [state, dispatch] = useContext(Context);
    const [range, setRange] = useState([50, 2500]);
    const [filter, setFilter] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const products = await getProducts();
            dispatch({ type: "SET_ARTICLES", payload: products });
        };
        fetchData();
    }, [dispatch]);

    useEffect(() => {
        dispatch({
            type: "APPLY_FILTERS",
            payload: state.products,
            minMax: range,
            categories: filter,
        });
    }, [range, filter]);

    useEffect(() => {
        dispatch({
            type: "PAGINATE_PRODUCTS",
            payload: state.productsFiltered,
            page: state.page,
        });
        if (state.page) {
            dispatch({ type: "CHANGE_PAGE", payload: 0, page: 1 });
        }
    }, [state.productsFiltered, state.page]);

    const sorted = [
        ...state.products.map((product) => product.cost).sort((a, b) => a - b),
    ];
    const minMax = [sorted[0], sorted[sorted.length - 1]];

    const onClickHandler = (value) => {
        dispatch({ type: "CHANGE_PAGE", payload: value, page: state.page });
    };
    const quantities = [state.productsToShow.length, 32];

    const categories = [
        ...new Set(state.products.map((product) => product.category)),
    ];

    const onChangeHandlerRange = (event, value) => {
        setRange(value);
    };

    const handleChangeMultiple = async (event) => {
        const { options } = event.target;
        const value = [];
        for (const opt of options) {
            if (opt.selected) {
                value.push(opt.value);
            }
        }
        setFilter(value);
    };

    return (
        <MainStyled>
            <SortContainer>
                <ProductQuantity quantities={quantities} isForFooter={false} />
                <VerticalLine />
                <FilterOptions>
                    {/* <SortBy>Sort by: </SortBy>
                    {options.map((option, index) => {
                        return <SortButton key={index}>{option}</SortButton>;
                    })} */}
                    <RangeSlider
                        val={range}
                        minMax={[...minMax]}
                        // ariaText={"Filtro de puntos"}
                        // tTip={"puntos"}
                        onChange={onChangeHandlerRange}
                    />
                    <SelectComponent
                        name={"Categories"}
                        options={categories}
                        val={filter}
                        onChangeHandler={handleChangeMultiple}
                    />
                </FilterOptions>
                <ChangePageButton
                    direction={"<"}
                    onClickHandler={() => onClickHandler(-1)}
                    disabled={
                        state.page === 1 || state.productsFiltered.length < 16
                    }
                />
                <ChangePageButton
                    direction={">"}
                    onClickHandler={() => onClickHandler(1)}
                    disabled={
                        state.page * 16 >= state.productsFiltered.length
                            ? true
                            : false
                    }
                />
            </SortContainer>
            <ProductsContainer />
            <Footer />
        </MainStyled>
    );
};

export default Main;
