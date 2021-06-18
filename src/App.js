import Header from "./components/headerArea/header";
import Main from "./components/mainArea/main";
import styled from "styled-components";

import theme from "./components/UI/theme";
import { ThemeProvider } from "@material-ui/core";
import Routing from "./components/mainArea/routing";
import { Context } from "./store/store";
import { useContext, useEffect } from "react";
import { LOG_USER } from "./utils/constants";
// import {
//     getProducts,
//     addPoints,
//     getUserInfo,
//     getHistory,
//     redeemProduct,
// } from "./services/services";

const AppStyled = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`;

function App() {
    const [state, dispatch] = useContext(Context);

    useEffect(() => {
        async function loggingIn() {
            const user = await localStorage.getItem("user");
            if (user) {
               await dispatch({ type: LOG_USER, payload: await JSON.parse(user) });
            }
        }
        loggingIn();
        return () => {};
    }, [dispatch]);
    // getProducts();
    // addPoints(5000);
    // getUserInfo();
    // getHistory();
    // redeemProduct("5a0b36ac734d1d08bf70856c");
    return (
        <ThemeProvider theme={theme}>
            <AppStyled>
                <Header /> <Routing />
            </AppStyled>
        </ThemeProvider>
    );
}

export default App;
