import React, { useContext, useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { getHistory } from "../../services/services";
import { Context } from "../../store/store";
import { UPDATE_HISTORY } from "../../utils/constants";
import Product from "../UI/product";
import Pagination from "@material-ui/lab/Pagination";
import LoadingModal from "../UI/loadingModal";

const RedeemHistory = (props) => {
    const [state, dispatch] = useContext(Context);
    const [page, setPage] = React.useState(1);
    const [loadingModal, setLoadingModal] = useState(false);
    const [productHistory, setProductHistory] = useState(null);
    const handleChange = (event, value) => {
        setPage(value);
        setProductHistory(state.history.slice((page - 1) * 20, page * 20));
    };

    useEffect(() => {
        async function fetchData() {
            setLoadingModal(true);
            const history = await getHistory();
            await dispatch({ type: UPDATE_HISTORY, payload: history });
            setProductHistory(state.history.slice(0 * 20, 1 * 20));
            setLoadingModal(false);
        }
        fetchData();
    }, []);

    return (
        <Grid
            container
            direction='column'
            alignItems='stretch'
            justify='center'>
            <Grid item>Redeem history</Grid>
            <Grid item>
                <Grid container justify='center'>
                    {
                        productHistory
                            ? productHistory.map((product, index) => (
                                  <Grid
                                      item
                                      key={index}
                                      lg={2}
                                      style={{ margin: "1rem" }}>
                                      <Product product={product} />
                                  </Grid>
                              ))
                            : null
                        // ) : (
                        //     <Grid item>
                        //         <Product />
                        //     </Grid>
                    }
                    <LoadingModal
                        onClose={() => setLoadingModal(false)}
                        val={true}
                        text1='Getting history...'
                        text2=''
                        open={loadingModal}
                    />
                </Grid>
            </Grid>
            <Grid item>
                <Grid
                    container
                    justify='space-evenly'
                    alignContent='center'
                    direction='column'
                    alignItems='stretch'>
                    <Pagination
                        count={Math.ceil(state.history.length / 20)}
                        color='primary'
                        showFirstButton
                        showLastButton
                        page={page}
                        onChange={handleChange}
                    />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default RedeemHistory;
