import { useContext, useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { getHistory } from "../../services/services";
import { Context } from "../../store/store";
import { LOADING, UPDATE_HISTORY } from "../../utils/constants";
import Product from "../UI/product";
import Pagination from "@material-ui/lab/Pagination";
import { Typography } from "@material-ui/core";

const RedeemHistory = (props) => {
    const dispatch = useContext(Context)[1];
    const [page, setPage] = useState(1);
    const [productHistory, setProductHistory] = useState(null);
    const history = JSON.parse(localStorage.getItem("history"));

    const handleChange = (event, value) => {
        setPage(value);
        setProductHistory(history.slice((page - 1) * 20, page * 20));
    };

    useEffect(() => {
        let isSubscribed = true;
        async function fetchData() {
            dispatch({ type: LOADING, payload: true });
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
                    setProductHistory(history.slice(0 * 20, 1 * 20));
                }
            }
            dispatch({ type: LOADING, payload: false });
        }
        fetchData();
        return () => (isSubscribed = false);
    }, [dispatch]);

    return (
        <Grid
            container
            direction='column'
            alignItems='stretch'
            justify='center'>
            <Grid item>
                <Typography variant='h4' align='center'>
                    Redeemed products
                </Typography>
            </Grid>
            <Grid item>
                <Grid container justify='center'>
                    {productHistory
                        ? productHistory.map((product, index) => (
                              <Grid
                                  item
                                  key={index}
                                  lg={2}
                                  style={{ margin: "1rem" }}>
                                  <Product product={product} />
                              </Grid>
                          ))
                        : null}
                </Grid>
            </Grid>
            <Grid item>
                {history ? (
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
                ) : null}
            </Grid>
        </Grid>
    );
};

export default RedeemHistory;
