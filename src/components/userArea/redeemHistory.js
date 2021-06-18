import React, { useContext, useEffect, useRef, useState } from "react";
import { Grid } from "@material-ui/core";
import { getHistory } from "../../services/services";
import { Context } from "../../store/store";
import { UPDATE_HISTORY } from "../../utils/constants";
import Product from "../UI/product";
import Pagination from "@material-ui/lab/Pagination";
import LoadingModal from "../UI/loadingModal";

const RedeemHistory = (props) => {
    // const mountedRef = useRef(true);
    const [state, dispatch] = useContext(Context);
    const [page, setPage] = React.useState(1);
    const [loadingModal, setLoadingModal] = useState(false);
    const [productHistory, setProductHistory] = useState(null);
    const history = JSON.parse(localStorage.getItem("history"));
    const handleChange = (event, value) => {
        setPage(value);
        setProductHistory(history.slice((page - 1) * 20, page * 20));
    };

    useEffect(() => {
        let isSubscribed = true;
        async function fetchData() {
            setLoadingModal(true);
            const prevHistory = await JSON.parse(
                localStorage.getItem("history")
            );
            if (prevHistory) {
                if (isSubscribed) {
                    setProductHistory(prevHistory.slice(0 * 20, 1 * 20));
                }
            } else {
                const history = await getHistory();

                await dispatch({ type: UPDATE_HISTORY, payload: history });
                if (isSubscribed) {
                    setProductHistory(prevHistory.slice(0 * 20, 1 * 20));
                }
            }
            setLoadingModal(false);
        }
        fetchData();
        return () => (isSubscribed = false);
    }, [dispatch]);

    // useEffect(() => {
    //     return () => {
    //         mountedRef.current = false;
    //     };
    // }, []);

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
                        count={Math.ceil(history.length / 20)}
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
