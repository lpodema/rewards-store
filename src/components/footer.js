import styled from "styled-components";

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
const ButtonContainer = styled.div`
    width: 10%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const NextPageButton = styled.button`
    border: 1px solid #d9d9d9;
    width: 3rem;
    height: 3rem;
    /* margin: 0 8rem; */
    border-radius: 100%;
    /* flex-grow: 1; */
    /* align-self: flex-end; */
`;

const Line = styled.div`
    background: #d9d9d9;
    width: 90%;
    height: 1px;
    margin: auto;
`;

const Footer = () => {
    return (
        <div>
            <FooterStyled>
                <ProductQuantityDisplay>
                    16 of 32 products
                </ProductQuantityDisplay>
                <ButtonContainer>
                    <NextPageButton />
                </ButtonContainer>
            </FooterStyled>
            <Line />
        </div>
    );
};

export default Footer;
