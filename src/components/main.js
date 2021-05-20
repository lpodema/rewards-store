import styled from "styled-components";
import Footer from "./footer";
import ProductsContainer from "./productsContainer";

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
export const ProductQuantityDisplay = styled.div`
    font-family: SourceSansPro-Regular;
    /* padding: 0; */
    font-size: 1.2rem;
    color: #616161;
    letter-spacing: -0.15px;
    line-height: 1rem;
    text-align: left;
    width: 25%;
`;
const SortOptions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: space-between;
    width: 65%;
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

export const NextPageButton = styled.button`
    border: 1px solid #d9d9d9;
    width: 3rem;
    height: 3rem;
    /* margin: 0 8rem; */
    border-radius: 100%;
    /* flex-grow: 1; */
    /* align-self: flex-end; */
`;

export const ButtonContainer = styled.div`
    width: 10%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;
const SortButton = styled.button`
    background: #ededed;
    border-radius: 100px;
    /* width: 33%; */
    font-size: 1.2rem;
    height: 100%;
    line-height: 2rem;
    margin: 0 1rem;
    white-space: nowrap;
`;

const Main = () => {
    return (
        <MainStyled>
            <SortContainer>
                <ProductQuantityDisplay>
                    16 of 32 products
                </ProductQuantityDisplay>
                <SortOptions>
                    <SortBy>Sort by: </SortBy>
                    {options.map((option, index) => {
                        return <SortButton key={index}>{option}</SortButton>;
                    })}
                </SortOptions>
                <ButtonContainer>
                    <NextPageButton />
                </ButtonContainer>
            </SortContainer>
            <ProductsContainer />
            <Footer />
        </MainStyled>
    );
};

export default Main;
