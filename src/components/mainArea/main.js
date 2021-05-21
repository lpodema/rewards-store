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

const SortOptions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: space-between;
    width: 70%;
`;
/*
const SortBy = styled.div`
    font-family: SourceSansPro-Regular;
    font-size: 1.2rem;
    color: #a3a3a3;
    letter-spacing: -0.15px;
    line-height: 2rem;
    text-align: left;
    white-space: nowrap;
`;
*/
//const options = ["Most recent", "Lowest price", "Highest price"];

const Main = () => {
    const [state, dispatch] = useContext(Context);
    const [range, setRange] = useState([50, 2500]);
    const [filter, setFilter] = useState([]);
    // console.log(range);

    useEffect(() => {
        const fetchData = async () => {
            const products = await getProducts();
            dispatch({ type: "SET_ARTICLES", payload: products });
            dispatch({ type: "PAGINATE_PRODUCTS", payload: products });
        };
        fetchData();
    }, []);

    const sorted = [
        ...state.products.map((product) => product.cost).sort((a, b) => a - b),
    ];
    // console.log(sorted);
    const minMax = [sorted[0], sorted[sorted.length - 1]];

    const onClickHandler = (value) => {
        dispatch({ type: "CHANGE_PAGE", payload: value });
        console.log(state.range, minMax);
        if (
            state.range[0] === minMax[0] &&
            state.range[1] === minMax[1] &&
            state.filters.length === 0
        ) {
            console.log("if 81");
            dispatch({ type: "PAGINATE_PRODUCTS", payload: state.products });
        } else {
            console.log("else 83");
            dispatch({
                type: "PAGINATE_PRODUCTS",
                payload: state.productsToShow,
            });
        }
    };
    const quantities = [state.page * state.productsToShow.length, 32];

    const categories = [
        ...new Set(state.products.map((product) => product.category)),
    ];

    // console.log(minMax);
    // const onChangeHandlerSelect = (e) => {
    //     let value = Array.from(
    //         e.target.selectedOptions,
    //         (option) => option.value
    //     );
    //     setFilter(value);
    //     console.log(filter);
    // };

    const onChangeHandlerRange = (event, value) => {
        // console.log(value);
        // setRange(value);
        dispatch({
            type: "APPLY_FILTER_COST",
            payload: state.products,
            minMax: value,
        });
        dispatch({
            type: "PAGINATE_PRODUCTS",
            payload: state.productsFiltered,
        });
        setRange(value);
    };

    const handleChangeMultiple = async (event) => {
        const { options } = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        setFilter(value);
    };

    return (
        <MainStyled>
            <SortContainer>
                <ProductQuantity quantities={quantities} isForFooter={false} />
                <VerticalLine />
                <SortOptions>
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
                </SortOptions>
                <ChangePageButton
                    direction={"<"}
                    onClickHandler={() => onClickHandler(-1)}
                />
                <ChangePageButton
                    direction={">"}
                    onClickHandler={() => onClickHandler(1)}
                />
            </SortContainer>
            <ProductsContainer />
            <Footer />
        </MainStyled>
    );
};

export default Main;
