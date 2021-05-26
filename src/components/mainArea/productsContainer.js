import { useContext } from "react";
import styled from "styled-components";
import { Context } from "../../store/store";
import Product from "./product";

const ProductsDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    /* background-color: red; */
    /* background-color: #f9f9f9; */
    padding: 3rem;
`;
const ProductsContainer = () => {
    const { productsToShow } = useContext(Context)[0];

    return (
        <ProductsDiv>
            {productsToShow
                ? productsToShow.map((product) => (
                      <Product product={product} key={product._id} />
                  ))
                : null}
        </ProductsDiv>
    );
};

export default ProductsContainer;
