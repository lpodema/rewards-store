import Header from "./components/header";
import Main from "./components/main";
import styled from "styled-components";

const AppStyled = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`;

function App() {
    return (
        <AppStyled>
            <Header /> <Main />
        </AppStyled>
    );
}

export default App;
