import styled from "styled-components";
import iphone8 from "../assets/product-pics/iPhone8-x1.png";
import bluebag from "../assets/icons/buy-blue.svg";
import whitebag from "../assets/icons/buy-white.svg";
import "./special.css";
import coin from "../assets/icons/coin.svg";
import { useState } from "react";

const ProductDiv = styled.div`
    display: flex;
    flex-direction: column;
    /* grid-template-columns: repeat(4, 1fr); */
    /* grid-template-rows: repeat(4, 1fr); */
    background-color: #ffffff;
    /* align-items: center; */
    position: relative;
    margin: 1rem;
    box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.1);
`;

const Category = styled.div`
    font-family: SourceSansPro-Regular;
    font-size: 1rem;
    color: #a3a3a3;
    letter-spacing: -0.04px;
    text-align: left;
    margin: 0 1rem;
`;

const ArticleTitle = styled.div`
    font-family: SourceSansPro-Regular;
    font-size: 1.2rem;
    color: #616161;
    letter-spacing: -0.04px;
    text-align: left;
    margin: 0 1rem;
`;

const Line = styled.div`
    background: #d9d9d9;
    width: 90%;
    height: 1px;
    margin: auto;
`;

const ShoppingBagStyles = styled.div`
    /* background: #ffffff; */
    background: ${(props) => (props.hover ? whitebag : bluebag)};
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
    position: absolute;
    top: 1rem;
    right: 3rem;
    z-index: 90;
`;

const SelectedProductDiv = styled.div`
    background-color: rgba(10, 212, 250, ${(props) => props.opac});
    z-index: 1;
    /* align-self: stretch; */
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    text-align: center;
`;

const ProductImage = styled.img`
    z-index: 1;
    text-align: center;
    /* position: relative; */
    /* top: 0; */
    /* right: 0; */
    height: 100%;
    width: 100%;
`;

const RedeemButton = styled.button`
    position: absolute;
    background: #ffffff;
    margin: 1rem;
    top: 60%;
    right: 0;
    width: 90%;
    font-family: SourceSansPro-Regular;
    font-size: 1rem;
    color: #616161;
    letter-spacing: -0.04px;
    text-align: center;
    height: 2rem;
    border-radius: 3%;
`;

const ValueContainer = styled.div`
    letter-spacing: -0.08px;
    text-align: center;
    position: absolute;
    margin: 0 auto;
    top: 35%;
    right: 0%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 auto;
`;

const ValueInCoins = styled.p`
    font-family: SourceSansPro-Regular;
    font-size: 2rem;
    color: #ffffff;
    margin: 2rem 0 2rem 5rem;
`;

const CoinIcon = styled.img`
    height: 10%;
    width: 10%;
    margin: 2rem 2rem 2rem 0.8rem;
`;

const Product = () => {
    const [hover, setHover] = useState(false);
    const [opac, setOpac] = useState(0.5);
    const [bag, setBag] = useState(bluebag);

    const handleMouse = () => {
        setHover(!hover);
        hover ? setOpac(0) : setOpac(0.7);
        hover ? setBag(bluebag) : setBag(whitebag);
    };

    return (
        <ProductDiv
            onMouseEnter={() => handleMouse()}
            onMouseLeave={() => handleMouse()}>
            <ShoppingBagStyles>
                <img src={bag} />
            </ShoppingBagStyles>
            <ProductImage src={iphone8}></ProductImage>
            <Line />
            <Category>Phones</Category>
            <ArticleTitle>iPhone 8</ArticleTitle>
            <SelectedProductDiv opac={opac}>
                {hover ? (
                    <div>
                        <ValueContainer>
                            <ValueInCoins>12.000</ValueInCoins>
                            <CoinIcon src={coin}></CoinIcon>
                        </ValueContainer>
                        <RedeemButton>Redeem Now</RedeemButton>
                    </div>
                ) : null}
            </SelectedProductDiv>
        </ProductDiv>
    );
};

export default Product;
