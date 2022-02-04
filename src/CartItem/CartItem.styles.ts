import styled from "styled-components";

export const Wrapper = styled.div`
    display:flex;
    font-family: Arial, Helvetica, sans-serif;
    justify-content: space-between;
    border-bottom: 1px solid lightblue;
    padding-bottom: 20px;

    img {
        max-width: 80px;
        object-fit: cover;
        margin-left: 40px;
    }

    div {
        flex: 1;
    }

    .information, .buttons {
        display: flex;
        justify-content: space-between;
    }
`;