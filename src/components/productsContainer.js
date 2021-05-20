import styled from "styled-components";
import Product from "./product";

const ProductsDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    /* background-color: red; */
    background-color: #f9f9f9;
`;
const ProductsContainer = () => {
    return (
        <ProductsDiv>
            <Product />
        </ProductsDiv>
    );
};

export default ProductsContainer;
