import styled from "styled-components";
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
const ProductQuantityDisplay = styled.div`
    font-family: SourceSansPro-Regular;
    /* padding: 0; */
    font-size: 1.2rem;
    color: #616161;
    letter-spacing: -0.15px;
    line-height: 1rem;
    text-align: left;
    width: 90%;
`;

const Footer = () => {
    const quantities = "16 of 32 products";
    return (
        <div>
            <FooterStyled>
                <ProductQuantity quantities={quantities} isForFooter={true} />
                <ChangePageButton />
            </FooterStyled>
            <Line />
        </div>
    );
};

export default Footer;
