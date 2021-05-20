import styled from "styled-components";

const ProductQuantityDisplay = styled.div`
    font-family: SourceSansPro-Regular;
    /* padding: 0; */
    font-size: 1.2rem;
    color: #616161;
    letter-spacing: -0.15px;
    line-height: 1rem;
    text-align: left;
    width: ${(props) => (props.isForFooter ? 90 : 15)}%;
`;

export const ProductQuantity = ({ quantities, isForFooter }) => {
    const [q1, q2] = quantities;
    return (
        <ProductQuantityDisplay isForFooter={isForFooter}>
            {q1} of {q2} products
        </ProductQuantityDisplay>
    );
};
