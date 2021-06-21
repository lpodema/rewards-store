import Header from "./components/headerArea/header";
import styled from "styled-components";

import theme from "./components/UI/theme";
import { ThemeProvider } from "@material-ui/core";
import Routing from "./components/mainArea/routing";
import { Context } from "./store/store";
import { useContext, useEffect } from "react";
import { LOADING, LOG_USER } from "./utils/constants";
import LoadingModal from "./components/UI/loadingModal";

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
                dispatch({ type: LOADING, payload: true });
                await dispatch({
                    type: LOG_USER,
                    payload: await JSON.parse(user),
                });
                dispatch({ type: LOADING, payload: false });
            }
        }
        loggingIn();
        return () => {};
    }, [dispatch]);
    return (
        <ThemeProvider theme={theme}>
            <Header /> <Routing />
            <LoadingModal
                open={state.loading}
                onClonse={() => dispatch({ TYPE: LOADING, payload: false })}
                val={true}
                text1='Loading...'
            />
        </ThemeProvider>
    );
}

export default App;
