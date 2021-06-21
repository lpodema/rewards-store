import { Grid } from "@material-ui/core";
import { useContext } from "react";
import { Context } from "../../store/store";
import Product from "./product";

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
