import styled from "styled-components";

const SpacerDiv = styled.div`
    display: none;

    @media screen and (max-width: 1000px) {
        height: 85px;
        width: 100%;
        background-color: transparent;
        display: block;
    }
`





const Spacer = () => {

    return (
        <SpacerDiv></SpacerDiv>
    );
}


export default Spacer;