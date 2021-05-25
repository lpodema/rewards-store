import styled from "styled-components";

export const SortButton = styled.button`
    background: #ededed;
    border-radius: 100px;
    /* width: 33%; */
    font-size: 1.2rem;
    height: 100%;
    line-height: 2rem;
    margin: 0 1rem;
    white-space: nowrap;
    padding: 0.3rem 1rem;
`;

const PageButton = styled.button`
    border: 1px solid #d9d9d9;
    width: 3rem;
    height: 3rem;
    /* margin: 0 8rem; */
    border-radius: 100%;
    /* flex-grow: 1; */
    /* align-self: flex-end; */
`;

const ButtonContainer = styled.div`
    width: 5%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const ChangePageButton = (props) => {
    return (
        <ButtonContainer>
            <PageButton
                onClick={props.onClickHandler}
                disabled={props.disabled}>
                {props.direction}
            </PageButton>
        </ButtonContainer>
    );
};
