import styled from "styled-components";
import image from "../assets/header-x2.png";

const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
`;

const BannerImage = styled.img`
    width: 100%;
    height: 100%;
    margin: auto;
    display: block;

    overflow: hidden;
    /* background-image: url; */
`;

const Category = styled.p`
    font-family: SourceSansPro-Bold;
    font-size: 4rem;
    color: #ffffff;
    text-align: left;
    position: absolute;
    bottom: 3rem;
    left: 4rem;
`;

const Banner = () => {
    return (
        <ImageContainer>
            <BannerImage src={image} />
            <Category>Electronics</Category>
        </ImageContainer>
    );
};

export default Banner;
