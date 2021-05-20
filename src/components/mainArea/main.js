import { useContext, useEffect } from "react";
import styled from "styled-components";
import { getProducts } from "../../services/services";
import { Context } from "../../store/store";
import Footer from "../footer";
import ProductsContainer from "./productsContainer";
import { ChangePageButton, SortButton } from "../UI/buttons";
import { VerticalLine } from "../UI/lines";
import { ProductQuantity } from "../UI/other";

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

const SortBy = styled.div`
    font-family: SourceSansPro-Regular;
    font-size: 1.2rem;
    color: #a3a3a3;
    letter-spacing: -0.15px;
    line-height: 2rem;
    text-align: left;
    /* margin: 0 2rem; */
    white-space: nowrap;
`;
const options = ["Most recent", "Lowest price", "Highest price"];

const Main = () => {
    const [state, dispatch] = useContext(Context);

    useEffect(() => {
        const fetchData = async () => {
            const products = await getProducts();
            dispatch({ type: "SET_ARTICLES", payload: products });
            dispatch({ type: "PAGINATE_PRODUCTS", payload: null });
        };
        fetchData();
    }, []);

    const onClickHandler = (value) => {
        dispatch({ type: "CHANGE_PAGE", payload: value });
        dispatch({ type: "PAGINATE_PRODUCTS", payload: null });
    };
    const quantities = [state.page * state.productsToShow.length, 32];

    return (
        <MainStyled>
            <SortContainer>
                <ProductQuantity quantities={quantities} isForFooter={false} />
                <VerticalLine />
                <SortOptions>
                    <SortBy>Sort by: </SortBy>
                    {options.map((option, index) => {
                        return <SortButton key={index}>{option}</SortButton>;
                    })}
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
