import { Grid } from "@material-ui/core";
import { useContext } from "react";
import styled from "styled-components";
import { Context } from "../../store/store";
import Product from "./product";

// const ProductsDiv = styled.div`
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr 1fr;
//     grid-template-rows: 1fr 1fr 1fr 1fr;
//     /* background-color: red; */
//     /* background-color: #f9f9f9; */
//     padding: 3rem;
// `;




const ProductsContainer = () => {
    const { productsToShow } = useContext(Context)[0];

    return (
        <Grid container alignItems='center' justify='space-evenly' spacing={3} >
            {productsToShow
                ? productsToShow.map((product) => (
                      <Grid item key={product._id} lg={3}>
                          <Product product={product} />
                      </Grid>
                  ))
                : null}
        </Grid>
    );
};

export default ProductsContainer;
