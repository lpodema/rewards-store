import Header from "./components/headerArea/header";
import Main from "./components/mainArea/main";
import styled from "styled-components";
import Store from "./store/store";
import theme from "./components/UI/theme";
import { ThemeProvider } from "@material-ui/core";
import Routing from "./components/mainArea/routing";
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
    // getProducts();
    // addPoints(5000);
    // getUserInfo();
    // getHistory();
    // redeemProduct("5a0b36ac734d1d08bf70856c");
    return (
        <Store>
            <ThemeProvider theme={theme}>
                <AppStyled>
                    <Header /> <Routing />
                </AppStyled>
            </ThemeProvider>
        </Store>
    );
}

export default App;
