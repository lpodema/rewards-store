import Header from "./components/header";
import Main from "./components/main";
import styled from "styled-components";
import Store from "./store/store";
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
            <AppStyled>
                <Header /> <Main />
            </AppStyled>
        </Store>
    );
}

export default App;
