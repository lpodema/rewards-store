import { useContext } from "react";
import styled from "styled-components";
import { Context } from "../store/store";
import { ChangePageButton } from "./UI/buttons";
import { Line } from "./UI/lines";
import { ProductQuantity } from "./UI/other";

const FooterStyled = styled.div`
    display: flex;
    /* background-color: purple; */
    /* background-color: #f9f9f9; */
    width: 90%;
    line-height: 1rem;
    flex-direction: row;
    align-items: center;
    align-content: space-between;
    margin: auto;
    padding: 0 0 1rem 0;
`;

const Footer = () => {
    const [state, dispatch] = useContext(Context);
    const onClickHandler = (value) => {
        dispatch({ type: "CHANGE_PAGE", payload: value });
        dispatch({ type: "PAGINATE_PRODUCTS", payload: null });
    };
    const quantities = [state.page * state.productsToShow.length, 32];
    return (
        <div>
            <FooterStyled>
                <ProductQuantity quantities={quantities} isForFooter={true} />
                <ChangePageButton
                    direction={"<"}
                    onClickHandler={() => onClickHandler(-1)}
                />
                <ChangePageButton
                    direction={">"}
                    onClickHandler={() => onClickHandler(1)}
                />
            </FooterStyled>
            <Line />
        </div>
    );
};

export default Footer;
